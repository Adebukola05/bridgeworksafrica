import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-caption font-medium uppercase tracking-wide",
  {
    variants: {
      tone: {
        gold: "bg-gold/15 text-gold-dark",
        forest: "bg-forest/10 text-forest",
        slate: "bg-slate/10 text-slate",
      },
    },
    defaultVariants: {
      tone: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}
