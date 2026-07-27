import type { Metadata } from "next";
import { Users } from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { AlternatingSection } from "@/components/services/alternating-section";
import { DeliverablesList } from "@/components/services/deliverables-list";
import { MethodologySteps } from "@/components/services/methodology-steps";
import { AudienceUseCases } from "@/components/services/audience-use-cases";
import { RelatedLinks } from "@/components/services/related-links";
import { CtaBand } from "@/components/home/cta-band";
import { whatWeDoItems } from "@/components/layout/nav-data";

export const metadata: Metadata = {
  title: "Strategic Connections",
  description:
    "Structured introductions between informal businesses and the governments, corporations, financial institutions and development partners positioned to work with them.",
  alternates: {
    canonical: "/what-we-do/strategic-connections",
  },
};

const researchItem = whatWeDoItems.find((item) => item.title === "Research & Intelligence")!;
const advisoryItem = whatWeDoItems.find((item) => item.title === "Advisory Services")!;

export default function StrategicConnectionsPage() {
  return (
    <>
      <ServiceHero
        icon={Users}
        eyebrow="What we do / Strategic Connections"
        title="Structured introductions to the right institutions."
        description="We connect informal businesses with the governments, corporations, financial institutions and development partners positioned to work with them, matched deliberately on the evidence, not distributed broadly."
      />

      <AlternatingSection icon={Users} imageSide="left">
        <p className="text-body leading-relaxed text-background/80">
          A connection is only useful if it fits. Every introduction
          BridgeWorks Africa makes is grounded in the research and
          intelligence that precedes it: the business and the institution
          are matched on real criteria, not proximity or goodwill, and the
          relationship is tracked to confirm it actually takes hold.
        </p>
      </AlternatingSection>

      <DeliverablesList
        title="What partners receive"
        items={[
          {
            title: "Partner matching",
            description:
              "Identification of informal businesses that fit a specific institutional need: supplier profile, lending criteria, sector or geography.",
          },
          {
            title: "Structured introductions",
            description:
              "Facilitated, documented introductions between matched businesses and institutions, not informal referrals.",
          },
          {
            title: "Readiness preparation",
            description:
              "Preparing informal businesses to engage confidently and credibly with formal institutions.",
          },
          {
            title: "Engagement tracking",
            description:
              "Following up on introductions to confirm they convert into a working relationship, not just first contact.",
          },
        ]}
      />

      <MethodologySteps
        title="From a fit on paper to a working relationship."
        steps={[
          {
            title: "Needs definition",
            description:
              "Understand exactly what the institution is looking for: business type, size, sector or geography.",
          },
          {
            title: "Candidate identification",
            description:
              "Draw on the research and intelligence base to identify businesses that genuinely fit the need.",
          },
          {
            title: "Readiness check",
            description:
              "Confirm the business is prepared for the engagement, and prepare them further where needed.",
          },
          {
            title: "Introduction & follow-up",
            description:
              "Facilitate the introduction directly, then track whether it converts into a working relationship.",
          },
        ]}
      />

      <AudienceUseCases
        title="How different partners use this."
        items={[
          {
            audience: "Governments",
            useCase:
              "Connecting informal businesses to registration, formalisation or support programmes they qualify for.",
          },
          {
            audience: "Corporations",
            useCase:
              "Sourcing verified informal suppliers and distributors for last-mile and supply chain needs.",
          },
          {
            audience: "Banks",
            useCase:
              "Referring qualified informal businesses into financial products built for how they actually operate.",
          },
          {
            audience: "Development Partners",
            useCase:
              "Connecting programme participants to institutions that can sustain support beyond the programme's life.",
          },
        ]}
      />

      <RelatedLinks
        items={[
          {
            icon: researchItem.icon,
            title: researchItem.title,
            description: "See the intelligence base every introduction is matched against.",
            href: researchItem.href,
          },
          {
            icon: advisoryItem.icon,
            title: advisoryItem.title,
            description: "See how we advise institutions designing the programmes behind these connections.",
            href: advisoryItem.href,
          },
        ]}
      />

      <CtaBand />
    </>
  );
}
