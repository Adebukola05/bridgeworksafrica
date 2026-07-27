import { Section, SectionHeader, ServiceCard, StaggerGrid, StaggerItem } from "@/components/ui";
import { whatWeDoItems } from "@/components/layout/nav-data";

export function ServicesGrid() {
  return (
    <Section tone="default">
      <SectionHeader eyebrow="What we do" title="Four disciplines, one bridge." />
      <StaggerGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {whatWeDoItems.map((item) => (
          <StaggerItem key={item.href}>
            <ServiceCard {...item} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}
