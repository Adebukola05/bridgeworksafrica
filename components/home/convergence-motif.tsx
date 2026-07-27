"use client";

import { motion, useReducedMotion } from "framer-motion";
import { colors } from "@/lib/design-tokens";

/**
 * The back form (navy) and front form (gold) rise and meet at a single node ,
 * the same construction logic as the BridgeWorks Africa wordmark, rendered
 * here as a slow, deliberate line drawing rather than a static icon.
 * No arch, no clasped hands, no map of Africa, abstract by design.
 */
export function ConvergenceMotif() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 1.8;

  return (
    <svg
      viewBox="0 0 480 480"
      className="h-full w-full"
      role="img"
      aria-label="Two abstract forms rising to meet at a single point of connection"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={colors.gold} stopOpacity="0.35" />
          <stop offset="100%" stopColor={colors.gold} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* field grid, quiet, evidence-of-mapping texture, light on the dark canvas */}
      <g stroke={colors.background} strokeOpacity="0.08" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1="40" y1={80 + i * 64} x2="440" y2={80 + i * 64} />
        ))}
      </g>

      {/* back form, light on dark, grounded, begins the movement */}
      <motion.path
        d="M 70 380 C 150 380, 190 300, 230 260"
        fill="none"
        stroke={colors.background}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration, ease: "easeInOut" }}
      />

      {/* front form, gold, rises slightly ahead */}
      <motion.path
        d="M 410 120 C 340 130, 280 190, 234 256"
        fill="none"
        stroke={colors.gold}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration, ease: "easeInOut", delay: shouldReduceMotion ? 0 : 0.25 }}
      />

      {/* the node, the single deliberate point of contact */}
      <circle cx="232" cy="258" r="26" fill="url(#nodeGlow)" />
      <motion.circle
        cx="232"
        cy="258"
        r="7"
        fill={colors.background}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : duration }}
      />
    </svg>
  );
}
