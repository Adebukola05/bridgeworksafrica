import { Section, SectionHeader } from "@/components/ui";

export interface TagListProps {
  eyebrow: string;
  title: string;
  tags: string[];
}

export function TagList({ eyebrow, title, tags }: TagListProps) {
  return (
    <Section tone="default" border="bottom" padding="compact">
      <SectionHeader eyebrow={eyebrow} title={title} />
      <ul className="mt-6 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-background/20 px-4 py-1.5 text-small font-medium text-background"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Section>
  );
}
