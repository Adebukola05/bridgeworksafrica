# Design Tokens, BridgeWorks Africa

Source of truth: `styles/tokens.css` (CSS custom properties). Everything else
derives from it:

| File | Purpose |
|---|---|
| `styles/tokens.css` | Canonical values. Edit here first. |
| `tailwind.config.ts` | Maps Tailwind utilities (`bg-navy`, `text-h2`, `p-6`...) to the CSS variables. |
| `lib/design-tokens.ts` | Plain JS/TS mirror for contexts Tailwind can't reach, Recharts/D3 series colours, inline SVG, Framer Motion `animate` targets. |

If a value changes, update `styles/tokens.css` first, then keep
`lib/design-tokens.ts` in sync (Tailwind picks up CSS var changes
automatically; the JS mirror does not).

## Colour

| Token | Hex | Role |
|---|---|---|
| `navy` | `#12355B` | Primary, dominant colour, governance/authority surfaces |
| `navy-dark` | `#0C2540` | Primary hover/pressed |
| `gold` | `#C89B3C` | Secondary/accent, emphasis, milestones, CTAs |
| `gold-dark` | `#A9812E` | Secondary hover/pressed, and the minimum-contrast option for gold text |
| `forest` | `#2E7D32` | Tertiary accent, growth, sustainability sections |
| `slate` | `#5F6B7A` | Muted text, neutral UI |
| `background` | `#F7F6F3` | Page background (Warm White) |
| `surface` | `#FFFFFF` | Cards and elevated panels over `background` |
| `ink` | `#1E2328` | Body text (working neutral, not part of the brand palette) |
| `success` | `#2E7D32` | Same value as `forest`, reuse, don't introduce a new green |
| `warning` | `#B8802E` | Use bold/large, or on a dark surface, see contrast note |
| `error` | `#B3261E` | Muted brick red, deliberately restrained rather than alarmist |

### Accessibility notes (WCAG AA)
- `navy` and `ink` on `background`/`surface` clear AA comfortably for any text size.
- `gold` on white/`background` does **not** clear AA for normal text, use it
  for large text (≥24px, or ≥18.66px bold), icons, borders, or as a
  background with dark text on top. For gold *text* at body size, use
  `gold-dark`, and confirm contrast before shipping if the surface changes.
- `warning` (`#B8802E`) is borderline at body size on light surfaces, prefer
  bold weight, larger size, or pairing with an icon rather than relying on
  colour alone.
- Every interactive element must show the `focus` ring (`shadow-focus` /
  `:focus-visible` outline), already wired in `app/globals.css`.

## Typography

Two families: **Manrope** (display/headings, geometric, used with restraint)
and **Inter** (body, UI, data, captions). Scale (`fontSize` keys in Tailwind:
`text-display`, `text-h1` … `text-label`):

| Token | Size | Line-height | Weight | Use |
|---|---|---|---|---|
| `display` | 56px | 1.05 | 800 | Hero headlines only |
| `h1` | 44px | 1.1 | 700 | Page titles |
| `h2` | 34px | 1.15 | 700 | Section headings |
| `h3` | 24px | 1.25 | 600 | Card/subsection titles |
| `h4` | 20px | 1.3 | 600 | Minor headings |
| `body` | 17px | 1.6 | 400 | Extended reading |
| `small` | 15px | 1.55 | 400 | Secondary copy, UI labels |
| `caption` | 13px | 1.4 | 500 | Sources, dates, figure notes |
| `button` | 15px | 1 | 600 | Button labels |
| `label` | 13px | 1.2 | 600 | Eyebrows, uppercase overlines |

## Spacing (8pt system)

`1`–`12` map to 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px,
96px, 128px. Use Tailwind's normal spacing utilities (`p-6`, `gap-4`,
`mt-9`...), the scale is already wired into `tailwind.config.ts`.

## Radius & Shadow

- Radius: `sm` 4px (inputs, chips) · `md` 8px (buttons, small cards) ·
  `lg` 12px (cards, panels) · `xl` 16px (modals, feature panels) ·
  `full` (pills, avatars).
- Shadow: `card` (resting card elevation) · `elevated` (hover/modal) ·
  `focus` (focus ring, paired with the CSS `:focus-visible` outline).

## Motion

`ease-standard` and `ease-out` cubic-béziers, with `fast` (150ms), `base`
(250ms), `slow` (500ms) durations. Respect `prefers-reduced-motion`, already
handled globally in `app/globals.css`; components using Framer Motion should
also check `useReducedMotion()` for anything non-trivial (see
`components/home/convergence-motif.tsx` for the pattern).
