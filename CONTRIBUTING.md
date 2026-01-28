# Contributing to SwimForce Shop

## Branching Strategy (GitFlow)

We use GitFlow for branch management:

### Main Branches

- **`main`** - Production-ready code. Only receives merges from `develop` or `hotfix/*` branches.
- **`develop`** - Integration branch. All feature branches merge here first.

### Supporting Branches

- **`feature/*`** - New features. Branch from `develop`, merge back to `develop`.
- **`hotfix/*`** - Urgent production fixes. Branch from `main`, merge to both `main` and `develop`.
- **`release/*`** - Release preparation. Branch from `develop`, merge to `main` and `develop`.

## Workflow

### Starting a new feature

```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
# ... make changes ...
git push -u origin feature/my-feature
# Create PR to develop
```

### Hotfix workflow

```bash
git checkout main
git pull origin main
git checkout -b hotfix/fix-description
# ... make fix ...
git push -u origin hotfix/fix-description
# Create PR to main AND develop
```

## CI/CD Pipeline

### On feature branch push
- Smoke test (lint, type-check, build)

### On PR to develop/main
- Full lint and type-check
- Build verification
- Unit tests
- E2E tests (Playwright)

### On merge to develop
- Full test suite
- Integration tests

### Nightly (3 AM UTC)
- Full test suite against main
- External service health checks
- Failure notifications

## Running Tests Locally

```bash
# Unit tests
npm run test:unit

# E2E tests (requires build first)
npm run build
npm run test:e2e

# E2E with UI
npm run test:e2e:ui

# Watch mode for unit tests
npm run test:watch
```

## Code Quality

Before submitting a PR:

```bash
npm run lint
npm run type-check
npm run test:unit
```
