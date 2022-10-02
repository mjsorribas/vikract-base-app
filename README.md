# Vikract Project Starter

This is a project bootstrapped with [`@vitejs/app`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`react-ts`), added with [Chakra UI](https://chakra-ui.com) and [TypeScript](https://www.typescriptlang.org) setup.

- Blazing fast dev server and build
- Route management added (`react-router-dom` configured)

## Getting Started

You can either click [`Use this template`](https://github.com/mjsorribas/vikract-base-app/generate) button on this repository and clone the repo or use npx degit like so:

```bash
npx degit mjsorribas/vikract-base-app <app_name>
```

Then, run the development server:

```bash
yarn dev
```

## Deployment

- build command: `yarn build`
- output directory: `dist`

## Fast deploy with Vercel and Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/mjsorribas/vikract-base-app) 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mjsorribas/vikract-base-app)

## Git configuration of commits

We add husky to validate the format of the commits based on Conventional Commits.
A specification for adding human and machine readable meaning to commit messages.
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Development with Linter
We add Linter to validate the code quickly. 
- Linter command: `yarn lint`
Also we can fix the code running the same command with a --fix parameter.
- Linter fix command: `yarn lint --fix`

## How run tests with vitest
We add Vitest to run test in the app. 
- Test command: `yarn test`
Also we can run test with the vitest ui
- Test command: `yarn test:ui`

## How generate coverage with vitest
We add vitest/coverage-c8 to run generate reports. 
- Coverage command: `yarn coverage`

## References

- [vite](https://vitejs.dev)
  - [avoid manual import](https://vitejs.dev/guide/features.html#jsx)
- [vitest](https://vitest.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org)
- [Victory](https://formidable.com/open-source/victory/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)