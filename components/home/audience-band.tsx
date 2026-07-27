"use client";

import { useReducedMotion } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui";
import {
  Landmark,
  HandCoins,
  Building2,
  PiggyBank,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const audiences = [
  { label: "Governments", icon: Landmark },
  { label: "Development Partners", icon: HandCoins },
  { label: "Corporations", icon: Building2 },
  { label: "Banks", icon: PiggyBank },
  { label: "NGOs", icon: HeartHandshake },
  { label: "Investors", icon: TrendingUp },
];

export function AudienceBand() {
  const shouldReduceMotion = useReducedMotion();

  // Reduced motion (or no-JS users, since this still renders server-side
  // via a plain wrapping div): show a static wrapped list instead of a loop.
  if (shouldReduceMotion) {
    return (
      <Section tone="default" padding="band" border="bottom">
        <Eyebrow tone="onDark">Built for the institutions shaping economic inclusion</Eyebrow>
        <ul className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
          {audiences.map(({ label }) => (
            <li key={label} className="font-display text-h4 font-medium text-background/75">
              {label}
            </li>
          ))}
        </ul>
      </Section>
    );
  }

  const looped = [...audiences, ...audiences];

  return (
    <Section tone="default" padding="band" border="bottom">
      <Eyebrow tone="onDark">Built for the institutions shaping economic inclusion</Eyebrow>
      <div
        className="group relative mt-6 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {looped.map(({ label, icon: Icon }, i) => (
            <div
              key={`${label}-${i}`}
              aria-hidden={i >= audiences.length}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              <span className="font-display text-h4 font-medium text-background/75">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
