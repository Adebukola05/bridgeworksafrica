import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-sm border border-navy/20 bg-surface px-4 py-2.5 pr-10 text-body text-ink transition-colors duration-base focus:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate"
          strokeWidth={2}
        />
      </div>
    );
  }
);
Select.displayName = "Select";
