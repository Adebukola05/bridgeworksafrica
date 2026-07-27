import type { Metadata } from "next";
import { PageHero, Section, SectionHeader, StaggerGrid, StaggerItem } from "@/components/ui";
import { ReportCard } from "@/components/insights/report-card";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Research Reports",
  description:
    "In-depth, data-led reports on Nigeria's informal economy from BridgeWorks Africa, including the State of the Informal Economy report and the Community Commerce Index.",
  alternates: {
    canonical: "/insights/research-reports",
  },
};

export default function ResearchReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Research Reports"
        title="Research Reports"
        description="In-depth, data-led reports on specific sectors, markets or questions within the informal economy, published periodically and intended to inform decisions rather than simply describe a market."
      />

      <Section tone="default">
        <SectionHeader
          eyebrow="Current publications"
          title="Two reports currently in preparation."
          description="Both are built and structured; neither is yet released for public distribution while the underlying data completes verification. Verified partners can request early access."
        />
        <StaggerGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <StaggerItem>
            <ReportCard
              type="Flagship annual report"
              title="State of the Informal Economy, Third Edition"
              status="in-preparation"
              description="Our flagship report on informal business activity in Nigeria, now in its third edition, tracking patterns across the markets we work in."
            />
          </StaggerItem>
          <StaggerItem>
            <ReportCard
              type="Index"
              title="Community Commerce Index"
              status="in-preparation"
              description="A structured index tracking informal business activity across communities over time, built on our ongoing field mapping."
            />
          </StaggerItem>
        </StaggerGrid>
      </Section>

      <CtaBand />
    </>
  );
}
