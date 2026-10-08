# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (single page) for a geoinformation engineering student. React 19 + Vite 8 + Tailwind CSS v4, plain JavaScript/JSX (no TypeScript, no router, no tests).

## Commands

- `npm run dev`: Vite dev server with HMR
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the built `dist/`
- `npm run lint`: ESLint (flat config in `eslint.config.js`: recommended JS, react-hooks, react-refresh)

There is no test suite.

## Architecture

- `src/App.jsx` stacks the page sections in order (Navbar, Hero, About, Education, Experience, Projects, Skills, Contact, Footer) inside a `LanguageProvider`. Navigation is anchor links (`#hero`, `#about`, ...) to each section's `id`.
- **All visible content lives in `src/components/LanguageContext.jsx`**, not in the components. It holds a `translations` object with three locales, `fr` (default), `en`, and `ar`. Each locale has the same keys: `nav`, `hero`, `about`, `experience`, `education`, `projects`, `skills`, `contact`, `footer`. Components call `useLanguage()` to get `{ language, setLanguage, t }` and render from `t.<section>`.
  - When you add or edit content, such as a project, skill or experience, update **all three locales** with the same structure. A key missing in one locale will crash that language.
  - The provider sets `<html lang>` and `dir="rtl"` for Arabic, so layouts must tolerate RTL.
- Project entries (`t.projects.categories[].items[]`) support optional fields that `Projects.jsx` renders conditionally: `image`, `github`, `report` (PDF link), `inProgress` (badge).
- Styling uses Tailwind utility classes inline in the JSX. Tailwind v4 is wired through the `@tailwindcss/vite` plugin and `src/index.css` (`@import "tailwindcss";`); there is no `tailwind.config.js`. `src/App.css` is leftover template CSS and is not imported.
- Static assets are in `public/`: `images/` (profile photo, project screenshots) and `documents/` (PDF reports). Vite serves `public/` at the site root, so reference them as `/images/...` or `/documents/...`. Never prefix them with `/public/`: that works in dev but breaks in a production build.
- Some UI strings are still hardcoded in components rather than in translations, for example "Voir sur GitHub" in `Projects.jsx`.
