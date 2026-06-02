# Project Rules

## Architecture

- Feature-first architecture
- app/ only for routing
- Business logic never inside page.tsx

## State

- TanStack Query = Server State
- Zustand = Client State

## API

- No axios inside components
- All requests through services

## Forms

- React Hook Form + Zod mandatory

## Components

- Extract shared component after 2 uses
- Max component size: 200 lines

## Types

- No any
- Strict TypeScript only

## Accessibility & Mobile Design (Government Portal Standards)

- **WCAG 2.1 AA Compliance Mandatory**:
  - Focus indicators must be highly visible (`focus-visible:ring-2 focus-visible:ring-[#fc661e]`).
  - Screen reader attributes (`aria-expanded`, `aria-label`, `aria-controls`) must be set for all interactive/toggling states.
  - Interactive menus and mobile drawers must manage keyboard focus trap correctly.
  - Color contrast ratio must meet 4.5:1 minimum standard for all normal body text.
- **Mobile Fluidity & Collision Prevention**:
  - Avoid fixed layouts that cause page-wide horizontal scrollbars.
  - Set `flex-shrink-0` on critical navigation, dates, or language items to prevent squeeze collisions.
  - Use responsive text sizes (e.g. `text-[9.5px]` scaling to `text-[13px]`) and layout swaps (like `shortTime` on mobile, `currentTime` on desktop) to fit key information seamlessly on a single row without wrapping or cutoffs.
- **Bilingual Interface Support**:
  - All public layouts must explicitly accommodate bilingual elements (e.g. English/Hindi) cleanly.
- **High-Trust Branding**:
  - Official State/National emblems and titles must be kept highly visible, structurally respected, and recognizable.

## Internationalization (i18n)

- **Zero Hardcoded User-Facing Text**:
  - All public-facing text labels, subtitles, button names, alerts, input placeholders, and help messages must be decoupled into localization files.
  - English strings must be declared in [en/common.json](file:///e:/Playground/pledge-portal/src/core/i18n/en/common.json).
  - Corresponding Hindi strings must be declared in [hi/common.json](file:///e:/Playground/pledge-portal/src/core/i18n/hi/common.json).
- **Use the useTranslation Hook**:
  - Components must retrieve strings dynamically using `const { t } = useTranslation()`.
  - Use structured, nested key strings (e.g. `t('navbar.title')`) for neat category organization.
- **Dynamic Date & Time Formatting**:
  - All dynamic dates, times, or calendars must format output dynamically using the selected language's locale (e.g. `en-US` or `hi-IN`).
- **Strict Hydration Safety**:
  - Any client-side components using persistent i18n state must ensure proper hydration guards (checking if mounted) to prevent Next.js SSR hydration warnings.