import { Section, SectionHeader, ServiceCard } from "@/components/ui";
import type { LucideIcon } from "lucide-react";

export interface RelatedLink {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function RelatedLinks({ items }: { items: RelatedLink[] }) {
  return (
    <Section tone="default" border="top">
      <SectionHeader eyebrow="Where to go next" title="Continue exploring" />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <ServiceCard key={item.href} {...item} />
        ))}
      </div>
    </Section>
  );
}
