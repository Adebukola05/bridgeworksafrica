import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui";
import { whatWeDoItems } from "@/components/layout/nav-data";

export function EngagementPath() {
  return (
    <Section tone="forestTint" border="both" padding="band">
      <SectionHeader
        eyebrowTone="forest"
        eyebrow="How the disciplines connect"
        title="Understand, connect, advise, sustain."
        description="Most partners move through these in order, though each also stands on its own for institutions that only need one piece of the work."
      />
      <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
        {whatWeDoItems.map((item, index) => (
          <div key={item.href} className="flex flex-1 items-center gap-4">
            <div className="flex flex-1 flex-col rounded-md border border-navy/10 bg-surface p-5">
              <item.icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
              <span className="mt-3 font-display text-h4 font-semibold text-navy">
                {item.title}
              </span>
            </div>
            {index < whatWeDoItems.length - 1 && (
              <ArrowRight
                className="hidden h-5 w-5 shrink-0 text-forest lg:block"
                strokeWidth={2}
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
