import { Search, ShieldCheck, MapPin, Layers } from "lucide-react";
import {
  Section,
  SectionHeader,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

const principles = [
  {
    icon: Search,
    title: "Evidence over assumption",
    description:
      "Every recommendation is grounded in fieldwork and mapping, not inference or industry convention.",
  },
  {
    icon: ShieldCheck,
    title: "Discretion and trust",
    description:
      "Relationships with businesses and institutions are built to last, not to close a single engagement.",
  },
  {
    icon: MapPin,
    title: "Rooted in place",
    description:
      "Work begins in one market at a time, understood on its own terms before it is generalised.",
  },
  {
    icon: Layers,
    title: "Built for systems",
    description:
      "Research, connections and advisory work are designed to compound; each engagement strengthens the next.",
  },
];

export function PrinciplesGrid() {
  return (
    <Section tone="default">
      <SectionHeader eyebrow="How we work" title="Four principles that govern every engagement." />
      <StaggerGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {principles.map(({ icon: Icon, title, description }) => (
          <StaggerItem key={title}>
            <Card>
              <CardHeader>
                <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
                <CardTitle className="mt-3">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}
