"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Download } from "lucide-react";
import { Modal, Label, Input, Button } from "@/components/ui";
import { toolkitSchema, type ToolkitFormValues } from "@/lib/validation/toolkit-schema";

const STORAGE_KEY = "bwa-toolkit-popup-last-shown";
const COOLDOWN_DAYS = 30;
const SCROLL_THRESHOLD = 0.6;
const FIRST_TRIGGER_MS = 60_000; // 1 minute
const SECOND_TRIGGER_MS = 300_000; // 5 minutes, a second nudge if the first was dismissed

function isWithinCooldown() {
  if (typeof window === "undefined") return true;
  const last = window.localStorage.getItem(STORAGE_KEY);
  if (!last) return false;
  const elapsedDays = (Date.now() - Number(last)) / (1000 * 60 * 60 * 24);
  return elapsedDays < COOLDOWN_DAYS;
}

function markShown() {
  window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
}

export function ToolkitPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasShownFirstRef = useRef(false);
  const hasShownSecondRef = useRef(false);
  const convertedRef = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ToolkitFormValues>({ resolver: zodResolver(toolkitSchema) });

  useEffect(() => {
    if (isWithinCooldown()) return;

    // First opportunity: whichever of these three fires first, at 1 minute
    // at the latest.
    function triggerFirst() {
      if (hasShownFirstRef.current || convertedRef.current) return;
      hasShownFirstRef.current = true;
      setOpen(true);
    }

    const firstTimer = setTimeout(triggerFirst, FIRST_TRIGGER_MS);

    function handleScroll() {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      if (scrolled >= SCROLL_THRESHOLD) triggerFirst();
    }

    function handleExitIntent(e: MouseEvent) {
      if (e.clientY <= 0) triggerFirst();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleExitIntent);

    // Second, independent nudge at 5 minutes if the visitor dismissed the
    // first popup without converting. This is the last automatic prompt for
    // the session, so it also starts the 30-day cooldown once it fires.
    const secondTimer = setTimeout(() => {
      if (convertedRef.current || hasShownSecondRef.current) return;
      hasShownSecondRef.current = true;
      setOpen(true);
      markShown();
    }, SECOND_TRIGGER_MS);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, []);

  function close() {
    setOpen(false);
  }

  async function onSubmit(values: ToolkitFormValues) {
    setStatus("submitting");
    try {
      const response = await fetch("/api/toolkit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      convertedRef.current = true;
      markShown();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Modal open={open} onClose={close} labelledBy="toolkit-modal-title" maxWidth="max-w-sm">
      {status === "success" ? (
        <div className="flex flex-col items-center py-6 text-center">
          <CheckCircle2 className="h-10 w-10 text-forest" strokeWidth={1.5} />
          <p id="toolkit-modal-title" className="mt-4 font-display text-h4 font-semibold text-navy">
            On its way.
          </p>
          <p className="mt-2 max-w-xs text-small text-ink/70">
            Check your inbox: the Community Research Planning Toolkit will
            arrive shortly.
          </p>
        </div>
      ) : (
        <>
          <Download className="h-8 w-8 text-gold-dark" strokeWidth={1.75} />
          <p id="toolkit-modal-title" className="mt-4 font-display text-h4 font-semibold text-navy">
            Free: Community Research Planning Toolkit
          </p>
          <p className="mt-2 text-small text-ink/70">
            A practical framework for planning informal-economy research in
            your own community, sent straight to your inbox.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="toolkit-name">Full name</Label>
              <Input id="toolkit-name" autoComplete="name" {...register("name")} />
              {errors.name && <p className="mt-1 text-caption text-error">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="toolkit-email">Email</Label>
              <Input id="toolkit-email" type="email" autoComplete="email" {...register("email")} />
              {errors.email && <p className="mt-1 text-caption text-error">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="toolkit-organisation">Organisation (optional)</Label>
              <Input id="toolkit-organisation" autoComplete="organization" {...register("organisation")} />
            </div>

            {status === "error" && (
              <p className="text-small text-error">Something went wrong. Please try again.</p>
            )}

            <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-1">
              {status === "submitting" ? "Sending…" : "Send me the toolkit"}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
}
