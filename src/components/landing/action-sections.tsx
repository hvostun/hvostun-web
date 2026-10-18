import partnerDogAsset from "@/assets/partner-dog-new.png.asset.json";
import photoGirl from "@/assets/hero-photo-girl.png.asset.json";
import {
  CONTACT_EMAIL,
  content,
  PILOT_FORM_URL,
  RESEARCH_FORM_URL,
} from "@/lib/content";
import { CtaLink, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

/** Иконка часов для пометки «Займет до 15 минут» */
function ClockIcon() {
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 5v4l2.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Исследование и пилот на общем голубом фоне — две разные карточки друг под другом:
 * светлая горизонтальная (исследование) и темная с фотокарточкой (пилот).
 */
export function ParticipationSection() {
  const { research, pilot } = content;
  return (
    <section aria-label="Участие" className="bg-tint-blue py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:gap-6 sm:px-6">
        <Reveal>
          <article
            id={research.id}
            aria-labelledby="research-title"
            className="grid scroll-mt-24 gap-6 rounded-[20px] bg-background p-7 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:p-16"
          >
            <SectionHeading
              id="research-title"
              title={research.title}
              className="text-[clamp(2rem,3.6vw,3rem)]"
            />
            <div className="flex flex-col gap-7 lg:pt-1.5">
              <p className="text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
                {research.text}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <CtaLink href={RESEARCH_FORM_URL} variant="cta" arrow>
                  {research.cta}
                </CtaLink>
                <span className="inline-flex items-center justify-center gap-2 text-[15px] font-medium text-foreground/65">
                  <ClockIcon />
                  {research.duration}
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article
            id={pilot.id}
            aria-labelledby="pilot-title"
            className="grid scroll-mt-24 items-center gap-10 overflow-hidden rounded-[20px] bg-primary p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:p-16"
          >
            <div className="flex flex-col gap-6 sm:gap-7">
              <SectionHeading
                id="pilot-title"
                title={pilot.titleBefore}
                accent={pilot.titleAccent}
                accentClassName="text-blue"
                inverted
                className="text-[clamp(2rem,4.2vw,3.5rem)]"
              />
              <p className="max-w-[540px] text-base leading-relaxed text-pretty text-primary-foreground/80 sm:text-lg">
                {pilot.text}
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-6">
                <CtaLink href={PILOT_FORM_URL} variant="ondark" arrow>
                  {pilot.cta}
                </CtaLink>
                <span className="text-center text-[15px] font-medium text-blue sm:text-left">
                  {pilot.note}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <figure className="photo-print photo-print--dark w-[min(240px,72%)] rotate-3 sm:w-[min(340px,100%)]">
                <img
                  src={photoGirl.url}
                  alt={pilot.photoAlt}
                  width={487}
                  height={580}
                  loading="lazy"
                  className="block aspect-[487/580] w-full object-cover"
                />
              </figure>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/** Партнерство: заголовок, список «кто — для чего», контакты и иллюстрация на «столе» */
export function PartnersSection() {
  const { partners } = content;
  return (
    <section
      id={partners.id}
      aria-labelledby="partners-title"
      className="scroll-mt-20 bg-background py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
        <Reveal className="flex min-w-0 flex-col gap-8 sm:gap-10">
          <SectionHeading
            id="partners-title"
            title={partners.titleBefore}
            accent={partners.titleAccent}
          />

          <ul className="border-b border-foreground/15">
            {partners.items.map((item) => (
              <li
                key={item.who}
                className="flex flex-col gap-1 border-t border-foreground/15 py-5 sm:grid sm:grid-cols-[55%_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="text-lg font-semibold tracking-[-0.015em] text-foreground sm:text-xl">
                  {item.who}
                </span>
                <span className="text-base text-foreground/75 sm:text-[17px]">{item.why}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <CtaLink href={partners.ctaHref} variant="outline" arrow>
              {partners.cta}
            </CtaLink>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-link self-center sm:self-auto">
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col items-center">
          <img
            src={partnerDogAsset.url}
            alt="Собака с ноутбуком"
            width={320}
            height={320}
            className="h-auto w-48 object-contain mix-blend-multiply sm:w-64 lg:w-80"
            loading="lazy"
          />
          <div aria-hidden="true" className="h-[1.5px] w-full rounded-full bg-accent/55" />
        </div>
      </div>
    </section>
  );
}
