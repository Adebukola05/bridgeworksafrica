import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "./button";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-dashed border-navy/20 bg-surface px-8 py-16 text-center">
      <Icon className="h-8 w-8 text-slate" strokeWidth={1.5} />
      <p className="mt-5 font-display text-h4 font-semibold text-navy">{title}</p>
      <p className="mt-2 max-w-md text-small leading-relaxed text-ink/70">{description}</p>
      {actionLabel && actionHref && (
        <Button variant="secondary" size="sm" className="mt-6" asChild>
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
