import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Arrow } from "@/components/landing/ui";
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
  const { researchQuiz, researchWhy } = content;

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
          className="mt-8 flex flex-col gap-6 rounded-[20px] bg-primary p-7 text-primary-foreground sm:p-10 lg:p-14"
        >
          <h1 id="research-quiz-title" className="display-2 text-blue">
            {researchQuiz.title}
          </h1>
          <p className="text-base leading-relaxed text-pretty text-cream sm:text-lg">{researchQuiz.text}</p>
          <div className="flex flex-col gap-3">
            {researchQuiz.options.map((option) => (
              <a
                key={option.value}
                href={RESEARCH_FORM_URLS[option.value]}
                target="_blank"
                rel="noopener noreferrer"
                className="answer"
              >
                {option.label}
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="research-why-title" className="mt-16 sm:mt-20">
          <h2 id="research-why-title" className="display-3 text-primary">
            {researchWhy.title}
          </h2>
          <ul className="mt-6 border-b border-border">
            {researchWhy.items.map((item) => (
              <li
                key={item}
                className="border-t border-border py-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-[17px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
