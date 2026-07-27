# Frzyc's portfolio website

Personal portfolio built with Vite, React, MUI, and TypeScript.

## Prerequisites

- Node.js 20+
- Yarn (Corepack: `corepack enable`)

## Scripts

After `yarn install`:

| Command                   | Description                             |
| ------------------------- | --------------------------------------- |
| `yarn start` / `yarn dev` | Dev server at http://localhost:3000     |
| `yarn build`              | Typecheck + production build to `dist/` |
| `yarn preview`            | Preview the production build            |
| `yarn lint`               | Run ESLint                              |
| `yarn pretty`             | Format with Prettier                    |
| `yarn deploy`             | Deploy `dist/` to GitHub Pages          |

To publish: `yarn build` then `yarn deploy`.
