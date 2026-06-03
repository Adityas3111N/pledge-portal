import type { Config } from "tailwindcss";

/**
 * tailwind.config.ts
 *
 * Color tokens are sourced from CSS custom properties defined in:
 *   src/styles/theme.css   → Primitive tokens (raw palette)
 *   src/app/globals.css    → Semantic tokens (@theme block)
 *
 * Do NOT hardcode hex values here. Always reference CSS variables.
 * If you need a new color, add a primitive to theme.css first,
 * then create a semantic token in globals.css, then extend here.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand ──────────────────────────────────────── */
        brand: {
          primary:  "var(--color-brand-primary)",   /* #FF6E28 — CTAs, active states */
          accent:   "var(--color-brand-accent)",    /* #E85818 — heading accent words */
          hover:    "var(--color-brand-hover)",     /* #C44510 — hover on brand elements */
          light:    "var(--color-brand-light)",     /* #FF9A6A — badges, tags */
          subtle:   "var(--color-brand-subtle)",    /* #FFB899 — very light tint */
        },

        /* ── Text ────────────────────────────────────────── */
        "text-primary":       "var(--color-text-primary)",      /* #202124 */
        "text-secondary":     "var(--color-text-secondary)",    /* #5F6368 */
        "text-muted":         "var(--color-text-muted)",        /* #424242 */
        "text-disabled":      "var(--color-text-disabled)",     /* #A0AEC0 */
        "text-inverse":       "var(--color-text-inverse)",      /* #FFFFFF */
        "text-brand":         "var(--color-text-brand)",        /* #FF6E28 */
        "text-brand-accent":  "var(--color-text-brand-accent)", /* #E85818 */

        /* ── Backgrounds ─────────────────────────────────── */
        "bg-page":            "var(--color-bg-page)",           /* #F8F8F8 */
        "bg-surface":         "var(--color-bg-surface)",        /* #FFFFFF */
        "bg-subtle":          "var(--color-bg-subtle)",         /* #F5F0E8 */

        /* ── Borders ──────────────────────────────────────── */
        "border-light":       "var(--color-border-light)",      /* #D6D6D6 */
        "border-medium":      "var(--color-border-medium)",     /* #E2E8F0 */
        "border-brand":       "var(--color-border-brand)",      /* #FF6E28 */

        /* ── Government ───────────────────────────────────── */
        gov: {
          navy:       "var(--color-gov-navy)",        /* #1A2B5F */
          "navy-light": "var(--color-gov-navy-light)",/* #2A3F7F */
          green:      "var(--color-gov-green)",       /* #2D7A3A */
        },

        /* ── Status ───────────────────────────────────────── */
        status: {
          success: "var(--color-status-success)",     /* #16A34A */
          error:   "var(--color-status-error)",       /* #DC2626 */
          warning: "var(--color-status-warning)",     /* #D97706 */
          info:    "var(--color-status-info)",        /* #3B82F6 */
          draft:   "var(--color-status-draft)",       /* #5F6368 */
        },
      },
      fontFamily: {
        sans:  ["'Google Sans Flex'", "'Google Sans'", "sans-serif"],
        hindi: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
