import { Link } from "@tanstack/react-router";
import usefulDogAsset from "@/assets/useful-dog-stretch.png.asset.json";
import { content } from "@/lib/content";
import { Arrow } from "./ui";
import { Reveal } from "./reveal";

/** «Полезное»: вся карточка — ссылка на статью; справа иллюстрация на голубом */
export function UsefulSection() {
  const { useful } = content;
  return (
    <section
      id={useful.id}
      aria-labelledby="polezno-title"
      className="scroll-mt-20 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Link
            to="/polezno/pervye-dni-doma"
            className="card-link grid overflow-hidden rounded-[18px] border border-foreground/15 bg-card lg:grid-cols-[1.3fr_1fr]"
          >
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-4">
                <h2 id="polezno-title" className="display-2 text-foreground">
                  {useful.title}
                </h2>
                <p className="max-w-[460px] text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
                  {useful.text}
                </p>
              </div>
              <span className="text-link self-start">
                {useful.cta}
                <Arrow />
              </span>
            </div>

            <div className="flex items-center justify-center bg-tint-blue p-8 sm:p-10">
              {/* multiply: светлый фон иллюстрации сливается с голубым */}
              <img
                src={usefulDogAsset.url}
                alt={useful.imageAlt}
                width={320}
                height={320}
                className="h-auto w-48 object-contain mix-blend-multiply sm:w-64 lg:w-72"
                loading="lazy"
              />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
