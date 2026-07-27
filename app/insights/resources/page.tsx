import type { Metadata } from "next";
import { Folder } from "lucide-react";
import { PageHero, Section, EmptyState } from "@/components/ui";
import { TagList } from "@/components/insights/tag-list";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Frameworks, templates and reference materials from BridgeWorks Africa for working with Nigeria's informal economy.",
  alternates: {
    canonical: "/insights/resources",
  },
};

// No resource is yet cleared for public download. When the first is ready,
// replace EmptyState with a grid of <ResourceCard /> (see
// components/insights/resource-card.tsx), link only to real files, never a
// placeholder download.
export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Resources"
        title="Resources"
        description="Frameworks, templates and reference materials that institutions can use directly in their own work with informal businesses."
      />

      <TagList
        eyebrow="What this will include"
        title="Formats we plan to publish"
        tags={["Frameworks", "Templates", "Glossaries", "Data Guides"]}
      />

      <Section tone="default">
        <EmptyState
          icon={Folder}
          title="No resources published yet"
          description="Downloadable frameworks and templates will appear here once they're ready for public release. If you need something specific in the meantime, get in touch directly."
          actionLabel="Contact us"
          actionHref="/contact"
        />
      </Section>

      <CtaBand />
    </>
  );
}
