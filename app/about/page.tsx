import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { MissionSection } from "@/components/about/mission-section";
import { PrinciplesGrid } from "@/components/about/principles-grid";
import { LeadershipSection } from "@/components/about/leadership-section";
import { FootprintSection } from "@/components/about/footprint-section";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "BridgeWorks Africa bridges informal businesses with the institutions shaping economic inclusion, through evidence, insight and trusted relationships.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        eyebrow="About BridgeWorks Africa"
        title="Building better business communities."
        description="BridgeWorks Africa sits between two worlds that rarely speak the same language: the informal economy and the institutions that want to engage it responsibly. Our work is to make that engagement possible, with evidence, not assumption."
      />
      <MissionSection />
      <PrinciplesGrid />
      <LeadershipSection />
      <FootprintSection />
      <CtaBand />
    </>
  );
}
