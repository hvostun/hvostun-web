import { content, PILOT_FORM_URL, RESEARCH_FORM_URL } from "@/lib/content";
import { CtaLink } from "./ui";
import { Reveal } from "./reveal";
const photoDogSrc = "/images/sasha-matveeva-Dpxf-0d_BIc-unsplash.jpg";
const flowerSrc = "/images/hvostun_logo.png";

/**
 * Первый экран: асимметричная композиция.
 * Слева — заголовок, лид и две кнопки; справа — одна фотокарточка
 * с цветком-стикером. На узких экранах фото уходит под текст.
 */
export function Hero() {
  const { hero } = content;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
        <Reveal className="flex min-w-0 flex-col gap-7 sm:gap-9 lg:basis-[56%]">
          <h1 id="hero-title" className="display-1 text-foreground">
            {hero.titleBefore} <span className="text-accent">{hero.titleAccent}</span>
          </h1>
          <p className="max-w-[500px] text-[17px] leading-relaxed text-pretty text-foreground/75 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={RESEARCH_FORM_URL} variant="cta" arrow>
              {hero.primaryCta}
            </CtaLink>
            <CtaLink href={PILOT_FORM_URL} variant="outline">
              {hero.secondaryCta}
            </CtaLink>
          </div>
        </Reveal>

        <div className="hero-appear hero-appear--late flex min-w-0 justify-center lg:basis-[44%]">
          <figure className="relative w-full max-w-[340px] -rotate-[2.5deg] sm:max-w-[460px]">
            <div className="photo-print">
              <img
                src={photoDogSrc}
                alt={hero.photoAlt}
                width={590}
                height={474}
                className="block aspect-[590/474] w-full object-cover"
              />
              <figcaption className="photo-print-caption">{hero.photoCaption}</figcaption>
            </div>
            <img
              src={flowerSrc}
              alt=""
              aria-hidden="true"
              width={160}
              height={160}
              className="absolute -left-2 -top-7 w-16 -rotate-[10deg] sm:-left-7 sm:-top-8 sm:w-[88px]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
