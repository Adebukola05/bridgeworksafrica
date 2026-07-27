import { Section, Eyebrow } from "@/components/ui";

export function FootprintSection() {
  return (
    <Section tone="forestTint" border="both" padding="band">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow tone="onDark">Our footprint</Eyebrow>
          <h2 className="mt-4 font-display text-h2 text-background">Three years, one market, proven.</h2>
        </div>
        <p className="max-w-xl self-center text-body leading-relaxed text-background/75">
          BridgeWorks Africa has operated in Ibadan, Oyo State for three
          years, building the research infrastructure, field relationships
          and partnership model the institution now works from. Expansion to
          additional Nigerian states is planned, extending the same approach
          to new markets rather than starting over in each one.
        </p>
      </div>
    </Section>
  );
}
