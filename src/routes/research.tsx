import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { CtaLink, SectionHeading } from "@/components/landing/ui";
import { content, RESEARCH_FORM_URLS, SITE_NAME } from "@/lib/content";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: `${content.researchQuiz.title} — ${SITE_NAME}` },
      { name: "description", content: content.researchQuiz.text },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { researchQuiz } = content;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          ← На главную
        </Link>
        <section
          aria-labelledby="research-quiz-title"
          className="mt-8 flex flex-col gap-7 rounded-[20px] bg-tint-blue p-7 sm:p-10 lg:p-14"
        >
          <SectionHeading
            id="research-quiz-title"
            title={researchQuiz.title}
            className="text-[clamp(2rem,3.6vw,3rem)]"
          />
          <p className="text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg">
            {researchQuiz.text}
          </p>
          <div className="flex flex-col gap-3">
            {researchQuiz.options.map((option) => (
              <CtaLink
                key={option.value}
                href={RESEARCH_FORM_URLS[option.value]}
                variant="light"
                arrow
                className="w-full justify-between"
              >
                {option.label}
              </CtaLink>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
