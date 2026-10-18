import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { CtaLink, Logo } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Закрываем мобильное меню при переходе на desktop-размер
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:h-[4.5rem] sm:px-6">
        <Logo />

        {/* Desktop-навигация всегда видна */}
        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CtaLink href={content.nav.ctaHref} variant="cta" size="sm">
            {content.nav.cta}
          </CtaLink>
        </div>

        {/* Компактное меню — только на мобильных */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Мобильная навигация" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2" onClick={() => setOpen(false)}>
              <CtaLink href={content.nav.ctaHref} variant="cta" className="w-full">
                {content.nav.cta}
              </CtaLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
