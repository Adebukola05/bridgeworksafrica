import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PageHero, Section, EmptyState } from "@/components/ui";
import { TagList } from "@/components/insights/tag-list";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Documented partnerships and outcomes from BridgeWorks Africa's work with governments, corporations, banks and development partners.",
  alternates: {
    canonical: "/insights/case-studies",
  },
};

// No partnership has been documented for public release yet. When the first
// is ready, replace EmptyState with a grid of <CaseStudyCard /> (see
// components/insights/case-study-card.tsx), never seed this grid with
// invented outcomes or placeholder partner names.
export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Case Studies"
        title="Case Studies"
        description="Documented accounts of completed partnerships and programmes, what was done, what changed, and what other institutions can take from it."
      />

      <TagList
        eyebrow="Where case studies will come from"
        title="Types of partnerships we document"
        tags={[
          "Government Partnerships",
          "Corporate Sourcing & Supply Chains",
          "Financial Inclusion Pilots",
          "Development Programmes",
        ]}
      />

      <Section tone="default">
        <EmptyState
          icon={BookOpen}
          title="No case studies published yet"
          description="Documented partnerships will appear here once they are complete and cleared for public release. In the meantime, see how a partnership is supported from launch onward."
          actionLabel="See Partnership Support"
          actionHref="/what-we-do/partnership-support"
        />
      </Section>

      <CtaBand />
    </>
  );
}
