import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { Arrow } from "@/components/landing/ui";
import { content, SITE_NAME } from "@/lib/content";

const URL = "https://hvostun.com/polezno";

export const Route = createFileRoute("/polezno/")({
  head: () => ({
    meta: [
      { title: `${content.useful.title} — ${SITE_NAME}` },
      { name: "description", content: content.useful.text },
      { property: "og:title", content: content.useful.title },
      { property: "og:description", content: content.useful.text },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ArticlesPage,
});

/**
 * Список статей раздела «Полезное».
 * Заголовок и текст раздела уже есть на главной, поэтому на странице сразу статьи;
 * h1 скрыт визуально, но остается для поисковиков и экранных дикторов.
 * Строка статьи — та же сетка «слева — справа», что в разделах главной.
 */
function ArticlesPage() {
  const { useful } = content;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        <div className="inset-x">
          <Link
            to="/"
            className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← На главную
          </Link>
          <h1 className="sr-only">{useful.title}</h1>

          <ul className="mt-8 border-b border-border sm:mt-10">
            {useful.articles.map((article) =>
              article.soon ? (
                // Анонс будущей статьи: без ссылки, чтобы не вести на пустую страницу
                <li key={article.href} className="split border-t border-border py-7 sm:py-8 lg:items-start">
                  <div className="flex flex-col items-start gap-2">
                    <span className="rounded-full bg-lilac px-3 py-1 text-sm font-semibold text-navy">
                      {useful.soonLabel}
                    </span>
                    <h2 className="text-xl font-semibold leading-snug tracking-[-0.01em] text-pretty text-foreground/70 sm:text-[1.375rem]">
                      {article.title}
                    </h2>
                  </div>
                </li>
              ) : (
                <li key={article.href} className="split border-t border-border py-7 sm:py-8 lg:items-start">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-muted-foreground">{article.readingTime}</span>
                    <h2 className="text-xl font-semibold leading-snug tracking-[-0.01em] text-pretty text-foreground sm:text-[1.375rem]">
                      <Link to={article.href} className="transition-colors hover:text-primary">
                        {article.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-base leading-relaxed text-pretty text-muted-foreground">{article.lead}</p>
                    <Link to={article.href} className="text-link" aria-label={`${useful.articleCta}: ${article.title}`}>
                      {useful.articleCta}
                      <Arrow />
                    </Link>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
