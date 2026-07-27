import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui";
import { ServiceVisual } from "./service-visual";
import { cn } from "@/lib/utils";

export interface AlternatingSectionProps {
  icon: LucideIcon;
  imageSide: "left" | "right";
  children: ReactNode;
}

export function AlternatingSection({ icon, imageSide, children }: AlternatingSectionProps) {
  return (
    <Section tone="surface" border="bottom">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <ServiceVisual
          icon={icon}
          className={cn("max-w-sm justify-self-center", imageSide === "right" && "md:order-2")}
        />
        <div className="max-w-xl">{children}</div>
      </div>
    </Section>
  );
}
