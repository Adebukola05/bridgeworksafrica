import { Section, Eyebrow } from "@/components/ui";

export function MissionSection() {
  return (
    <Section tone="default">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <Eyebrow tone="onDark">Our mission</Eyebrow>
        </div>
        <p className="max-w-2xl font-display text-h2 leading-snug text-background">
          To bridge informal businesses with the institutions shaping
          economic inclusion, through evidence, insight and trusted
          relationships, not training alone.
        </p>
      </div>
    </Section>
  );
}
