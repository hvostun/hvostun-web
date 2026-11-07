import type { ComponentType } from "react";
import { content } from "@/lib/content";
import { SectionHeading } from "./ui";
import { Reveal } from "./reveal";
import { IconChat, IconHint, IconPetProfile, IconPlan } from "./app-icons";

/** Блок миссии: заголовок слева, справа «как сейчас» → «как может быть» */
export function MissionSection() {
  const { mission } = content;
  return (
    <section
      id={mission.id}
      aria-labelledby="mission-title"
      className="scroll-mt-20 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="split inset-x gap-y-8 sm:gap-y-10">
          <Reveal>
            <SectionHeading id="mission-title" title={mission.title} />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-7">
            <p className="text-base leading-relaxed text-pretty text-muted-foreground">
              {mission.textLeft}
            </p>
            <p className="border-t border-border pt-7 text-lg leading-[1.6] text-pretty text-foreground sm:text-[1.1875rem]">
              {mission.textRight}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Рисованная волна под манифестом */
function Wave() {
  return (
    <svg
      viewBox="0 0 220 16"
      width="220"
      height="16"
      fill="none"
      aria-hidden="true"
      className="h-auto w-[220px] max-w-[70%] text-primary"
    >
      <path
        d="M2 9c18-8 36-8 54 0s36 8 54 0 36-8 54 0 36 8 54 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Плитки этапов — цвета и иконки разделов приложения */
const STEP_TILES: readonly { bg: string; Icon: ComponentType<{ size?: number }> }[] = [
  { bg: "bg-lime", Icon: IconPetProfile },
  { bg: "bg-mist", Icon: IconHint },
  { bg: "bg-lilac", Icon: IconPlan },
  { bg: "bg-tint-blue", Icon: IconChat },
];

/** Блок решения: вступление и четыре карточки этапов + манифест */
export function SolutionSection() {
  const { solution } = content;
  return (
    <>
      <section
        id={solution.id}
        aria-labelledby="solution-title"
        className="scroll-mt-20 pb-16 pt-4 sm:pb-24 lg:pb-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="inset-x">
            <Reveal className="split lg:items-start">
              <SectionHeading id="solution-title" title={solution.title} />
              <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-[17px]">
                {solution.intro}
              </p>
            </Reveal>

            <ol className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-2">
              {solution.steps.map((step, i) => {
                const { bg, Icon } = STEP_TILES[i % STEP_TILES.length];
                return (
                  <Reveal as="li" key={step.title} delay={i * 80} className="step-card">
                    <span className={`step-tile ${bg}`}>
                      <Icon size={24} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-[1.1875rem]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-pretty text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Манифест — крупная фраза между разделами */}
      <section aria-label="Принцип проекта">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 pb-20 text-center sm:px-6 sm:pb-28">
          <blockquote className="max-w-[760px] text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-balance text-navy">
            {solution.ethicsNote}
          </blockquote>
          <Wave />
        </Reveal>
      </section>
    </>
  );
}
