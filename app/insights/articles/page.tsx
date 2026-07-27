import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { PageHero, Section, EmptyState } from "@/components/ui";
import { TagList } from "@/components/insights/tag-list";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Shorter, ongoing analysis on policy, partnership models and the informal economy from BridgeWorks Africa.",
  alternates: {
    canonical: "/insights/articles",
  },
};

// No articles have been published yet. When the first one is ready, replace
// this EmptyState with a grid of <ArticleCard /> (see components/insights/article-card.tsx),
// mapped over a real `articles` data array, never seed this grid with
// placeholder or invented article content.
export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Articles"
        title="Articles"
        description="Shorter, ongoing analysis on policy questions, partnership models and how the informal economy is evolving, for readers who need to stay current, not commission a full report."
      />

      <TagList
        eyebrow="Topics we cover"
        title="What Articles will focus on"
        tags={["Policy & Regulation", "Partnership Models", "Field Notes", "Market Trends"]}
      />

      <Section tone="default">
        <EmptyState
          icon={Newspaper}
          title="No articles published yet"
          description="New articles will appear here as they're published. In the meantime, explore our research reports for in-depth analysis."
          actionLabel="View Research Reports"
          actionHref="/insights/research-reports"
        />
      </Section>

      <CtaBand />
    </>
  );
}
