# Architectural Decisions 

# 01/06/2026

## Framework

Choice:
Next.js App Router

Reason:
Built-in routing, layouts, server components and excellent TypeScript support.

Alternatives Rejected:
React Router, Pages Router

---

## Frontend Architecture

Choice:
Feature-based architecture.

Reason:
12 modules with clear domain boundaries. Easier scaling and ownership.

Alternatives Rejected:
Flat component structure, full FSD

---

## UI Library

Choice:
Shadcn UI + Radix

Reason:
Accessible, customizable, production-proven, code ownership.

Alternatives Rejected:
MUI, Ant Design, Base UI

---

## Forms

Choice:
React Hook Form + Zod

Reason:
Complex multi-step forms, strong TypeScript support, performant validation, schema-based rules.

Alternatives Rejected:
Formik, Yup

---

## Styling

Choice:
Tailwind CSS v4

Reason:
Fast development, consistency, easy theming.

Alternatives Rejected:
Styled Components, CSS Modules

---

## State Management

Choice:
Zustand + TanStack Query

Reason:
Client state and server state are fundamentally different concerns.

Alternatives Rejected:
Redux Toolkit

---

## API Layer

Choice:
Axios with centralized interceptors.

Reason:
JWT injection, global error handling, request standardization.

Alternatives Rejected:
Native fetch

---

## Internationalization

Choice:
Custom dictionary-based i18n.

Reason:
Only Hindi and English required. Simpler than next-intl.

Alternatives Rejected:
i18next, next-intl

---

## Authentication

Choice:
JWT stored in persisted auth store.

Reason:
Simple integration with backend RBAC.

Alternatives Rejected:
NextAuth

---

## Role Management

Choice:
Route groups + layout-level guards.

Reason:
10 user roles. Avoid repeating permission checks on every page.

Alternatives Rejected:
Page-level authorization

---

## Component Strategy

Choice:
Shared components only when used by 2+ features.

Reason:
Avoid premature abstraction.

Alternatives Rejected:
Centralized component dump

---

## Data Fetching

Choice:
Feature-specific query hooks.

Reason:
Encapsulates caching and API interactions.

Alternatives Rejected:
Direct API calls in components

---

## Notifications

Choice:
Sonner

Reason:
Modern API, maintained, recommended by Shadcn.

Alternatives Rejected:
Shadcn Toast