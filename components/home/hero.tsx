"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ScheduleBriefingButton } from "@/components/lead-gen/schedule-briefing-button";
import { ConvergenceMotif } from "./convergence-motif";

export function Hero() {
  return (
    <section className="border-b border-background/10 bg-canvas">
      <Container className="grid grid-cols-1 items-center gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow tone="onDark">
            Africa&apos;s informal economy research &amp; intelligence partner
          </Eyebrow>

          <h1 className="mt-5 max-w-xl font-display text-display font-extrabold text-background">
            Evidence for a market institutions have not yet learned to see.
          </h1>

          <p className="mt-6 max-w-lg text-body leading-relaxed text-background/75">
            BridgeWorks Africa researches, maps and maintains intelligence on
            informal businesses across Nigeria, then turns that evidence into
            the connections governments, financial institutions, corporations
            and development partners need to act on it.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ScheduleBriefingButton size="lg" />
            <Button variant="secondary" size="lg" asChild>
              <Link href="/insights/research-reports">View our research</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="aspect-square w-full max-w-md justify-self-center md:justify-self-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ConvergenceMotif />
        </motion.div>
      </Container>
    </section>
  );
}
