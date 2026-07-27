import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { ServicesOverviewGrid } from "@/components/what-we-do/services-overview-grid";
import { EngagementPath } from "@/components/what-we-do/engagement-path";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Research and intelligence, strategic connections, advisory services and partnership support, four disciplines BridgeWorks Africa uses to bridge informal businesses with institutions.",
  alternates: {
    canonical: "/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="What we do"
        title="Four disciplines. One institution."
        description="BridgeWorks Africa's work spans research, connection, advice and partnership support, each built on the same field intelligence, and each available on its own or as a continuous engagement."
      />
      <ServicesOverviewGrid />
      <EngagementPath />
      <CtaBand />
    </>
  );
}
