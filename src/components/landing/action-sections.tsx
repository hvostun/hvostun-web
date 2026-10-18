import partnerDogAsset from "@/assets/partner-dog-new.png.asset.json";
import { CONTACT_EMAIL, content } from "@/lib/content";
import { CtaLink, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

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
