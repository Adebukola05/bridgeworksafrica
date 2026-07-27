import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { StaggerGrid, StaggerItem } from "./stagger-grid";

export interface InsightCardProps {
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function InsightCard({
  icon: Icon,
  kicker,
  title,
  description,
  href,
  className,
}: InsightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col bg-surface p-8 transition-colors duration-base hover:bg-background",
        className
      )}
    >
      <Icon className="h-5 w-5 text-gold-dark" strokeWidth={1.75} />
      <p className="mt-5 text-caption uppercase text-slate">{kicker}</p>
      <h3 className="mt-2 font-display text-h4 font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-small leading-relaxed text-ink/70">{description}</p>
    </Link>
  );
}

/**
 * A grid of InsightCards, sharing a 1px navy hairline between cells via a
 * background-colour "grout" trick, avoids each card needing its own border
 * (which would double up between adjacent cells). Reveals with a stagger.
 */
export function InsightCardGrid({
  children,
  columns = 3,
  className,
}: {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colsClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[columns];
  return (
    <StaggerGrid
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-navy/10 bg-navy/10",
        colsClass,
        className
      )}
    >
      {children}
    </StaggerGrid>
  );
}

export { StaggerItem as InsightCardItem };
