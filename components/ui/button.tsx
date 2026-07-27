import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-button font-body transition-all duration-base hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100",
  {
    variants: {
      variant: {
        primary: "bg-gold text-navy-dark hover:bg-gold-dark",
        secondary:
          "border border-background/30 text-background bg-transparent hover:bg-background hover:text-navy",
        ghost: "text-background hover:text-gold",
        inverse: "bg-background text-navy hover:bg-gold hover:text-navy-dark",
      },
      size: {
        default: "h-8 px-4 text-[12.5px]",
        sm: "h-7 px-3 text-xs",
        lg: "h-9 px-5 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
