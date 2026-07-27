import type { Metadata } from "next";
import { Search, Users } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { AlternatingSection } from "@/components/services/alternating-section";
import { DeliverablesList } from "@/components/services/deliverables-list";
import { MethodologySteps } from "@/components/services/methodology-steps";
import { AudienceUseCases } from "@/components/services/audience-use-cases";
import { RelatedLinks } from "@/components/services/related-links";
import { CtaBand } from "@/components/home/cta-band";
import { insightsItems } from "@/components/layout/nav-data";

export const metadata: Metadata = {
  title: "Research & Intelligence",
  description:
    "Continuous mapping and analysis of informal businesses across Nigeria: structured into intelligence institutions can act on.",
  alternates: {
    canonical: "/what-we-do/research-and-intelligence",
  },
};

const researchReportsItem = insightsItems.find((item) => item.title === "Research Reports")!;

export default function ResearchAndIntelligencePage() {
  return (
    <>
      <ServiceHero
        icon={Search}
        eyebrow="What we do / Research & Intelligence"
        title="Continuous mapping and analysis of informal businesses."
        description="We build and maintain a working picture of who is operating in the informal economy, where, and how: structured into intelligence institutions can act on, not a one-off study that goes stale."
      />

      <AlternatingSection icon={Search} imageSide="left">
        <p className="text-body leading-relaxed text-background/80">
          Informal businesses rarely appear in official registries, which
          makes them difficult for institutions to see, let alone plan
          around. BridgeWorks Africa closes that gap directly: trained field
          researchers map businesses on the ground, and that data is
          structured, verified and kept current, so the institutions we
          work with are never planning against an outdated picture of the
          market.
        </p>
      </AlternatingSection>

      <DeliverablesList
        title="What partners receive"
        items={[
          {
            title: "Business mapping",
            description:
              "A structured census of informal businesses within a defined market, sector or geography.",
          },
          {
            title: "Sector profiles",
            description:
              "Qualitative and quantitative analysis of how a specific sector of the informal economy actually operates.",
          },
          {
            title: "Periodic intelligence updates",
            description:
              "Scheduled refreshes of mapped data, so partners work from a current picture rather than a static snapshot.",
          },
          {
            title: "Indices & trackers",
            description:
              "Structured indices, built on the same underlying field data, that let partners monitor change over time.",
          },
        ]}
      />

      <MethodologySteps
        title="From the field to a working dataset."
        steps={[
          {
            title: "Scoping",
            description:
              "Define the market, sector or question the research needs to answer, in partnership with the requesting institution.",
          },
          {
            title: "Fieldwork",
            description:
              "Trained field researchers collect data directly from informal businesses, on the ground.",
          },
          {
            title: "Verification",
            description:
              "Data is cross-checked and structured before it becomes part of the working intelligence base.",
          },
          {
            title: "Delivery & maintenance",
            description:
              "Findings are delivered in the format the partner needs, then kept current through scheduled updates.",
          },
        ]}
      />

      <AudienceUseCases
        title="How different partners use this."
        items={[
          {
            audience: "Governments",
            useCase:
              "Ground-truth data to inform policy design and revenue planning for the informal sector.",
          },
          {
            audience: "Development Partners",
            useCase:
              "Baseline and monitoring data to design and evaluate economic inclusion programmes.",
          },
          {
            audience: "Corporations",
            useCase:
              "Market intelligence to inform last-mile distribution, supplier strategy and market entry.",
          },
          {
            audience: "Banks",
            useCase:
              "Segmentation data to inform financial inclusion products built for how these businesses actually operate.",
          },
        ]}
      />

      <RelatedLinks
        items={[
          {
            icon: Users,
            title: "Strategic Connections",
            description:
              "See how mapped intelligence becomes structured introductions to the right institutions.",
            href: "/what-we-do/strategic-connections",
          },
          {
            icon: researchReportsItem.icon,
            title: "Research Reports",
            description:
              "Explore the published research and reports that come out of this work.",
            href: researchReportsItem.href,
          },
        ]}
      />

      <CtaBand />
    </>
  );
}
