import { Section, SectionHeader } from "@/components/ui";

export interface MethodologyStep {
  title: string;
  description: string;
}

export function MethodologySteps({
  title,
  steps,
}: {
  title: string;
  steps: MethodologyStep[];
}) {
  return (
    <Section tone="surface" border="top">
      <SectionHeader eyebrow="How it works" title={title} />
      <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col">
            <span className="font-display text-h2 text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 font-display text-h4 font-semibold text-background">{step.title}</p>
            <p className="mt-2 text-small leading-relaxed text-background/70">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
