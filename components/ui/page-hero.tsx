import type { ReactNode } from "react";
import { Section } from "./section";
import { Eyebrow } from "./eyebrow";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({ eyebrow, title, description, align = "left", className }: PageHeroProps) {
  return (
    <Section tone="default" border="bottom" className={className}>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center"
        )}
      >
        {eyebrow && <Eyebrow tone="onDark">{eyebrow}</Eyebrow>}
        <h1 className="mt-5 font-display text-h1 text-background">{title}</h1>
        {description && (
          <p className="mt-6 text-body leading-relaxed text-background/75">{description}</p>
        )}
      </div>
    </Section>
  );
}
