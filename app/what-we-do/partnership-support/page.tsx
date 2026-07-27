import type { Metadata } from "next";
import { Handshake } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { AlternatingSection } from "@/components/services/alternating-section";
import { DeliverablesList } from "@/components/services/deliverables-list";
import { MethodologySteps } from "@/components/services/methodology-steps";
import { AudienceUseCases } from "@/components/services/audience-use-cases";
import { RelatedLinks } from "@/components/services/related-links";
import { CtaBand } from "@/components/home/cta-band";
import { whatWeDoItems, insightsItems } from "@/components/layout/nav-data";

export const metadata: Metadata = {
  title: "Partnership Support",
  description:
    "Coordination, monitoring and reporting infrastructure that keeps a partnership with informal businesses accountable once it is underway.",
  alternates: {
    canonical: "/what-we-do/partnership-support",
  },
};

const advisoryItem = whatWeDoItems.find((item) => item.title === "Advisory Services")!;
const caseStudiesItem = insightsItems.find((item) => item.title === "Case Studies")!;

export default function PartnershipSupportPage() {
  return (
    <>
      <ServiceHero
        icon={Handshake}
        eyebrow="What we do / Partnership Support"
        title="Coordination and reporting once partnerships are underway."
        description="A partnership is only as good as what it delivers after launch. We provide the coordination, monitoring and reporting infrastructure that keeps it accountable, so institutions can see what a programme is actually achieving."
      />

      <AlternatingSection icon={Handshake} imageSide="left">
        <p className="text-body leading-relaxed text-background/80">
          Most partnerships involving informal businesses lose momentum after
          launch, not before it: coordination lapses, reporting stalls, and
          nobody can say with confidence what the programme has actually
          achieved. Partnership Support exists to prevent that: a single
          point of accountability for the life of the engagement.
        </p>
      </AlternatingSection>

      <DeliverablesList
        title="What partners receive"
        items={[
          {
            title: "Coordination management",
            description:
              "Day-to-day coordination between the institution and the informal businesses or field teams involved in the partnership.",
          },
          {
            title: "Monitoring & reporting",
            description:
              "Structured reporting against the partnership's original objectives, on a regular schedule.",
          },
          {
            title: "Issue resolution",
            description:
              "A single point of contact to resolve problems as they arise, before they stall the partnership.",
          },
          {
            title: "Outcome documentation",
            description:
              "Documentation of what a partnership achieved, feeding back into the research and intelligence base.",
          },
        ]}
      />

      <MethodologySteps
        title="From launch to a documented outcome."
        steps={[
          {
            title: "Onboarding",
            description:
              "Establish reporting lines, schedules and success criteria at the start of the partnership.",
          },
          {
            title: "Active coordination",
            description:
              "Manage day-to-day communication and logistics between all parties involved.",
          },
          {
            title: "Monitoring",
            description:
              "Track progress against agreed objectives on a regular schedule.",
          },
          {
            title: "Review & documentation",
            description:
              "Document outcomes at defined intervals, feeding lessons back into future work.",
          },
        ]}
      />

      <AudienceUseCases
        title="How different partners use this."
        items={[
          {
            audience: "Governments",
            useCase:
              "Oversight of multi-stakeholder programmes involving informal businesses across several agencies.",
          },
          {
            audience: "Development Partners",
            useCase:
              "Independent monitoring and reporting for donor-funded programmes reaching informal businesses.",
          },
          {
            audience: "Corporations",
            useCase:
              "Coordination of supplier or distributor relationships with informal businesses at scale.",
          },
          {
            audience: "Banks",
            useCase:
              "Tracking of portfolio performance for lending programmes targeting informal businesses.",
          },
        ]}
      />

      <RelatedLinks
        items={[
          {
            icon: advisoryItem.icon,
            title: advisoryItem.title,
            description: "See how the programme behind this partnership was designed.",
            href: advisoryItem.href,
          },
          {
            icon: caseStudiesItem.icon,
            title: caseStudiesItem.title,
            description: "See how completed partnerships and their outcomes are documented.",
            href: caseStudiesItem.href,
          },
        ]}
      />

      <CtaBand />
    </>
  );
}
