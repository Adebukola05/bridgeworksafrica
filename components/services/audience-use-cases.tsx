import { Section, SectionHeader, Divider } from "@/components/ui";

export interface AudienceUseCase {
  audience: string;
  useCase: string;
}

export function AudienceUseCases({
  title,
  items,
}: {
  title: string;
  items: AudienceUseCase[];
}) {
  return (
    <Section tone="default">
      <SectionHeader eyebrow="Who it's for" title={title} />
      <div className="mt-10 flex flex-col">
        {items.map((item, index) => (
          <div key={item.audience}>
            <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
              <p className="font-display text-h4 font-semibold text-background">{item.audience}</p>
              <p className="text-body leading-relaxed text-background/75">{item.useCase}</p>
            </div>
            {index < items.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Section>
  );
}
