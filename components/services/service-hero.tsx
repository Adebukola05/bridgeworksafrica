import type { LucideIcon } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui";
import { ServiceVisual } from "./service-visual";

export interface ServiceHeroProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}

export function ServiceHero({ icon, eyebrow, title, description }: ServiceHeroProps) {
  return (
    <Section tone="default" border="bottom">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-h1 text-background">{title}</h1>
          <p className="mt-6 text-body leading-relaxed text-background/75">{description}</p>
        </div>
        <ServiceVisual icon={icon} className="max-w-sm justify-self-center md:justify-self-end" />
      </div>
    </Section>
  );
}
