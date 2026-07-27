import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with BridgeWorks Africa about research, strategic connections, advisory support or partnership work.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us what you are trying to understand or achieve in the informal economy, and we will show you what the evidence supports."
      />

      <Section tone="default">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </>
  );
}
