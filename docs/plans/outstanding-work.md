# Outstanding work — implementation plan

Covers everything currently open: the design audit findings, pre-existing site gaps flagged
earlier, and the "polish current version, then try a redesign to compare" idea. Sequenced by
effort and dependency; items needing a decision from the user are marked explicitly.

## Phase 1 — Quick design-audit fixes (no decisions needed, ~15 min)

From `/review-design` on Hero.astro + DividerBand.astro.

1. **Missing hover transition** — `Hero.astro:144-146`. `.hero__link:hover` changes color with
   no `transition` property, so it snaps instead of easing (every other interactive element on
   the site transitions). Add `transition: color 0.2s ease;` to `.hero__link`.

2. **Missing WHY comments** — `Hero.astro` (illustration's `transform: rotate(-3deg)` and the
   `grid-template-areas` overlap trick) and nowhere else in the file. These are genuinely
   non-obvious — a future editor could "fix" the rotation or the empty `.` grid cell as an
   apparent mistake. Add one-line comments:
   - Above `.hero__illustration`'s `transform` rule: why the rotation exists (tilted edge rises
     into the empty heading-row cell above — intentional, not a bug).
   - Above `grid-template-areas` in `.hero__grid`: why row 1's third column is empty (reserved
     for the illustration's tilt to overflow into, per the point above).

**Verify:** `pnpm check`, visual check that the hover transition is now smooth (not instant).

## Phase 2 — Hero entry animation (moderate, ~30-45 min)

Design audit Stage 3 finding: zero entry animation on hero content — heading, body, CTA, and
illustration all render instantly with no stagger, unlike `CookieBanner.astro`'s existing
(correct) entrance pattern.

**Plan:**
- Add a `prefers-reduced-motion`-gated fade + slight translate-up on `.hero__heading`,
  `.hero__lower`, `.hero__illustration`, staggered via `animation-delay` (0ms / 100ms / 200ms
  roughly — heading first, then body/CTA, then illustration last, matching reading order).
- Use `@starting-style` (already the established pattern in this codebase per
  `frontend-design.md`) rather than a JS-driven class toggle, matching how `CookieBanner.astro`
  does its own entrance.
- Keep durations short (300-400ms) — this is a page-load reveal, not a theatrical moment.

**Verify:** visual check at 1440px and 390px with motion enabled; confirm instant appearance
(no animation) with `prefers-reduced-motion: reduce` simulated in devtools.

## Phase 1.5 — Full-page design remediation (done)

From `/review-design` run against the entire homepage (not just Hero.astro). Six of seven
findings were symmetric-grid/centered-layout violations repeated across `HowItWorks`,
`ClassTypes`, `CtaBanner`, `BlogTeaser`, and `Newsletter`, plus a missing hover state on
`PostCard`. All implemented:

- `PostCard.astro` — added hover/focus-visible lift (translateY + shadow) and image scale,
  gated in `prefers-reduced-motion: no-preference`.
- `CtaBanner.astro` — replaced centered text block with an asymmetric grid (text left, inlined
  single-path SVG accent right, `currentColor`-driven so it picks up `--c-accent`).
- `Newsletter.astro` — same asymmetric-grid + inlined SVG-accent treatment, mirrored and
  recoloured (`--c-primary`) for its light-surface background.
- `BlogTeaser.astro` + `PostCard.astro` — newest post now spans a featured 2fr column (larger
  image, `h2`), other two stacked in a narrower 1fr column, via a new `featured` prop.
- `HowItWorks.astro` — both the steps list and image gallery get an alternating vertical stagger
  (`nth-child(even)`) instead of two identical `repeat(4, 1fr)` rows.
- `ClassTypes.astro` — same alternating-stagger treatment; with 3 items this offsets only the
  middle card.

All six collapse cleanly to single-column/no-accent on mobile (verified at 390px, no horizontal
overflow). Not touched: the divider pattern itself (folded into Phase 3 below, unchanged) and
Newsletter's ESP wiring (Phase 4b, unchanged — this pass was layout-only).

## Phase 3 — Divider pattern character (flagged, not committed — needs a decision)

Design audit flagged: the striped divider's hard-edged checkerboard doesn't match the
"Wellness / Health" topic guidance (single-axis organic undulation, no sharp angles). This
predates this session — only height was touched (both dividers correctly shrunk to a quiet
32px). Fixing the *pattern* itself (not just size) is a bigger, more visible brand-identity
change than a bug fix.

**Needs a decision:** do you want to revisit the striped divider's actual pattern (e.g. a soft
wave/organic line instead of a checkerboard), or leave it as a shrunk-but-still-geometric accent
now that it's no longer dominating the page? Not scheduling implementation until this is
answered — recommend deferring to *after* Phase 5 (the redesign comparison), since a from-scratch
redesign might replace this component entirely anyway.

## Phase 4 — Pre-existing site gaps (needs decisions/external accounts)

Carried over from the original site audit, not yet started.

4a. **`/kontakt/` page** — linked in nav + footer, 404s. No legacy content was captured for it
    during the original migration (confirmed: `content-inventory/` has nothing for this page).
    **Needs from you:** what should this page actually contain? Options to choose from or
    combine: the same Google Form used for class signup (`forms.gle/GLeR22W6XC5JrNXe9`),
    contact details already in the footer (phone, email, Facebook, Instagram), a simple contact
    form (would need its own backend — see 4b's email-provider dependency), or a map/address if
    the studio has a physical location. Can't build a real page without knowing which of these.

4b. **Newsletter signup** — UI exists (`Newsletter.astro`), not wired to anything; the site
    currently promises "check your inbox" with no actual email-provider integration behind it.
    **Needs from you:** which email service provider (Mailchimp, MailerLite, Brevo, etc.) —
    this needs an actual account + API key on your side before I can wire it up. Blocked until
    you have one, not something I can proceed on unassisted.

4c. **Cookie consent "manage preferences"** — currently the only way to change an already-made
    consent choice is manually clearing browser site data (documented in the cookies policy).
    No visible "change your cookie choice" link exists anywhere on the site.
    **Recommendation:** add a small "Ustawienia cookies" link in the footer that re-shows the
    banner on click (clears the stored consent value + re-triggers the banner's show logic).
    Low effort, no external dependency — could bundle into Phase 1 if you want it now, or treat
    as its own small PR.

## Phase 5 — Redesign comparison ("two solid products")

Your stated goal: get the current direction (calm/restrained, hero-illustration-driven) to a
finished, solid state — Phases 1-2 above are what "finished" means for the hero specifically —
then build a genuinely different alternative homepage design to compare against it.

**This phase needs scoping input before I start:**
- Full homepage redesign, or just the hero + dividers (the parts already explored this session)?
- Any direction preference for the alternative (bolder/more colorful, embracing the original
  brand's playful energy rather than dialing it down; or a completely different structural
  layout; or something else)?
- Built as a real second branch/preview (so you can flip between two live URLs to compare), or
  mockup-only (static images/artifact, faster but not click-through-able)?

Not estimating effort until scope is confirmed — a hero-only alternative is a few hours of
iteration (based on how long the *first* hero direction took); a full homepage redesign is
substantially larger.

## Sequencing recommendation

1 → 2 → (4c, if you want it bundled) → decide on 3 and 4a/4b inputs in parallel → 5 last, since
it benefits from Phase 1-2 being genuinely finished as the "Product A" baseline to compare against.
