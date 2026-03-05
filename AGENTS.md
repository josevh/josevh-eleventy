# AGENTS.md

## Project Purpose
Personal blog/portfolio built with Eleventy.
Primary goals: simple content publishing, fast static output, and maintainable styling.

## Tech Stack
- Eleventy `v3`
- Nunjucks/Liquid/Markdown templates
- Sass (`dart-sass`) compiled via Eleventy custom `.scss` extension in `.eleventy.js`

## Key Commands
- Install: `npm install`
- Build: `npm run build`
- Dev watch: `npm run watch`
- Dev server: `npm run serve`

## Repo Map
- Config: `.eleventy.js`
- Content + templates: `src/`
- Styles entry: `src/assets/css/main.scss`
- Sass source: `src/_includes/sass/`
- Output: `dist/`

## Eleventy Notes
- Input dir: `src`
- Output dir: `dist`
- SCSS is compiled by `sass.compileString` with load paths including:
  - current file dir
  - Eleventy includes dir
- Site language is `en-US` (no Eleventy i18n plugin).

## Sass Architecture (Current)
Use module-based Sass (`@use`), not Sass `@import`.

Structure under `src/_includes/sass/`:
- `abstracts/` design tokens (colors, fonts, shared constants)
- `base/` element-level/global rules
- `components/` reusable UI blocks
- `pages/` page-specific rules
- `utilities/` helper classes

Entry modules:
- `neat.scss`: core global/theme styles
- `custom.scss`: feature/page/component overrides
- `src/assets/css/main.scss` composes both via `@use`

## CSS/Sass Conventions
- Prefer low-specificity selectors unless preserving existing behavior requires otherwise.
- Keep tokens centralized in `abstracts/_tokens.scss`.
- In partials, import tokens with namespacing:
  - `@use "../abstracts/tokens" as t;`
  - reference values as `t.$token-name`.
- Put new rules in the correct layer (`components/`, `pages/`, etc.) instead of growing entry files.
- Avoid `!important` unless already required by framework override constraints.

## Change Guidelines for Future Agents
- Before editing styles, inspect existing partials to avoid duplicate rules.
- Preserve visual behavior unless explicitly asked to redesign.
- After CSS/Sass changes, always run `npm run build` to validate compilation.
- Keep changes scoped and avoid unrelated formatting churn.
- Do not modify `dist/` manually; it is generated.

## Content Conventions
- Content pages live directly under `src/` (for example: `src/index.md`, `src/blog.njk`, `src/projects.njk`).
- Blog posts live under `src/blog/`.
- Project pages live under `src/projects/`.
- Site metadata is flat in `src/_data/site.json`.
- Experience and education data live in:
  - `src/_data/site/experience.json`
  - `src/_data/site/education.json`

## Safe Defaults
- If unsure where a style belongs:
  1. token -> `abstracts`
  2. html/body/typography defaults -> `base`
  3. reusable block -> `components`
  4. one-page-only tweak -> `pages`
  5. utility/helper class -> `utilities`
