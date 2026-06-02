# AGENTS.md

## Mission

Build a maintainable, secure, accessible, and scalable Next.js App Router application.

Prioritize:

1. Correctness
2. Maintainability
3. Consistency
4. Security
5. Accessibility
6. Performance

Never prioritize cleverness over clarity.

---

## Required Reading

Before making significant changes, review relevant documentation in `docs/` and follow all rules in `.cursor/rules/`.

Documentation is the source of truth.

---

## Next.js Philosophy

* Prefer Server Components.
* Use Client Components only when necessary.
* Keep `page.tsx` focused on composition.
* Keep business logic outside pages and UI components.
* Leverage App Router primitives before creating custom solutions.

---

## Architecture

* Follow existing project patterns.
* Extend existing architecture before introducing new patterns.
* Respect feature boundaries.
* Keep concerns separated.

Never mix:

* UI rendering
* Business logic
* API communication
* Validation
* Permission handling

---

## Components

* Components should have a single responsibility.
* Extract code when readability or cohesion suffers.
* Avoid giant components.
* Avoid unnecessary file splitting.
* Prioritize clarity over file-size rules.

---

## Reuse

Before creating:

* Components
* Hooks
* Services
* Utilities

Search for an existing implementation.

Avoid duplication.

Do not create abstractions for hypothetical future needs.

---

## Type Safety

* Types are contracts.
* Never use `any`.
* Never use `@ts-ignore`.
* Prefer improving the design over weakening types.

---

## Security & Permissions

* Never hardcode permissions or roles.
* Assume client input is untrusted.
* Backend remains the source of truth.

---

## Accessibility

Every user-facing feature must support:

* Semantic HTML
* Keyboard navigation
* Screen readers
* Visible focus states

---

## Decision Framework

When multiple solutions exist, choose the one that:

1. Matches existing architecture
2. Reduces complexity
3. Improves maintainability
4. Preserves consistency
5. Is easiest for future developers to understand
