import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/content";

// TODO: заменить содержимое страницы утвержденным текстом
// политики обработки персональных данных перед публикацией сайта.
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Политика обработки персональных данных — ${SITE_NAME}` },
      {
        name: "description",
        content: "Политика обработки персональных данных проекта.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        ← На главную
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Политика обработки персональных данных
      </h1>
      <div className="mt-8 rounded-2xl border border-dashed border-foreground/40 bg-muted p-6">
        <p className="leading-relaxed text-foreground/80">
          Документ находится в подготовке. Перед публикацией сайта здесь будет
          размещен утвержденный текст политики обработки персональных данных
          проекта.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Статус: временная страница-заглушка.
        </p>
      </div>
    </main>
  );
}
