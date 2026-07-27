import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-sm border border-navy/20 bg-surface px-4 py-2.5 text-body text-ink placeholder:text-slate/70 transition-colors duration-base focus:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
