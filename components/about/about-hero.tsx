"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, Users, Compass, Handshake, type LucideIcon } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui";

interface Slide {
  icon: LucideIcon;
  label: string;
}

const slides: Slide[] = [
  { icon: Search, label: "Research & Intelligence" },
  { icon: Users, label: "Strategic Connections" },
  { icon: Compass, label: "Advisory Services" },
  { icon: Handshake, label: "Partnership Support" },
];

const INTERVAL_MS = 3500;

export interface AboutHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * No team or field photography exists for the site yet, so rather than
 * fabricate stock imagery, this cycles through four on-brand graphic panels
 * (one per discipline) with a genuine 3D flip transition. Swap each panel
 * for a real <Image> in the `slides` array above once photography exists,
 * same slot, same aspect ratio.
 */
export function AboutHero({ eyebrow, title, description }: AboutHeroProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [shouldReduceMotion, paused]);

  const Active = slides[index];

  return (
    <Section tone="default" border="bottom">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-h1 text-background">{title}</h1>
          <p className="mt-6 text-body leading-relaxed text-background/75">{description}</p>
        </div>

        <div
          className="mx-auto w-full max-w-sm [perspective:1600px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/5] w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy-dark"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
                  <defs>
                    <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                </svg>
                <div className="absolute h-40 w-40 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
                <Active.icon className="relative h-16 w-16 text-gold" strokeWidth={1.25} aria-hidden="true" />
                <p className="relative font-body text-small font-medium text-background/85">
                  {Active.label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Discipline slides">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={slide.label}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-background/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
