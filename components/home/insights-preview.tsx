import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader, InsightCard, InsightCardGrid, InsightCardItem } from "@/components/ui";
import { insightsItems } from "@/components/layout/nav-data";

export function InsightsPreview() {
  return (
    <Section tone="default">
      <SectionHeader
        eyebrow="Insights"
        title="Research made usable."
        align="between"
        action={
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-small font-medium text-navy"
          >
            Visit the Insights hub
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        }
      />
      <InsightCardGrid columns={4} className="mt-12">
        {insightsItems.map((item) => (
          <InsightCardItem key={item.href}>
            <InsightCard kicker="Insights" {...item} />
          </InsightCardItem>
        ))}
      </InsightCardGrid>
    </Section>
  );
}
