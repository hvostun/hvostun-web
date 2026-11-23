type Goal = "research_click" | "pilot_click" | "article_read";
type GoalParams = Record<string, string>;
type MetrikaCommand =
  | [
      number,
      "init",
      { defer: boolean; accurateTrackBounce: boolean; webvisor: boolean },
    ]
  | [number, "hit", string, { referer: string; title: string }]
  | [number, "reachGoal", Goal, GoalParams];

type MetrikaFunction = ((...args: MetrikaCommand) => void) & {
  a?: MetrikaCommand[];
  l?: number;
};

const counterId = 114251928;
const enabled = import.meta.env["VITE_YANDEX_METRIKA_ENABLED"] === "true";
let initialized = false;
let lastPage: string | undefined;

export function canTrackMetrika() {
  return (
    enabled &&
    typeof window !== "undefined" &&
    (window.location.hostname === "hvostun.com" ||
      window.location.hostname === "www.hvostun.com")
  );
}

function getMetrika() {
  if (!canTrackMetrika()) return;
  const host = window as Window & { ym?: MetrikaFunction };
  if (!host.ym) {
    const queue: MetrikaFunction = (...args) => {
      (queue.a ??= []).push(args);
    };
    queue.l = Date.now();
    host.ym = queue;
  }
  if (!initialized) {
    initialized = true;
    host.ym(counterId, "init", {
      defer: true,
      accurateTrackBounce: true,
      webvisor: false,
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`;
    document.head.appendChild(script);
  }
  return host.ym;
}

export function trackMetrikaPage(href: string) {
  const ym = getMetrika();
  if (!ym) return;
  const url = new URL(href, window.location.origin);
  url.hash = "";
  if (url.href === lastPage) return;
  ym(counterId, "hit", url.href, {
    referer: lastPage ?? document.referrer,
    title: document.title,
  });
  lastPage = url.href;
}

export function trackMetrikaGoal(goal: Goal, params: GoalParams) {
  getMetrika()?.(counterId, "reachGoal", goal, params);
}
