/**
 * BridgeWorks Africa, Design Tokens (JS/TS mirror)
 *
 * Mirrors styles/tokens.css for contexts where a Tailwind class can't reach:
 * chart libraries (Recharts/D3), inline SVG fills, Framer Motion animate
 * targets, canvas. If you change a value, change styles/tokens.css first,
 * then update this file to match.
 */

export const colors = {
  navy: "#12355B",
  navyDark: "#0C2540",
  navyLight: "#1E4576",

  gold: "#C89B3C",
  goldDark: "#A9812E",
  goldLight: "#DBB761",

  forest: "#2E7D32",
  forestDark: "#245F27",

  slate: "#5F6B7A",
  slateLight: "#8892A0",

  background: "#F7F6F3",
  surface: "#FFFFFF",
  muted: "#EEECE7",

  text: "#1E2328",
  textMuted: "#5F6B7A",

  border: "#12355B",

  success: "#2E7D32",
  warning: "#B8802E",
  error: "#B3261E",
} as const;

export const fonts = {
  display: "var(--font-manrope), ui-sans-serif, system-ui, sans-serif",
  body: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
} as const;

export const typeScale = {
  display: { size: "3.5rem", lineHeight: 1.05, letterSpacing: "-0.02em", weight: 800 },
  h1: { size: "2.75rem", lineHeight: 1.1, letterSpacing: "-0.015em", weight: 700 },
  h2: { size: "2.125rem", lineHeight: 1.15, letterSpacing: "-0.01em", weight: 700 },
  h3: { size: "1.5rem", lineHeight: 1.25, letterSpacing: "-0.005em", weight: 600 },
  h4: { size: "1.25rem", lineHeight: 1.3, letterSpacing: "0em", weight: 600 },
  body: { size: "1.0625rem", lineHeight: 1.6, letterSpacing: "0em", weight: 400 },
  small: { size: "0.9375rem", lineHeight: 1.55, letterSpacing: "0em", weight: 400 },
  caption: { size: "0.8125rem", lineHeight: 1.4, letterSpacing: "0.01em", weight: 500 },
  button: { size: "0.9375rem", lineHeight: 1, letterSpacing: "0em", weight: 600 },
  label: { size: "0.8125rem", lineHeight: 1.2, letterSpacing: "0.04em", weight: 600 },
} as const;

export const spacing = {
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 24,
  "6": 32,
  "7": 40,
  "8": 48,
  "9": 64,
  "10": 80,
  "11": 96,
  "12": 128,
} as const;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const shadows = {
  card: "0 1px 2px rgba(18, 53, 91, 0.06), 0 4px 16px rgba(18, 53, 91, 0.06)",
  elevated: "0 4px 8px rgba(18, 53, 91, 0.08), 0 12px 32px rgba(18, 53, 91, 0.1)",
  focus: "0 0 0 3px rgba(200, 155, 60, 0.35)",
} as const;

export const motion = {
  easeStandard: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  duration: {
    fast: 0.15,
    base: 0.25,
    slow: 0.5,
  },
} as const;

export const layout = {
  contentMaxWidth: 1200,
  headerHeight: 72,
} as const;

/** Chart-safe categorical palette, ordered for use in Recharts/D3 series */
export const chartPalette = [
  colors.navy,
  colors.gold,
  colors.forest,
  colors.slate,
  colors.navyLight,
  colors.goldLight,
] as const;

export const tokens = {
  colors,
  fonts,
  typeScale,
  spacing,
  radius,
  shadows,
  motion,
  layout,
  chartPalette,
} as const;

export default tokens;
