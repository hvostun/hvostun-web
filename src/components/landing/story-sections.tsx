import { content } from "@/lib/content";
import { SectionHeading } from "./ui";
import { Reveal } from "./reveal";

/** Блок миссии: заголовок слева, справа «как сейчас» → «как может быть» */
export function MissionSection() {
  const { mission } = content;
  return (
    <section
      id={mission.id}
      aria-labelledby="mission-title"
      className="scroll-mt-20 bg-tint-blue py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="mission-title" title={mission.title} />
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-7 lg:pt-2">
          <p className="text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
            {mission.textLeft}
          </p>
          <p className="border-t border-foreground/15 pt-7 text-lg leading-[1.55] tracking-[-0.01em] text-pretty text-foreground sm:text-[1.375rem]">
            {mission.textRight}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Знак кавычек над манифестом */
function QuoteMark() {
  return (
    <svg viewBox="0 0 56 40" width="56" height="40" fill="none" aria-hidden="true" className="text-blue">
      <path
        d="M4 36c2-14 8-24 20-30M30 36c2-14 8-24 20-30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Рисованная волна под манифестом */
function Wave() {
  return (
    <svg
      viewBox="0 0 260 14"
      width="260"
      height="14"
      fill="none"
      aria-hidden="true"
      className="h-auto w-[260px] max-w-[70%] text-blue"
    >
      <path
        d="M2 8c18-6 30 4 48 0s30-6 48-1 30 5 48 0 30-6 48-1 30 5 48 0 12-2 14-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Блок решения: этапы — редакционный список строками + манифест на темной полосе */
export function SolutionSection() {
  const { solution } = content;
  return (
    <>
      <section
        id={solution.id}
        aria-labelledby="solution-title"
        className="scroll-mt-20 py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <SectionHeading id="solution-title" title={solution.title} />
            <p className="text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
              {solution.intro}
            </p>
          </Reveal>

          <ol className="mt-12 border-b border-foreground/15 sm:mt-16 lg:mt-20">
            {solution.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 80}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-x-4 border-t border-foreground/15 py-6 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-8 sm:py-8"
              >
                <span className="text-[1.625rem] font-medium leading-none tracking-[-0.03em] tabular-nums text-accent sm:text-[2.375rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid gap-2 md:grid-cols-[1fr_1.4fr] md:gap-8">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-pretty text-foreground/75 sm:text-[17px]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Манифест — темная полоса между светлыми секциями */}
      <section aria-label="Принцип проекта" className="bg-primary">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:gap-8 sm:px-6 sm:py-28 lg:py-36">
          <QuoteMark />
          <blockquote className="max-w-[920px] font-quote text-[clamp(2rem,4.6vw,4rem)] italic leading-[1.12] tracking-[-0.02em] text-balance text-primary-foreground">
            {solution.ethicsNote}
          </blockquote>
          <Wave />
        </Reveal>
      </section>
    </>
  );
}
