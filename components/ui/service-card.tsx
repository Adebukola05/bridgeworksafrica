import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, href, className }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-lg border border-navy/10 bg-surface p-8 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-elevated",
        className
      )}
    >
      <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
      <h3 className="mt-5 font-display text-h4 font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-small leading-relaxed text-ink/75">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-small font-medium text-gold-dark">
        Learn more
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
