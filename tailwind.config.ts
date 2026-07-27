import type { Config } from "tailwindcss";

/**
 * All colours resolve through CSS variables defined in styles/tokens.css,
 * using the rgb(var(--x) / <alpha-value>) pattern so utilities like
 * `bg-navy/10` or `border-navy/20` work correctly.
 *
 * Do not hardcode hex values here, update styles/tokens.css instead and
 * this file picks it up automatically at runtime.
 */
function withOpacity(variable: string) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: withOpacity("--color-navy"),
          dark: withOpacity("--color-navy-dark"),
          light: withOpacity("--color-navy-light"),
        },
        gold: {
          DEFAULT: withOpacity("--color-gold"),
          dark: withOpacity("--color-gold-dark"),
          light: withOpacity("--color-gold-light"),
        },
        forest: {
          DEFAULT: withOpacity("--color-forest"),
          dark: withOpacity("--color-forest-dark"),
        },
        slate: {
          DEFAULT: withOpacity("--color-slate"),
          light: withOpacity("--color-slate-light"),
        },
        background: withOpacity("--color-background"),
        surface: withOpacity("--color-surface"),
        muted: withOpacity("--color-muted"),
        canvas: {
          DEFAULT: withOpacity("--color-canvas"),
          alt: withOpacity("--color-canvas-alt"),
          forest: withOpacity("--color-canvas-forest"),
        },
        ink: withOpacity("--color-text"),
        border: withOpacity("--color-border"),
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
        // retained for backwards compatibility with earlier component code
        warmwhite: withOpacity("--color-background"),
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: [
          "var(--text-display-size)",
          { lineHeight: "var(--text-display-lh)", letterSpacing: "var(--text-display-ls)", fontWeight: "var(--text-display-weight)" },
        ],
        h1: [
          "var(--text-h1-size)",
          { lineHeight: "var(--text-h1-lh)", letterSpacing: "var(--text-h1-ls)", fontWeight: "var(--text-h1-weight)" },
        ],
        h2: [
          "var(--text-h2-size)",
          { lineHeight: "var(--text-h2-lh)", letterSpacing: "var(--text-h2-ls)", fontWeight: "var(--text-h2-weight)" },
        ],
        h3: [
          "var(--text-h3-size)",
          { lineHeight: "var(--text-h3-lh)", letterSpacing: "var(--text-h3-ls)", fontWeight: "var(--text-h3-weight)" },
        ],
        h4: [
          "var(--text-h4-size)",
          { lineHeight: "var(--text-h4-lh)", letterSpacing: "var(--text-h4-ls)", fontWeight: "var(--text-h4-weight)" },
        ],
        body: [
          "var(--text-body-size)",
          { lineHeight: "var(--text-body-lh)", letterSpacing: "var(--text-body-ls)", fontWeight: "var(--text-body-weight)" },
        ],
        small: [
          "var(--text-small-size)",
          { lineHeight: "var(--text-small-lh)", letterSpacing: "var(--text-small-ls)", fontWeight: "var(--text-small-weight)" },
        ],
        caption: [
          "var(--text-caption-size)",
          { lineHeight: "var(--text-caption-lh)", letterSpacing: "var(--text-caption-ls)", fontWeight: "var(--text-caption-weight)" },
        ],
        button: [
          "var(--text-button-size)",
          { lineHeight: "var(--text-button-lh)", letterSpacing: "var(--text-button-ls)", fontWeight: "var(--text-button-weight)" },
        ],
        label: [
          "var(--text-label-size)",
          { lineHeight: "var(--text-label-lh)", letterSpacing: "var(--text-label-ls)", fontWeight: "var(--text-label-weight)" },
        ],
      },
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
        "8": "var(--space-8)",
        "9": "var(--space-9)",
        "10": "var(--space-10)",
        "11": "var(--space-11)",
        "12": "var(--space-12)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        focus: "var(--shadow-focus)",
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      height: {
        header: "var(--header-height)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        out: "var(--ease-out)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "500ms",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
