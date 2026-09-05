# Minds & Muscles

Astro rebuild of the Minds & Muscles website, a project of Fundacja DeepKind.

## Analytics & cookie consent

Google Analytics 4 is wired up (`src/components/CookieBanner.astro`), but never loads before a visitor explicitly accepts the cookie banner:

- The GA script tag is injected at runtime, only from the Accept click handler (or automatically on a later page load if the visitor already accepted). No `<script>` referencing Google exists anywhere else in the page.
- Declining is stored just as permanently as accepting, and is presented with equal visual weight — not a de-emphasized afterthought.
- Loading is also gated on the production hostname (`mindsandmuscles.pl`), so local dev and any other environment never sends real hits.
- The Measurement ID lives in Keystatic: the settings singleton's `analytics.gaMeasurementId` field (schema in `keystatic.config.ts`). Leave it empty to disable analytics entirely, regardless of consent.
- `gtag`'s internal loader silently drops any `dataLayer` push that isn't a genuine `arguments` object — pushing a rest-params array (`function gtag(...args) { dataLayer.push(args) }`) looks correct in devtools and loads without error, but sends zero actual hits to Google. The implementation here deliberately keeps `dataLayer.push(arguments)`; don't "clean up" that pattern without re-verifying a real hit still lands.

This exists because GDPR/RODO reject *implied* consent ("continued use of the site = agreement") for non-essential cookies — consent must be an affirmative action taken before the cookie is set, and declining must be as easy as accepting. When changing this mechanism, verify against the **live production URL** with Playwright, not just local dev: a fresh, isolated browser context should show zero network requests to Google before any interaction and after Decline (including across a reload), and a real `google-analytics.com/g/collect` (or `analytics.google.com/g/collect`) request after Accept — not just that `gtag/js` loaded.
