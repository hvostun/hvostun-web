import { content } from "@/lib/content";
import { CtaLink, SectionHeading } from "./ui";
import { Reveal } from "./reveal";

const partnerDogSrc = "/images/dog_with_laptop_blue.png";

/** Партнерство: заголовок, список «кто — для чего», кнопка и иллюстрация на «столе» */
export function PartnersSection() {
  const { partners } = content;
  return (
    <section
      id={partners.id}
      aria-labelledby="partners-title"
      className="scroll-mt-20 bg-background pb-16 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="inset-x grid items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal className="flex min-w-0 flex-col gap-8 sm:gap-10">
            {/* «вместе» без выделения цветом */}
            <SectionHeading id="partners-title" title={`${partners.titleBefore} ${partners.titleAccent}`} />

            <ul className="border-b border-border">
              {partners.items.map((item) => (
                <li
                  key={item.who}
                  className="flex flex-col gap-1 border-t border-border py-5 sm:grid sm:grid-cols-[55%_minmax(0,1fr)] sm:items-baseline sm:gap-6"
                >
                  <span className="text-lg font-semibold tracking-[-0.015em] text-foreground sm:text-xl">
                    {item.who}
                  </span>
                  <span className="text-base text-muted-foreground sm:text-[17px]">{item.why}</span>
                </li>
              ))}
            </ul>

            <div>
              <CtaLink href={partners.ctaHref} variant="cta" arrow>
                {partners.cta}
              </CtaLink>
            </div>
          </Reveal>

          <div className="flex flex-col items-center">
            <img
              src={partnerDogSrc}
              alt="Собака с ноутбуком"
              width={623}
              height={669}
              className="h-auto w-44 sm:w-56 lg:w-64"
              loading="lazy"
            />
            <div aria-hidden="true" className="h-0.5 w-full rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
