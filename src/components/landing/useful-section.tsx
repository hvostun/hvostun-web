import { content } from "@/lib/content";
import { CtaLink } from "./ui";
import { Reveal } from "./reveal";

/** «Полезное»: голубой блок — заголовок слева, текст и кнопка справа, без картинки */
export function UsefulSection() {
  const { useful } = content;
  return (
    <section
      id={useful.id}
      aria-labelledby="polezno-title"
      className="scroll-mt-20 pb-16 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="color-block color-block--tint">
          <div className="split inset-x lg:items-start">
            <h2 id="polezno-title" className="display-2 whitespace-pre-line text-primary">
              {useful.title}
            </h2>
            <div className="flex flex-col items-start gap-7">
              <p className="text-lg leading-relaxed text-pretty text-foreground sm:text-[1.1875rem]">
                {useful.text}
              </p>
              <CtaLink href="/polezno" variant="white" arrow>
                {useful.cta}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
