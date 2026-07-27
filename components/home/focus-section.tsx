import { Section, Eyebrow } from "@/components/ui";

export function FocusSection() {
  return (
    <Section tone="forestTint" border="both" padding="band">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow tone="onDark">Where we work</Eyebrow>
          <h2 className="mt-4 font-display text-h2 text-background">
            Rooted in Oyo State, built to expand.
          </h2>
        </div>
        <p className="max-w-xl self-center text-body leading-relaxed text-background/75">
          BridgeWorks Africa is currently active in Ibadan, Oyo State, where
          three years of fieldwork have built a working model for engaging
          informal businesses at scale. Expansion to additional Nigerian
          states is underway, extending the same research infrastructure and
          partnership approach to new markets.
        </p>
      </div>
    </Section>
  );
}
