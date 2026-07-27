import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const eyebrowVariants = cva("text-label uppercase font-body", {
  variants: {
    tone: {
      gold: "text-gold-dark",
      navy: "text-navy",
      slate: "text-slate",
      forest: "text-forest",
      onDark: "text-gold",
    },
  },
  defaultVariants: {
    tone: "gold",
  },
});

export interface EyebrowProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof eyebrowVariants> {}

export function Eyebrow({ className, tone, children, ...props }: EyebrowProps) {
  return (
    <p className={cn(eyebrowVariants({ tone, className }))} {...props}>
      {children}
    </p>
  );
}
