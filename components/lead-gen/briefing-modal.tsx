"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Modal, Label, Input, Textarea, Select, Button } from "@/components/ui";
import { briefingSchema, institutionTypes, type BriefingFormValues } from "@/lib/validation/briefing-schema";
import { useBriefingModal } from "./briefing-modal-context";

// Placeholder booking link: replace with the real Google Calendar
// appointment scheduling page once it exists (Calendar > Settings >
// Appointment schedules > booking page link).
const CALENDAR_BOOKING_URL = "https://calendar.google.com/calendar/appointments/PLACEHOLDER";

export function BriefingModal() {
  const { isOpen, close } = useBriefingModal();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BriefingFormValues>({ resolver: zodResolver(briefingSchema) });

  // Reset form state whenever the modal is closed, so it opens fresh next time.
  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      reset();
    }
  }, [isOpen, reset]);

  async function onSubmit(values: BriefingFormValues) {
    setStatus("submitting");
    try {
      const response = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");

      // Auto-redirect to booking after a short pause, so the confirmation
      // message is still readable to screen readers before navigation.
      const timer = setTimeout(() => {
        window.location.href = CALENDAR_BOOKING_URL;
      }, 2200);
      return () => clearTimeout(timer);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Modal open={isOpen} onClose={close} labelledBy="briefing-modal-title" maxWidth="max-w-lg">
      {status === "success" ? (
        <div className="flex flex-col items-center py-6 text-center">
          <CheckCircle2 className="h-10 w-10 text-forest" strokeWidth={1.5} />
          <p id="briefing-modal-title" className="mt-4 font-display text-h4 font-semibold text-navy">
            Request received.
          </p>
          <p className="mt-2 max-w-sm text-small text-ink/70">
            Taking you to our calendar to pick a date and time. If nothing
            happens, use the button below.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href={CALENDAR_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Choose a date &amp; time
              <ArrowUpRight className="ml-1.5 h-4 w-4" strokeWidth={2} />
            </a>
          </Button>
        </div>
      ) : (
        <>
          <p id="briefing-modal-title" className="font-display text-h4 font-semibold text-navy">
            Schedule a Strategy Briefing
          </p>
          <p className="mt-2 text-small text-ink/70">
            Tell us a little about your organisation. We will confirm your
            briefing and send a calendar invite directly.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="briefing-name">Full name</Label>
                <Input id="briefing-name" autoComplete="name" {...register("name")} />
                {errors.name && <p className="mt-1 text-caption text-error">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="briefing-organisation">Organisation</Label>
                <Input id="briefing-organisation" autoComplete="organization" {...register("organisation")} />
                {errors.organisation && (
                  <p className="mt-1 text-caption text-error">{errors.organisation.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="briefing-email">Email</Label>
                <Input id="briefing-email" type="email" autoComplete="email" {...register("email")} />
                {errors.email && <p className="mt-1 text-caption text-error">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="briefing-phone">Phone (optional)</Label>
                <Input id="briefing-phone" type="tel" autoComplete="tel" {...register("phone")} />
              </div>
            </div>

            <div>
              <Label htmlFor="briefing-institutionType">Institution type</Label>
              <Select id="briefing-institutionType" defaultValue="" {...register("institutionType")}>
                <option value="" disabled>
                  Select one
                </option>
                {institutionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
              {errors.institutionType && (
                <p className="mt-1 text-caption text-error">{errors.institutionType.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="briefing-goal">What would you like to discuss?</Label>
              <Textarea id="briefing-goal" rows={2} {...register("goal")} />
              {errors.goal && <p className="mt-1 text-caption text-error">{errors.goal.message}</p>}
            </div>

            {status === "error" && (
              <p className="text-small text-error">
                Something went wrong sending your request. Please try again.
              </p>
            )}

            <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-1">
              {status === "submitting" ? "Sending…" : "Request briefing"}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
}
