# Working on developer-portfolio-v2

Guidance for AI assistants (and humans) working in this repository. It complements the
README (what the template is) and the CHANGELOG (what changed and when).

## What this project is

An open-source portfolio template with ~300 stars and ~90 forks. People fork it, edit
`developer.json` and deploy. Every change must respect that: **do not break existing forks**
and **do not break existing `developer.json` files**.

- Stack: Nuxt 4 (`app/` directory, `shared/` auto-imported via `#shared`), Vue 3,
  TypeScript strict, Tailwind CSS 4 (`@theme` tokens in `app/assets/tailwind.css`), pnpm.
- The design is fixed (Figma "Portfolio for Developers Concept V.2"). Visual changes are
  only made on request; refactors must keep the rendered pages pixel-identical.
- Code, comments, commits, issues and docs are in English.

## Branches

| Branch | Role |
|---|---|
| `main` | Default branch, always the latest release. Only moves by fast-forward from `next`. |
| `next` | Working branch. Commit here, push, let CI run. |
| `v1` | Frozen snapshot of 1.9.6 (Nuxt 3, yarn). Protected by a ruleset. Never touch. |

Releases are annotated tags `vX.Y.Z` plus a GitHub release. Commit messages that fix an
issue end with `Closes #n`; GitHub closes the issue when the commit reaches `main`.

## The contract: `developer.json`

`developer.json` is the only file users are expected to edit. `developer.schema.json`
describes it; the TypeScript types in `shared/types/developer.ts` are **generated** from the
schema (`pnpm schema:types`, never edited by hand; a test fails if they are stale). A local
Nuxt module validates the file on every start.

- Adding an **optional** field is a minor change. Document its default in the schema
  `description`, in the README (Customization) and in the CHANGELOG.
- Renaming or removing a field, or changing its shape, is a **major** change and needs an
  upgrade note in the CHANGELOG. Avoid it.
- Keep `developer.json` itself as demo content (Micheal Weaver, lorem ipsum): it is what a
  fresh clone shows.

## Environment and commands

Node 24 (`.nvmrc`) and pnpm via Corepack (`packageManager` in `package.json`). On a machine
with nvm the shell does not persist between commands, so prefix each one:

```sh
source ~/.nvm/nvm.sh && nvm use 24 >/dev/null && corepack pnpm <script>
```

| Command | Purpose |
|---|---|
| `pnpm dev` | Dev server on http://localhost:3000 |
| `pnpm lint` / `pnpm lint:fix` | ESLint with the Nuxt config; it is also the formatter |
| `pnpm typecheck` | `vue-tsc` over app, server, shared and tests |
| `pnpm test` | Vitest: plain Node project (`test/*.test.ts`) + Nuxt project (`test/nuxt/`) |
| `pnpm build` / `pnpm generate` | SSR build / static site in `.output/public` (what Netlify deploys) |
| `pnpm schema:types` | Regenerate `shared/types/developer.ts` from the schema |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, test, build and generate on every push
to `main` and `next` and on pull requests. Run the same five locally before pushing.

## Definition of done for a change

1. Lint, typecheck, tests, `build` and `generate` pass locally.
2. New behaviour has a test: pure logic in `test/`, components and pages in `test/nuxt/`
   with `mountSuspended`. Network calls (GitHub gists, form endpoints) are mocked.
3. The UI was checked in a real browser (headless Chrome via `puppeteer-core`, desktop
   1440x900 and mobile 390x844): no console errors, no hydration warnings, the initial state
   of every page is pixel-identical to before unless the change is visual, and axe-core
   reports no WCAG 2.2 AA violations (the Nuxt DevTools frame is the only tolerated hit in
   dev). Interactive changes are driven by script (click, type, check state), not by eye.
4. `CHANGELOG.md` has an entry under `## [Unreleased]` (Keep a Changelog format, with the
   issue link when there is one); the README is updated if the user-facing contract or the
   commands changed.
5. One commit per logical change, Conventional Commits style (`feat(about): …`,
   `fix: …`, `docs: …`, `chore(release): …`), body explaining the why, `Closes #n` when it
   resolves an issue.

## Conventions that are easy to miss

- Nuxt's ESLint config enforces the key order of `nuxt.config.ts` (`nitro` after
  `compatibilityDate`, before `vite`).
- `nuxt.config.ts` is type-checked with the node project, which has no `~~` alias: code it
  imports lives in `shared/` and uses relative imports there.
- Element ids that repeat per item became classes in v2 (`.nav-link`, `.project`,
  `.scroll-bar`); do not reintroduce duplicated ids.
- Every control is a real `<button>` or `<a>`, keyboard reachable, with `aria-expanded`,
  `aria-pressed` or `aria-controls` where it toggles something. Icons are decorative
  (`alt=""`) unless they carry meaning.
- Paths in `developer.json` and in templates are absolute (`/icons/...`); relative paths
  broke on hosts that add a trailing slash.
- The gist "stars" entry is a link: the GitHub gist API has no star count and starring needs
  a visitor token. Do not try to "fix" that again.
- The contact form posts to `contacts.form.action` (form-encoded, `Accept: application/json`)
  and falls back to a `mailto:` link. Netlify Forms was deliberately not used: its
  `data-netlify` attribute and injected hidden input cause hydration mismatches.

## Dependencies

Renovate (`renovate.json`, `config:best-practices`) opens weekly PRs on Mondays, pins
devDependencies and GitHub Actions, waits 3 days after an npm release and merges minor/patch
updates of tooling when CI is green. Nuxt, Vue and `vue-tsc` updates are reviewed by hand.
The Dependency Dashboard issue lists what is pending. Do not add dependencies for things the
platform already does; `aos` and `highlight.js` are the only runtime libraries.

## Releasing

1. On `next`: move the `[Unreleased]` entries under `## [X.Y.Z] - YYYY-MM-DD`, add the
   compare link at the bottom, update the versions table in the README and `version` in
   `package.json`. Commit as `chore(release): X.Y.Z`.
2. `git tag -a vX.Y.Z -m "X.Y.Z: one-line summary"`, push `next` and the tag.
3. Fast-forward `main`: `git push origin next:main` (refuse if it is not a fast-forward).
4. `gh release create vX.Y.Z --verify-tag --latest --title X.Y.Z --notes-file notes.md`,
   with the notes taken from that CHANGELOG section plus a one-line "how to upgrade".
5. Check CI on `main` and that the Netlify demo serves the new version (it can take a while).

SemVer: patch for fixes, minor for additive features and optional `developer.json` fields,
major for anything that changes what users must do.

## Out of bounds without asking

Force-pushing or rewriting history on any branch, touching `v1`, deleting or renaming
`developer.json` fields, changing the visual design, publishing releases or posting
comments on issues on the maintainer's behalf.
