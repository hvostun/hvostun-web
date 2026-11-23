import { useEffect, useRef } from "react";
import { canTrackMetrika, trackMetrikaGoal } from "@/lib/metrika";

const MIN_VISIBLE_MS = 30_000;

export function ArticleReadingGoal({ slug }: { slug: string }) {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      !marker.current ||
      !canTrackMetrika() ||
      !("IntersectionObserver" in window)
    )
      return;

    let visibleMs = 0;
    let visibleSince: number | undefined = document.hidden
      ? undefined
      : performance.now();
    let reachedEnd = false;
    let sent = false;

    function syncVisibility() {
      const now = performance.now();
      if (visibleSince !== undefined) visibleMs += now - visibleSince;
      visibleSince = document.hidden ? undefined : now;
    }

    function check() {
      if (sent || document.hidden || !reachedEnd) return;
      const currentMs =
        visibleSince === undefined ? 0 : performance.now() - visibleSince;
      if (visibleMs + currentMs < MIN_VISIBLE_MS) return;
      sent = true;
      trackMetrikaGoal("article_read", { article_slug: slug });
      cleanup();
    }

    function onVisibilityChange() {
      syncVisibility();
      check();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !document.hidden) {
        reachedEnd = true;
        check();
      }
    });
    observer.observe(marker.current);
    document.addEventListener("visibilitychange", onVisibilityChange);
    const timer = window.setInterval(check, 1000);

    function cleanup() {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearInterval(timer);
    }

    return cleanup;
  }, [slug]);

  return <span ref={marker} aria-hidden="true" className="block h-px" />;
}
