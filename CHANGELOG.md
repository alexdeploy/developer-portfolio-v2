# Changelog

All notable changes to this project are documented in this file. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0-beta.1] - 2026-10-18

First pre-release of **2.0.0**: the same design on today's stack. It is developed on the
`next` branch and tracked in [#39](https://github.com/alexdeploy/developer-portfolio-v2/issues/39);
the final 2.0.0 will be merged into `main`. v1 keeps living on the
[`v1`](https://github.com/alexdeploy/developer-portfolio-v2/tree/v1) branch and is not affected.
See [Upgrading from v1](#upgrading-from-v1) below.

### Added

- `developer.schema.json`, a JSON Schema for `developer.json`. Editors autocomplete and validate
  the file while typing, `nuxt dev` and `nuxt build` stop with the list of errors when it does not
  match, and the TypeScript types are generated from it (`pnpm schema:types`).
- Optional `site` block in `developer.json` (`url`, `title`, `description`, `image`, `lang`) that
  drives the `<html lang>`, the title of every page, the canonical link, the Open Graph and
  Twitter tags and the web app manifest. Every field has a default, so existing files keep working.
- Per-page titles ("Projects | Jane Doe") and an absolute `og:image` when `site.url` is set, so
  shared links show the preview image.
- TypeScript across the project: every page and component is `<script setup lang="ts">`, the
  config is exposed through the typed `developerConfig` auto-import, and `pnpm typecheck` runs
  `vue-tsc` over the app and the tests.
- Accessibility: every control is a real button or link, usable with the keyboard, with
  `aria-expanded` / `aria-pressed` state; skip link, visible focus ring, labelled landmarks, an
  `h1` on every page, `mailto:` / `tel:` contact links, meaningful alt text. axe-core reports no
  WCAG 2.2 AA violations on any page.
- Tests: 53 Vitest tests, split into a plain Node project (utils, schema, generated types) and a
  Nuxt project (`@nuxt/test-utils`) that mounts pages and components with auto-imports and the
  router. `pnpm test` runs them once, `pnpm test:watch` keeps the watcher.
- ESLint with the official Nuxt config (`@nuxt/eslint`, stylistic rules on, so it is also the
  formatter): `pnpm lint` and `pnpm lint:fix`, plus an `.editorconfig`.
- GitHub Actions CI on every push and pull request: lint, typecheck, tests, `nuxt build` and
  `nuxt generate`.
- Renovate configuration (`renovate.json`) for dependency updates; it only acts on repositories
  that install the Renovate app.
- `.nvmrc` and `engines` pin the Node version.

### Changed

- **Nuxt 4** (from 3.15) with its `app/` directory: pages, components, assets and utils live under
  `app/`, shared code under `shared/`, and the manifest is a server route under `server/routes/`.
- **Tailwind CSS 4** compiled by `@tailwindcss/vite`. The theme is CSS: colours, fonts and
  line-heights are `@theme` tokens in `app/assets/tailwind.css`. Rendered pages are pixel-identical
  to v1.
- **pnpm** replaces yarn. `package.json` declares `"packageManager": "pnpm@12"`, so Corepack picks
  it up and other package managers are rejected.
- **Node 22.22.3 or newer** is required (24 recommended, as in `.nvmrc`).
- Section icons in `developer.json` are absolute paths (`/icons/...`): relative paths broke on hosts
  that serve routes with a trailing slash.
- The web app manifest is generated from `developer.json` and prerendered at `/pwa/manifest.json`
  instead of being a hand-edited file with the template's name and demo URL.
- Gist snippets are highlighted with the language GitHub reports for the file; auto-detection is
  only a fallback. `highlight.js` is used directly instead of through `@highlightjs/vue-plugin`.
- Projects are rendered from a typed array, so cards are numbered 01, 02, 03 regardless of the keys
  used in `developer.json`.
- Duplicated element ids (navigation links, section titles, project cards, scroll bars...) became
  classes. If you styled them from your own CSS, see the upgrade notes.
- Tech and PWA icon files are lowercase and referenced as such, so they load on case-sensitive
  hosts.

### Fixed

- [#35](https://github.com/alexdeploy/developer-portfolio-v2/issues/35) `nuxt generate` failed on
  prerender because the manifest and apple-touch-icon were linked with relative paths.
- [#34](https://github.com/alexdeploy/developer-portfolio-v2/issues/34) The app frame was shorter
  than the viewport in Safari and Firefox: it relied on `height: stretch`, which only Chrome
  understood. On small screens the frame also overflowed the viewport by 30px and caused scroll on
  pages that fit; it no longer does.
- [#22](https://github.com/alexdeploy/developer-portfolio-v2/issues/22) Snippet highlighting
  guessed the wrong language on short gists.
- The mobile header showed no logo (`config.logoName` instead of `logo_name`).
- Event listeners and the snake game interval were never cleaned up (`beforeDestroy` does not
  exist in Vue 3).
- The about page was hidden on the server-rendered response and only appeared after hydration.
- `tailwindcss/nesting could not be loaded` warning on every start.

### Removed

- `tailwind.config.js` (the theme moved to CSS) and the tokens nothing in the template used:
  colours `gray-dark`, `glitch-green`, `glitch-rose`, `glitch-blue`, `neon-blue-xs`, `neon-blue-s`,
  `neon-blue-m`, `neon-blue-l`, `neon-blue-xl`, `hello-name`, `hello-gray`, `codeline-tag`,
  `codeline-name`, `placeholder-gray`; fonts `fira_light`, `fira_semibold`, `fira_variable` and
  their `.ttf` files.
- `@nuxtjs/tailwindcss`, `@highlightjs/vue-plugin`, `yarn.lock`.
- `public/pwa/manifest.json` (generated now), the unused default layout, `app.config.ts`, the
  never-registered service worker, the Nuxt starter READMEs (one was deployed from `public/`), the
  empty `content/` and `middleware/` folders, the unused `runtimeConfig`, `public/images/demo.png`
  and `public/logo.png`.

### Upgrading from v1

`developer.json` is the contract between the template and your content, and its format has not
changed. If you only edited that file, upgrading is:

1. Clone or pull the new version and copy your `developer.json` over the shipped one.
2. Add `"$schema": "./developer.schema.json"` as its first key to get validation in your editor,
   and make the three section `icon` paths start with a slash (`"/icons/info-personal.svg"`).
3. Fill in the optional `site` block with your public URL and description. Until you do, the
   defaults are derived from your name and role.
4. Install Node 24 (`nvm use` reads `.nvmrc`), enable Corepack (`corepack enable`) and run
   `pnpm install`. Delete `node_modules` and `yarn.lock` from your copy first.

If you also customised the code:

- Files moved under `app/` (`pages/`, `components/`, `assets/`, `utils/`) and `nuxt.config.js`
  became `nuxt.config.ts`. Templates kept their structure and Tailwind classes, so porting a change
  is usually a matter of applying it to the new file.
- If your CSS referenced one of the removed theme tokens, add it back under `@theme` in
  `app/assets/tailwind.css`, for example `--color-placeholder-gray: #465E77;` or
  `--font-fira_light: "Fira Code Light";` (and restore the font file under `app/assets/fonts/fira-code/`).
- If your CSS targeted an element id that became a class (`#nav-link` → `.nav-link`,
  `#project` → `.project`, `#scroll-bar` → `.scroll-bar`...), update the selector.
- Edit the manifest through the `site` block of `developer.json`, and keep your icons under
  `public/pwa/icons/`.

To stay on v1 instead, check out the `v1` branch or the `v1.9.6` tag; nothing changes there.

## [1.9.6] - 2025-03-02

### Changed

- Nuxt and Vite updated to their latest 3.x releases for Node 22 compatibility.

### Removed

- Unused `runtimeConfig` from `nuxt.config.js`.

Earlier versions are documented in the
[GitHub releases](https://github.com/alexdeploy/developer-portfolio-v2/releases).

[Unreleased]: https://github.com/alexdeploy/developer-portfolio-v2/compare/v2.0.0-beta.1...next
[2.0.0-beta.1]: https://github.com/alexdeploy/developer-portfolio-v2/compare/v1.9.6...v2.0.0-beta.1
[1.9.6]: https://github.com/alexdeploy/developer-portfolio-v2/releases/tag/v1.9.6
