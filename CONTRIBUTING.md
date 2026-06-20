# Contributing to Robots.txt Studio

First off, thank you for considering contributing to Robots.txt Studio! Projects like this thrive on open contributions.

## Coding Style & Guidelines

To ensure the component remains easy to install and integrate into custom UI systems, please follow these guidelines:

1.  **Keep it Standalone**: The [RobotsTxtGenerator.tsx](file:///components/RobotsTxtGenerator.tsx) component must remain self-contained in a single file. Do not split it into helper files or add sub-components unless absolutely necessary.
2.  **No External UI Dependencies**: Do not introduce dependencies like `@radix-ui`, `framer-motion`, or `lucide-react`. All icons must be declared as inline, responsive SVG elements, and styling should rely solely on native Tailwind CSS classes.
3.  **Client-Side Native**: The path validation engine, parsing logic, and state management must run 100% on the client side without relying on API routes or server-side functions.
4.  **TypeScript Strictness**: Keep strict typing active. Avoid using the `any` type.

## Development Setup

We use **pnpm** as our package manager of choice.

### 1. Run Development Server
Start Next.js Turbopack locally:
```bash
pnpm dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 2. Run Production Build
Ensure there are no build, bundle, or linting errors before pushing:
```bash
pnpm build
```

### 3. Run Linter
Verify code styling and standard compliance:
```bash
pnpm lint
```

## Repository Structure

*   [components/RobotsTxtGenerator.tsx](file:///components/RobotsTxtGenerator.tsx) — The core, reusable, standalone React component.
*   [app/page.tsx](file:///app/page.tsx) — Next.js page showcasing the component and documentation layout.
*   [app/layout.tsx](file:///app/layout.tsx) — Main layout file configuration.
*   `LICENSE` — Open-source MIT license declaration.
*   `CONTRIBUTING.md` — This file.
