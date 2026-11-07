import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow } from "@/components/landing/ui";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { SITE_NAME } from "@/lib/content";

const TITLE = "Политика в отношении обработки персональных данных";
const PDF_URL = "/ppd.pdf";

export const Route = createFileRoute("/ppd")({
  head: () => ({
    meta: [
      { title: `${TITLE} — ${SITE_NAME}` },
      {
        name: "description",
        content: "Политика обработки персональных данных проекта.",
      },
    ],
    links: [{ rel: "canonical", href: "/ppd" }],
  }),
  component: PpdPage,
});

function PpdPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="-my-3 inline-block py-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          ← На главную
        </Link>
        <h1 className="display-2 mt-6 text-primary">
          {TITLE}
        </h1>
        <iframe
          src={PDF_URL}
          title={TITLE}
          className="mt-8 h-[80vh] w-full rounded-[20px] border-[1.5px] border-primary/25 bg-background"
        />
        <a
          href={PDF_URL}
          className="text-link mt-5"
        >
          Открыть документ
          <Arrow />
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
