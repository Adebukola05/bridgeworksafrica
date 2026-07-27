"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

const sectionVariants = cva("text-background", {
  variants: {
    tone: {
      default: "bg-canvas",
      surface: "bg-canvas-alt",
      navy: "bg-navy",
      forestTint: "bg-canvas-forest",
    },
    padding: {
      default: "py-20 md:py-28",
      compact: "py-10",
      band: "py-16 md:py-20",
    },
    border: {
      none: "",
      top: "border-t border-background/10",
      bottom: "border-b border-background/10",
      both: "border-y border-background/10",
    },
  },
  defaultVariants: {
    tone: "default",
    padding: "default",
    border: "none",
  },
});

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

/** The outer wrapper: dark canvas tone, vertical rhythm, optional hairline border, centred content column, scroll-reveal animation. */
export function Section({ id, className, tone, padding, border, children }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn(sectionVariants({ tone, padding, border }), className)}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
    >
      <Container>{children}</Container>
    </motion.section>
  );
}

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowTone?: "gold" | "navy" | "slate" | "forest" | "onDark";
  title: React.ReactNode;
  description?: React.ReactNode;
  /** "start" stacks everything left; "between" pushes trailing action to the right on desktop; "center" centres the whole block. */
  align?: "start" | "between" | "center";
  action?: React.ReactNode;
  className?: string;
}

/** Eyebrow + heading + optional description, with an optional trailing action (e.g. "View all"). Text is always styled for the dark canvas. */
export function SectionHeader({
  eyebrow,
  eyebrowTone = "onDark",
  title,
  description,
  align = "start",
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "between" && "md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-xl", align === "center" && "mx-auto")}>
        {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
        <h2 className="mt-4 font-display text-h2 text-background">{title}</h2>
        {description && (
          <p className="mt-4 text-body leading-relaxed text-background/75">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
