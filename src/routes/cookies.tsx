import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { SITE_NAME } from "@/lib/content";

const TITLE = "Cookie и аналитика";
const LINK =
  "font-medium text-primary underline underline-offset-4 hover:no-underline";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `${TITLE} | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Как на сайте Хвостуна используется Яндекс Метрика и как ограничить сбор данных.",
      },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="display-3 mb-4 text-primary">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link to="/" className={LINK}>
          ← На главную
        </Link>
        <h1 className="display-2 mt-6 text-primary">{TITLE}</h1>
        <div className="mt-8 space-y-10 text-base leading-relaxed text-foreground sm:text-[17px]">
          <Section title="Для чего нужна аналитика">
            <p>
              Когда аналитика включена, сайт hvostun.com использует Яндекс
              Метрику, чтобы считать посещения и понимать, какие материалы и
              разделы полезны. Сервис может сохранять cookie и использовать
              идентификатор в хранилище браузера, чтобы отличать посетителей.
            </p>
          </Section>

          <Section title="Что учитываем">
            <ul className="list-disc space-y-2 pl-6">
              <li>Посещения, открытые страницы и источники переходов.</li>
              <li>
                Нажатия на кнопки «Помочь исследованию» и «Участвовать в
                пилоте».
              </li>
              <li>
                Условное дочитывание статьи: посетитель дошел до конца текста и
                провел не менее 30 секунд на видимой вкладке.
              </li>
            </ul>
            <p>
              Яндекс Метрика также может получать технические сведения о
              браузере и устройстве. В нашей настройке Вебвизор и карта кликов
              не используются.
            </p>
            <p>
              События сайта не содержат ответов анкеты или содержимого
              переписки. Клик по кнопке не означает, что анкета или заявка были
              отправлены.
            </p>
          </Section>

          <Section title="Как ограничить сбор данных">
            <p>
              Можно запретить или удалить cookie в настройках браузера. Чтобы
              ограничить сбор сведений о посещениях, Яндекс предлагает{" "}
              <a
                className={LINK}
                href="https://yandex.ru/support/metrica/ru/general/opt-out"
              >
                блокировщик Метрики
              </a>
              .
            </p>
          </Section>

          <Section title="Подробнее">
            <p>
              Как Яндекс обрабатывает данные, описано в{" "}
              <a className={LINK} href="https://yandex.ru/legal/confidential">
                Политике конфиденциальности Яндекса
              </a>{" "}
              и{" "}
              <a
                className={LINK}
                href="https://yandex.ru/legal/metrica_termsofuse"
              >
                Условиях использования Яндекс Метрики
              </a>
              . Список используемых cookie и сроки их хранения приведены в{" "}
              <a
                className={LINK}
                href="https://yandex.ru/support/metrica/ru/general/cookie-usage"
              >
                справке Метрики
              </a>
              .
            </p>
            <p>
              Вопросы об аналитике можно задать по{" "}
              <a className={LINK} href="#contacts">
                контактам проекта
              </a>{" "}
              в подвале страницы.
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
