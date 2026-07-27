import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceVisualProps {
  icon: LucideIcon;
  className?: string;
}

/**
 * No photography exists for these pages yet, so rather than fabricate stock
 * imagery, this renders an abstract, on-brand graphic (the discipline's own
 * icon, large, on a navy/gold gradient with a quiet grid texture). Swap for
 * a real <Image> once photography exists, same aspect ratio, same slot.
 */
export function ServiceVisual({ icon: Icon, className }: ServiceVisualProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy-dark",
        className
      )}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute h-40 w-40 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <Icon className="relative h-20 w-20 text-gold" strokeWidth={1.25} aria-hidden="true" />
    </div>
  );
}
