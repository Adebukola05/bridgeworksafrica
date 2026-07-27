"use client";

import { useState, type FormEvent } from "react";
import { Label, Input, Textarea, Select, Button } from "@/components/ui";
import { INSTITUTION_TYPES } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      // NOTE: /api/contact does not exist yet in this bundle. Before launch,
      // add an app/api/contact/route.ts that sends this payload to email,
      // a CRM, or wherever enquiries should land.
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-navy/10 bg-surface p-8 shadow-card">
        <div className="rounded-md border border-forest/20 bg-forest/5 p-6">
          <p className="font-display text-h4 font-semibold text-navy">Message sent.</p>
          <p className="mt-2 text-body text-ink/75">
            Thank you for reaching out, we&apos;ll be in touch directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-lg border border-navy/10 bg-surface p-8 shadow-card"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="organisation">Organisation</Label>
          <Input id="organisation" name="organisation" type="text" required autoComplete="organization" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="institutionType">Institution type</Label>
          <Select id="institutionType" name="institutionType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {INSTITUTION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">What are you trying to understand or achieve?</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      {status === "error" && (
        <p className="text-small text-error">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
