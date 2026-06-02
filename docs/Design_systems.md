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

## Primary Orange

Used for:

* Primary CTA
* Hero sections
* Important actions
* Active states

```css
#F97316
```

Tailwind:

```css
bg-orange-500
```

---

## Dark Orange

Used for:

* Hover states
* Emphasis

```css
#EA580C
```

---

## Government Green

Used for:

* Success
* Approval
* Completion

```css
#15803D
```

---

## Government Navy

Used for:

* Headings
* Navigation
* Official information

```css
#1E3A5F
```

---

## Neutral Background

```css
#F8F8F8
```

Used for page backgrounds.

---

## Surface White

```css
#FFFFFF
```

Used for:

* Cards
* Tables
* Forms
* Dialogs

---

## Error

```css
#DC2626
```

---

## Warning

```css
#D97706
```

---

# Typography

## Primary Font

Geist

Fallback:

```css
sans-serif
```

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
