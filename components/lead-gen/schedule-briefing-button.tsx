"use client";

import { Button, type ButtonProps } from "@/components/ui";
import { useBriefingModal } from "./briefing-modal-context";

export function ScheduleBriefingButton({
  children = "Schedule a Strategy Briefing",
  onClick,
  ...props
}: Omit<ButtonProps, "asChild"> & { onClick?: () => void }) {
  const { open } = useBriefingModal();
  return (
    <Button
      onClick={() => {
        onClick?.();
        open();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
