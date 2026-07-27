import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { ContentTypesGrid } from "@/components/insights/content-types-grid";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research reports, articles, case studies and resources on Nigeria's informal economy, from BridgeWorks Africa.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Insights"
        title="Research made usable."
        description="Everything BridgeWorks Africa publishes comes out of the same field intelligence, organised here by what a reader actually needs: a quick read, a full report, a documented outcome, or a working template."
      />

      <Section tone="default" border="bottom">
        <p className="max-w-2xl text-body leading-relaxed text-background/75">
          Every publication is written to the standard institutional partners
          expect, evidence-first, plainly stated, and free of the marketing
          language that makes research harder to act on. Where a figure is
          not yet verified for public release, it is marked as such rather
          than presented as settled.
        </p>
      </Section>

      <ContentTypesGrid />
      <CtaBand />
    </>
  );
}
