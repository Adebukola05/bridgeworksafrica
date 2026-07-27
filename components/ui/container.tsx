import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Constrains content to --content-max-width (1200px) with consistent
 * horizontal padding. Nearly every section uses this instead of repeating
 * `mx-auto max-w-content px-6` by hand.
 */
export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6", className)} {...props}>
      {children}
    </div>
  );
}
