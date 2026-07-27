import { Section, ServiceCard, StaggerGrid, StaggerItem } from "@/components/ui";
import { whatWeDoItems } from "@/components/layout/nav-data";

export function ServicesOverviewGrid() {
  return (
    <Section tone="default">
      <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {whatWeDoItems.map((item) => (
          <StaggerItem key={item.href}>
            <ServiceCard
              icon={item.icon}
              title={item.title}
              href={item.href}
              description={item.longDescription ?? item.description}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}
