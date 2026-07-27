import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  onDark?: boolean;
  className?: string;
}

/**
 * Renders whatever value/label/description it's given, it has no opinion on
 * whether the figure is real or placeholder. Pages using this for research
 * statistics must supply verified figures or the established placeholder
 * convention (e.g. "[XX]%"), never fabricated numbers.
 */
export function StatCard({ value, label, description, onDark = false, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "font-display text-display font-extrabold",
          onDark ? "text-gold" : "text-navy"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "mt-2 text-body font-medium",
          onDark ? "text-background" : "text-navy"
        )}
      >
        {label}
      </span>
      {description && (
        <span
          className={cn(
            "mt-1 text-small",
            onDark ? "text-background/70" : "text-ink/70"
          )}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export function StatCardGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}
