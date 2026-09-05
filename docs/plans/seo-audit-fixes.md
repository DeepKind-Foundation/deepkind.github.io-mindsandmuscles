# SEO audit fixes — implementation plan

Source: full SEO critical review conducted 2026-09-05. Findings and priority order below;
each item lists the concrete change, affected files, and how it gets verified.

## 1. Fix site URL — canonical/OG/JSON-LD all point to localhost (Critical)

Every canonical tag, `og:url`, `og:image`, and JSON-LD `url` on the live site currently
resolves to `http://localhost:4321` or the wrong domain (`minds-and-muscles.pl`, hyphenated).
Root cause is two places:

- `astro.config.mjs` has no `site` field, so `Astro.site` is `undefined` and `Astro.url`
  falls back to Astro's dev placeholder at build time.
- `src/lib/site.ts` hardcodes `SITE_URL = 'https://minds-and-muscles.pl/'` — wrong domain.

**Changes:**
- Add `site: 'https://mindsandmuscles.pl'` to `astro.config.mjs`.
- Fix `SITE_URL` in `src/lib/site.ts` to `'https://mindsandmuscles.pl/'`.

**Verify:** `pnpm build`, then grep `dist/**/*.html` for `localhost` and `minds-and-muscles.pl`
— both greps must return zero matches. Spot-check one page's canonical, `og:url`, `og:image`,
and JSON-LD `url` resolve to the real domain.

## 2. Add sitemap (High)

No `@astrojs/sitemap` integration installed, no `sitemap.xml` in output.

**Changes:**
- `pnpm add @astrojs/sitemap`
- Add to `astro.config.mjs` integrations array (this needs the conditional-Keystatic-in-dev
  pattern preserved — sitemap should run in all environments, Keystatic only in dev).

**Verify:** `pnpm build`, confirm `dist/sitemap-index.xml` and `dist/sitemap-0.xml` exist and
list all 7 real pages (policy pages will be excluded automatically once robots.txt disallows
them, or explicitly filtered — decide during implementation which is cleaner).

## 3. Add robots.txt (High)

No `public/robots.txt` at all.

**Changes:** add `public/robots.txt` with a permissive default and a `Sitemap:` line pointing
at the sitemap added in step 2.

**Verify:** `pnpm build`, confirm `dist/robots.txt` exists with correct content.

## 4. Rewrite image alt text in Polish (High)

Every homepage photo's `alt` is an unedited English stock-photo caption, several contextually
irrelevant (e.g. "Stay Safe Be Kind text carved on stone ... coronavirus pandemic" on the About
section). Site is 100% Polish elsewhere.

**Affected files:** `src/content/pages/home.yaml` (alt text is likely data-driven from here —
confirm exact source per image before editing) and any component with a hardcoded `alt`.

**Changes:** rewrite every `alt` attribute in Polish, describing what the image contributes to
its specific section — not generic stock-caption text.

**Verify:** `pnpm build`, grep `dist/index.html` for `alt="` and manually review each value for
language and relevance. Playwright e2e suite should still pass unchanged (no test currently
asserts alt text, but a visual check post-build is worth doing).

## 5. Add author attribution to blog posts (High)

No `author` field in the posts content schema, no byline shown, no `Person` schema — no E-E-A-T
signal on otherwise substantive (827–948 word) articles.

**Changes:**
- Add `author` field to the posts content collection schema.
- Add `author:` to the three existing post frontmatter files.
- Render a byline on the post page (`src/pages/[slug].astro`).
- Add a `Person` node to the post's JSON-LD (author field on the `Article` type).

**Open question to resolve before implementing:** whose name goes here? Check with the user —
do not guess an author name for a legal/attribution-bearing field.

**Verify:** `pnpm check`, `pnpm build`, confirm byline renders on a post page and JSON-LD
includes the author.

## 6. Shorten over-long titles (Medium)

Three titles exceed ~60 chars and will truncate in SERPs:
- Home page title (~72 chars)
- `wybieranie-miedzy-soba-a-dzieckiem` post title (~85 chars)
- `wplyw-telefonu-na-relacje-z-dzieckiem` post title (~85 chars)

**Changes:** shorten the on-page title text in `src/content/pages/home.yaml` and the two post
frontmatter files. Keep meaning intact; consider dropping the "— Minds and Muscles" suffix on
the longest ones since `og:site_name` already carries that.

**Verify:** `pnpm build`, grep `dist/**/*.html` for `<title>`, confirm all are ≤ ~60 chars.

## 7. Trim two over-160-char meta descriptions (Medium)

`byc-obecnym-rodzicem` (~164 chars) and `wplyw-telefonu-na-relacje-z-dzieckiem` (~168 chars)
posts slightly exceed the 160-char guideline.

**Changes:** trim both descriptions in frontmatter to ≤160 chars without losing the hook.

**Verify:** grep built HTML for `meta name="description"`, confirm length.

## 8. Re-compress `about.webp` (Medium)

`public/images/home/about.webp` is 481KB, rendered at 640×800 — 5-10x oversized for its display
dimensions, likely the homepage's LCP element.

**Changes:** re-compress/resize to something proportionate (target: under ~80KB at that
resolution, matching the size class of the site's other images).

**Verify:** file size after re-compression; visually confirm no quality regression at actual
render size; `pnpm build` + spot check the built page renders correctly.

## 9. Enrich Organization/WebSite JSON-LD (Low)

No `logo` or `sameAs` (social links) on the `Organization` node; no `SearchAction` on `WebSite`
(skip — no on-site search exists, not relevant).

**Changes:** add `logo` (site logo image, absolute URL) and `sameAs: [facebookUrl, instagramUrl]`
to `buildOrganizationJsonLd()` in `src/lib/site.ts`, sourced from the existing settings singleton.

**Verify:** `pnpm build`, confirm JSON-LD includes both fields with correct absolute URLs.

## Explicitly out of scope for this pass

- **Item 9 from the original review (migrate `<img>` to `astro:assets` `<Image>`)** — larger,
  more invasive change (touches every image in every component), not urgent since current
  images are already reasonably sized except `about.webp` (handled in step 8 as a point fix).
  Tracked here as a follow-up, not implemented now.
- **`dateModified` on posts** — no posts have been revised post-publish yet; add the field only
  when that first happens.

## Sequencing and workflow

Work happens in `.worktrees/fix/seo-audit` on branch `fix/seo-audit`, off latest `origin/main`.
Order: 1 → 2 → 3 → 6 → 7 → 8 → 9 → 4, with **5 (author) paused for user input** on whose name to
use before implementing — do the rest first, come back to 5 once answered.

After each numbered item: run `pnpm check` and `pnpm build` to catch regressions early rather
than batching all changes before the first verification pass. Full `pnpm test:e2e` run once
before opening the PR (needs the local Playwright IPv4 preview-host fix already in place from
the original rebuild). No direct push to `main` — commit on this branch, push, open a PR,
merge only on explicit user go-ahead (matches how every prior change in this project has shipped).
