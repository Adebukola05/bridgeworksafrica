import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { AlternatingSection } from "@/components/services/alternating-section";
import { DeliverablesList } from "@/components/services/deliverables-list";
import { MethodologySteps } from "@/components/services/methodology-steps";
import { AudienceUseCases } from "@/components/services/audience-use-cases";
import { RelatedLinks } from "@/components/services/related-links";
import { CtaBand } from "@/components/home/cta-band";
import { whatWeDoItems } from "@/components/layout/nav-data";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "Evidence-based guidance for institutions designing programmes, financial products or policy for the informal economy.",
  alternates: {
    canonical: "/what-we-do/advisory-services",
  },
};

const connectionsItem = whatWeDoItems.find((item) => item.title === "Strategic Connections")!;
const partnershipItem = whatWeDoItems.find((item) => item.title === "Partnership Support")!;

export default function AdvisoryServicesPage() {
  return (
    <>
      <ServiceHero
        icon={Compass}
        eyebrow="What we do / Advisory Services"
        title="Guidance for institutions designing programmes or policy."
        description="We help institutions translate evidence about how the informal economy actually operates into decisions that hold up once they reach the field: programme design, product design, and policy."
      />

      <AlternatingSection icon={Compass} imageSide="left">
        <p className="text-body leading-relaxed text-background/80">
          Programmes and products built for the informal economy often fail
          for the same reason: they are designed around assumptions about how
          informal businesses behave, rather than evidence of how they
          actually do. Our advisory work exists to close that gap before a
          decision is made, not after it has already been implemented.
        </p>
      </AlternatingSection>

      <DeliverablesList
        title="What partners receive"
        items={[
          {
            title: "Programme design input",
            description:
              "Evidence-based input into the design of programmes or products intended to reach informal businesses.",
          },
          {
            title: "Policy briefings",
            description:
              "Structured briefings that translate field intelligence into policy-relevant analysis.",
          },
          {
            title: "Product feasibility review",
            description:
              "Assessment of whether a proposed financial or commercial product fits how informal businesses actually operate.",
          },
          {
            title: "Ongoing advisory retainer",
            description:
              "Continued access to research-backed advice as a programme or policy evolves.",
          },
        ]}
      />

      <MethodologySteps
        title="From a question to a defensible recommendation."
        steps={[
          {
            title: "Problem framing",
            description:
              "Clarify the decision the institution actually needs to make, not just the topic it wants covered.",
          },
          {
            title: "Evidence review",
            description:
              "Draw on the research and intelligence base relevant to that decision.",
          },
          {
            title: "Option development",
            description:
              "Develop and stress-test options against how informal businesses actually behave, not assumptions about them.",
          },
          {
            title: "Recommendation & handover",
            description:
              "Deliver a clear recommendation, with the reasoning made explicit enough to defend internally.",
          },
        ]}
      />

      <AudienceUseCases
        title="How different partners use this."
        items={[
          {
            audience: "Governments",
            useCase:
              "Evidence-based input into policy affecting the informal sector, before it is finalised.",
          },
          {
            audience: "Development Partners",
            useCase:
              "Programme design review to ensure interventions match how target businesses actually operate.",
          },
          {
            audience: "Corporations",
            useCase:
              "Feasibility review for products or channels aimed at informal-economy customers or suppliers.",
          },
          {
            audience: "Banks",
            useCase:
              "Advisory support in designing financial products suited to informal business cash flows and behaviour.",
          },
        ]}
      />

      <RelatedLinks
        items={[
          {
            icon: connectionsItem.icon,
            title: connectionsItem.title,
            description: "See how the businesses behind this advice are identified and matched.",
            href: connectionsItem.href,
          },
          {
            icon: partnershipItem.icon,
            title: partnershipItem.title,
            description: "See how we support a programme once advice becomes an active partnership.",
            href: partnershipItem.href,
          },
        ]}
      />

      <CtaBand />
    </>
  );
}
