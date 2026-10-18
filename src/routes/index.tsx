import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { ProblemTicker } from "@/components/landing/problem-ticker";
import {
  MissionSection,
  SolutionSection,
} from "@/components/landing/story-sections";
import {
  PartnersSection,
  ParticipationSection,
} from "@/components/landing/action-sections";
import { UsefulSection } from "@/components/landing/useful-section";
import { SiteFooter } from "@/components/landing/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Сервис поддержки владельцев собак",
      },
      {
        name: "description",
        content:
          "Подскажем, как шаг за шагом выстраивать спокойную совместную жизнь",
      },
      {
        property: "og:title",
        content: "Сервис поддержки владельцев собак",
      },
      {
        property: "og:description",
        content:
          "Подскажем, как шаг за шагом выстраивать спокойную совместную жизнь",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemTicker />
        <MissionSection />
        <SolutionSection />
        <UsefulSection />
        <ParticipationSection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </div>
  );
}
