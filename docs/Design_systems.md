# DESIGN_SYSTEM.md

# PLEDGE Design System

Version: 1.0

---

# Design Principles

## Government First

The interface should feel:

* Trustworthy
* Official
* Accessible
* Transparent

Users must feel they are interacting with an official Government of Uttar Pradesh digital service.

---

## Simplicity Over Decoration

Avoid:

* Heavy gradients
* Excessive animations
* Fancy effects

Prioritize:

* Readability
* Information hierarchy
* Form completion speed

---

## Accessibility First

Mandatory:

* WCAG 2.1 AA
* Keyboard navigation
* Screen reader support
* Minimum contrast ratio compliance
* Hindi + English support

---

# Brand Colors

> **Source of truth:** `src/styles/theme.css` (primitives) and `src/app/globals.css` (semantic tokens).
> Never hardcode hex values in components. Use the Tailwind classes or CSS variables listed below.

## Token System Overview

The design system uses a **3-layer token architecture**:

| Layer | File | Purpose |
|---|---|---|
| Primitive | `src/styles/theme.css` | Raw hex values — never use directly in components |
| Semantic | `src/app/globals.css` | Intent-based CSS vars — what components reference |
| Utility | `tailwind.config.ts` + `@theme` | Auto-generated Tailwind classes |

---

## Brand Orange (Primary)

**Hex:** `#FF6E28`

Used for CTA buttons, active states, icons, interactive links, and focus rings.

| Token | Class | Hex | Use |
|---|---|---|---|
| `--color-brand-primary` | `bg-brand-primary` / `text-brand-primary` | `#FF6E28` | Primary CTAs, active nav, icons |
| `--color-brand-accent` | `text-brand-accent` | `#E85818` | Accent word in section headings |
| `--color-brand-hover` | `hover:bg-brand-hover` | `#C44510` | Hover on brand-colored elements |
| `--color-brand-light` | `bg-brand-light` | `#FF9A6A` | Badges, tags, soft highlights |
| `--color-brand-subtle` | `bg-brand-subtle` | `#FFB899` | Very light brand tint backgrounds |

---

## Government Green

Used for success states, approval badges, completion indicators.

| Token | Class | Hex |
|---|---|---|
| `--color-gov-green` | `text-gov-green` / `bg-gov-green` | `#2D7A3A` |

---

## Government Navy

Used for official headings, navigation, formal information blocks.

| Token | Class | Hex |
|---|---|---|
| `--color-gov-navy` | `text-gov-navy` / `bg-gov-navy` | `#1A2B5F` |
| `--color-gov-navy-light` | `text-gov-navy-light` | `#2A3F7F` |

---

## Neutral / Surface

| Token | Class | Hex | Use |
|---|---|---|---|
| `--color-bg-page` | `bg-bg-page` | `#F8F8F8` | Page background |
| `--color-bg-surface` | `bg-bg-surface` | `#FFFFFF` | Cards, forms, dialogs |
| `--color-bg-subtle` | `bg-bg-subtle` | `#F5F0E8` | Cream-tinted section backgrounds |

---

## Status Colors

| Status | Token | Tailwind Class | Hex |
|---|---|---|---|
| Success / Approved / Completed | `--color-status-success` | `text-status-success` | `#16A34A` |
| Error / Rejected | `--color-status-error` | `text-status-error` | `#DC2626` |
| Warning / Under Review | `--color-status-warning` | `text-status-warning` | `#D97706` |
| Info / Submitted | `--color-status-info` | `text-status-info` | `#3B82F6` |
| Draft | `--color-status-draft` | `text-status-draft` | `#5F6368` |

---

## Text Colors

| Token | Class | Hex | Use |
|---|---|---|---|
| `--color-text-primary` | `text-text-primary` | `#202124` | Headings, nav items |
| `--color-text-secondary` | `text-text-secondary` | `#5F6368` | Subtitles, captions, footer items |
| `--color-text-muted` | `text-text-muted` | `#424242` | Body links, muted labels |
| `--color-text-inverse` | `text-text-inverse` | `#FFFFFF` | Text on dark/brand backgrounds |
| `--color-text-brand` | `text-text-brand` | `#FF6E28` | Brand-colored body text |

---

# Typography

