import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui";

export interface Deliverable {
  title: string;
  description: string;
}

export function DeliverablesList({
  eyebrow = "What's included",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: Deliverable[];
}) {
  return (
    <Section tone="default">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" strokeWidth={1.75} />
            <div>
              <p className="font-display text-h4 font-semibold text-background">{item.title}</p>
              <p className="mt-1 text-small leading-relaxed text-background/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
