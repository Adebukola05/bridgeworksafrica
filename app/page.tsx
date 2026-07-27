import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { AudienceBand } from "@/components/home/audience-band";
import { ServicesGrid } from "@/components/home/services-grid";
import { FocusSection } from "@/components/home/focus-section";
import { InsightsPreview } from "@/components/home/insights-preview";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "BridgeWorks Africa, Africa's Informal Economy Research & Intelligence Partner",
  description:
    "BridgeWorks Africa researches, maps and maintains intelligence on informal businesses across Nigeria, connecting them with governments, corporations, financial institutions and development partners.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceBand />
      <ServicesGrid />
      <FocusSection />
      <InsightsPreview />
      <CtaBand />
    </>
  );
}
