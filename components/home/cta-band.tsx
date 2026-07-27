import Link from "next/link";
import { Section, SectionHeader, Button } from "@/components/ui";

export function CtaBand() {
  return (
    <Section tone="navy" padding="band">
      <SectionHeader
        title="Partner with BridgeWorks Africa."
        description="Tell us what you are trying to understand or achieve in the informal economy, and we will show you what the evidence supports."
        align="between"
        action={
          <Button variant="inverse" size="lg" asChild>
            <Link href="/contact">Start a conversation</Link>
          </Button>
        }
      />
    </Section>
  );
}
