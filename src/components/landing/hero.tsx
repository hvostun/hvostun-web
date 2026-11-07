import { content, PILOT_FORM_URL } from "@/lib/content";
import { CtaLink } from "./ui";
import { Reveal } from "./reveal";
const photoDogSrc = "/images/sasha-matveeva-Dpxf-0d_BIc-unsplash.jpg";
const flowerSrc = "/images/hvostun_logo.png";

/**
 * Первый экран: синяя карточка, как «Следующий шаг» в приложении.
 * Слева — заголовок в три строки («своей» — отдельной строкой, лаймом), лид и две кнопки;
 * справа — фотокарточка с цветком-стикером. На узких экранах фото уходит под текст.
 */
export function Hero() {
  const { hero } = content;
  // «Помогаем» — первая строка, «собаке стать» — вторая
  const [firstWord, ...rest] = hero.titleBefore.split(" ");

  return (
    <section id="top" aria-labelledby="hero-title" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 pt-2 sm:px-6">
        <div className="color-block color-block--primary">
          <div className="inset-x relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-6">
            <Reveal className="flex min-w-0 flex-col gap-7 sm:gap-9 lg:basis-[55%]">
              <h1 id="hero-title" className="display-1 text-blue">
                {firstWord}
                <br />
                {rest.join(" ")}
                <br />
                <span className="text-lime">{hero.titleAccent}</span>
              </h1>
              <p className="max-w-[520px] text-[17px] leading-relaxed text-pretty text-cream sm:text-lg">
                {hero.subtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CtaLink href="/research" variant="lime" arrow>
                  {hero.primaryCta}
                </CtaLink>
                <CtaLink href={PILOT_FORM_URL} variant="glass">
                  {hero.secondaryCta}
                </CtaLink>
              </div>
            </Reveal>

            <div className="hero-appear hero-appear--late flex min-w-0 justify-center lg:basis-[45%]">
              <figure className="relative w-full max-w-[280px] -rotate-[2.5deg] sm:max-w-[330px]">
                <div className="photo-print photo-print--dark">
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
                  className="absolute -left-4 -top-7 w-16 -rotate-[10deg] sm:-left-7 sm:-top-8 sm:w-[84px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