## Primary Font

**Google Sans Flex** (with fallback to Google Sans, then sans-serif)

Configured in `tailwind.config.ts` as `font-sans`.

```css
font-family: 'Google Sans Flex', 'Google Sans', sans-serif;
```

Usage in Tailwind: `font-sans` (default on all elements via `body`).

---

## Hindi Font

Noto Sans Devanagari

Used when locale = hi.

---

## Heading Scale

### H1

```css
48px
font-bold
```

Hero titles.

---

### H2

```css
36px
font-semibold
```

Section titles.

---

### H3

```css
24px
font-semibold
```

Card headings.

---

### Body

```css
16px
font-normal
```

Default content.

---

### Small Text

```css
14px
```

Metadata.

---

# Layout System

## Max Width

```css
1280px
```

---

## Section Padding

Desktop:

```css
80px
```

Top and bottom.

---

Mobile:

```css
48px
```

Top and bottom.

---

# Grid System

Desktop:

```css
12 Columns
```

---

Tablet:

```css
6 Columns
```

---

Mobile:

```css
1 Column
```

---

# Border Radius

## Cards

```css
12px
```

---

## Inputs

```css
8px
```

---

## Buttons

```css
8px
```

---

# Elevation

## Level 1

Cards

```css
shadow-sm
```

---

## Level 2

Dialogs

```css
shadow-md
```

---

## Level 3

Modals

```css
shadow-lg
```

---

# Buttons

## Primary

Background:

```css
Orange
```

Text:

```css
White
```

Usage:

* Submit
* Continue
* Save
* Approve

---

## Secondary

Background:

```css
White
```

Border:

```css
Gray
```

Usage:

* Cancel
* Back

---

## Danger

Background:

```css
Red
```

Usage:

* Delete
* Reject

---

# Cards

Used for:

* Dashboard widgets
* Statistics
* Scheme information
* Reports

Rules:

* White background
* Rounded corners
* Light shadow
* Consistent spacing

---

# Forms

All forms must use:

* React Hook Form
* Zod Validation

Rules:

* Labels always visible
* Validation shown below field
* Required fields marked
* Hindi + English supported

---

# Tables

Default:

* Striped rows
* Sticky header
* Sorting support
* Pagination support

Used in:

* Applications
* Users
* Reports
* Inspections

---

# Status Colors

## Draft

Gray

---

## Submitted

Blue

---

## Under Review

Orange

---

## Approved

Green

---

## Conditionally Approved

Yellow

---

## Rejected

Red

---

## Completed

Dark Green

---

# Icons

Library:

```text
Lucide React
```

Guidelines:

* Use outlined icons
* Keep consistent size
* Avoid mixing icon libraries

---

# Charts

Library:

```text
Recharts
```

Allowed:

* Bar Charts
* Line Charts
* Area Charts
* Pie Charts

Used in:

* Reporting
* Analytics
* Financial dashboards

---

# Images

Use:

* Government officials
* Industrial parks
* Infrastructure development
* Uttar Pradesh branding

Avoid:

* Generic stock photos
* Cartoon illustrations

---

# Notifications

Library:

```text
Sonner
```

Types:

* Success
* Error
* Warning
* Info

---

# Responsive Breakpoints & Device Support

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Device Support & Compatibility Standards

- **Mobile Viewports (320px - 480px)**: Compact, touch-friendly layouts (e.g. standard smartphone screens).
- **Tablet / Small Laptops (768px - 1024px)**: Transition states. Ensure no layout overlap.
- **Government Office Monitors (1024x768 or 1280x1024 resolutions)**: Prioritize horizontal fitting. Ensure that at a standard 1024px width, navigation elements do not wrap awkwardly and contrast ratios remain highly readable under office lighting.
- **Mac / Widescreen Displays (1440px - 1920px+)**: Set absolute content container boundaries at `max-w-[1280px]` (centered horizontally via `mx-auto`) to prevent layout stretching and maintain readable text line lengths.

---

# Component Library

```text
Shadcn UI
Radix UI
Tailwind CSS
```

---

# Design Goal

Every screen should communicate:

Trust.
Transparency.
Government Authority.
Ease of Use.
Accessibility.

The design should feel like a modern government platform, not a startup landing page.
