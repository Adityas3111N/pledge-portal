# Testing Strategy

## Testing Pyramid

E2E
↑
Integration
↑
Unit

## Unit Tests

Test:

- Utilities
- Hooks
- Validation schemas
- Business rules

Tool:
- Vitest

## Integration Tests

Test:

- Feature workflows
- API interactions
- Form submissions

Tool:
- React Testing Library

## E2E Tests

Test:

- Login
- Permission flows
- Application submission
- Approval workflow

Tool:
- Playwright

## Coverage Targets

Critical business logic:
90%+

General code:
80%+

UI components:
As needed