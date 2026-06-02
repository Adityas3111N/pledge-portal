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