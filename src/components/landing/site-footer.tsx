import {
  CONTACT_EMAIL,
  content,
  SITE_NAME,
  SITE_TAGLINE,
  TELEGRAM_URL,
} from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { footer } = content;

  return (
    <footer
      id="contacts"
      className="scroll-mt-20 bg-primary pb-10 pt-16 text-primary-foreground sm:pt-24"
    >
      <div className="mx-auto max-w-6xl px-4 text-left sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-16">
          <div className="sm:basis-full lg:basis-auto lg:max-w-md">
            <p className="font-display text-[1.375rem] font-bold tracking-[-0.035em]">{SITE_NAME}</p>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-tint-blue/75">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav aria-label="Разделы в подвале">
            <ul className="flex flex-col gap-3 text-[15px]">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/85 transition-colors hover:text-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Контакты">
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-primary-foreground underline-offset-4 transition-colors hover:text-blue hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tint-blue/80 underline-offset-4 transition-colors hover:text-blue hover:underline"
                >
                  {footer.telegramLabel}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-tint-blue/15 pt-6 text-sm text-tint-blue/60">
          <p>© {year} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
