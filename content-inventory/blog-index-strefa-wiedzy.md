# Content Inventory — Strefa Wiedzy (Blog Index)

Source file: `legacy/blog/Strefa Wiedzy - Minds and Muscles.html`
Original URL: `https://minds-and-muscles.pl/strefa-wiedzy-blog/`

**Important structural note:** This is NOT a live WordPress archive/category loop. It is a
static WordPress **Page** (post ID 1090, `page-template-default`) built with an Elementor
"HFE Basic Posts" widget (`elementor-widget-hfe-basic-posts`) that manually lists exactly
3 curated posts. There is no live query, no pagination, and no category/tag filtering — the
3 post cards are hardcoded content blocks, not a dynamic loop output.

---

## 1. Page Metadata

| Field | Value |
|---|---|
| `<title>` | `Strefa Wiedzy - Minds and Muscles` |
| Meta description | `Strefa Wiedzy O ruchu, regulacji i codziennej trosce — dla dorosłych i dzieci.Rzeczy, które pomagają lepiej rozumieć ciało, emocje i relacje. testowy 1 Wpis` |
| Canonical URL | `https://minds-and-muscles.pl/strefa-wiedzy-blog/` |
| Robots | `index, follow` |
| `og:url` | `https://minds-and-muscles.pl/strefa-wiedzy-blog/` |
| `og:site_name` | `Minds and Muscles` |
| `og:locale` | `pl_PL` |
| `og:type` | `article` |
| `og:title` | `Strefa Wiedzy - Minds and Muscles` |
| `og:description` | `Strefa Wiedzy O ruchu, regulacji i codziennej trosce — dla dorosłych i dzieci.Rzeczy, które pomagają lepiej rozumieć ciało, emocje i relacje. testowy 1 Wpis` |
| `og:image` | `https://minds-and-muscles.pl/wp-content/uploads/2021/01/child-care-template-featured-article-img-3.webp` |
| `article:published_time` | `2026-02-07T14:00:20+00:00` |
| `article:modified_time` | `2026-02-09T15:06:40+00:00` |
| `twitter:card` | `summary_large_image` |
| `twitter:title` | `Strefa Wiedzy - Minds and Muscles` |
| `twitter:description` | (same as meta/og description above) |

**Note on data quality:** the meta description contains a leftover placeholder fragment —
`testowy 1 Wpis` (literally "test 1 Post") — concatenated onto the end. This looks like an
unfinished/test edit in the legacy SEO plugin (SureRank) rather than intentional copy. Flag
for the content team before reusing verbatim; do not carry the `testowy 1 Wpis` fragment into
the new site's meta description.

The `og:image` points to a generic/unrelated stock template image
(`child-care-template-featured-article-img-3.webp`) rather than one of the 3 actual post
images below — likely a default/fallback OG image never overridden for this page.

---

## 2. Page Intro / Hero Copy

Verbatim, in DOM order, from the Elementor content area (`entry-content`):

- **H1** (`.entry-title`, WordPress page title, not visually rendered per theme CSS `display:none` pattern for site title but present in DOM as the page's actual `<h1>`):
  > Strefa Wiedzy

- **H2** (Elementor heading widget, the visible section heading):
  > Strefa Wiedzy

- **Intro paragraph** (Elementor text-editor widget, contains a `<br>` line break):
  > O ruchu, regulacji i codziennej trosce — dla dorosłych i dzieci.
  > Rzeczy, które pomagają lepiej rozumieć ciało, emocje i relacje.

  (Two lines separated by `<br>`, no other formatting.)

---

## 3. Blog Post Listing

3 post cards (`article.hfe-post-card`), in DOM order. No publish date or category/tag is
displayed on any card — these fields are not rendered by the HFE Basic Posts widget on this
page.

### Post 1

- **Title:** `Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat`
- **Excerpt (verbatim):**
  > Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat Jest sobotni...
  (Note: this excerpt text is malformed in the source — the title appears to be duplicated twice before the actual excerpt fragment "Jest sobotni..." begins, and it's truncated with "...". Likely a widget bug in the legacy site, not intentional copy. Recommend pulling the real excerpt from the actual post page rather than reusing this verbatim string.)
- **Featured image:**
  - Local saved filename: `choice-300x169.jpg` (from `Strefa Wiedzy - Minds and Muscles_files/`)
  - Original source (medium size): `https://minds-and-muscles.pl/wp-content/uploads/2026/02/choice-300x169.jpg`
  - `srcset` sizes available: `choice-300x169.jpg` (300w), `choice-1024x576.jpg` (1024w), `choice-768x432.jpg` (768w), `choice-1536x864.jpg` (1536w), `choice.jpg` (1920w, full size)
  - Alt/title text: `Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat`
- **Publish date shown:** none
- **Category/tag shown:** none
- **Link:** `https://minds-and-muscles.pl/wybieranie-miedzy-soba-a-dzieckiem/`
- **CTA link text:** `Dowiedz się więcej →`

### Post 2

- **Title:** `Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem`
- **Excerpt (verbatim):**
  > Czy telefon zabiera nam obecność przy dziecku? Sprawdź, co mówią badania o wpływie smartfona na więź, mowę i rozwój dziecka.
- **Featured image:**
  - Local saved filename: `Digital-Detox-300x169.jpg`
  - Original source (medium size): `https://minds-and-muscles.pl/wp-content/uploads/2026/02/Digital-Detox-300x169.jpg`
  - `srcset` sizes available: `Digital-Detox-300x169.jpg` (300w), `Digital-Detox-1024x576.jpg` (1024w), `Digital-Detox-768x432.jpg` (768w), `Digital-Detox-1536x864.jpg` (1536w), `Digital-Detox.jpg` (1920w, full size)
  - Alt/title text: `Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem`
- **Publish date shown:** none
- **Category/tag shown:** none
- **Link:** `https://minds-and-muscles.pl/wplyw-telefonu-na-relacje-z-dzieckiem/`
- **CTA link text:** `Dowiedz się więcej →`

### Post 3

- **Title:** `Obecność w epoce rozproszenia`
- **Excerpt (verbatim):**
  > Jest sobotnie popołudnie. Jesteś z dzieckiem od rana. Plac zabaw, bajka, wspólny obiad. A wieczorem, gdy układasz je spać, masz...
- **Featured image:**
  - Local saved filename: `presence-300x169.jpg`
  - Original source (medium size): `https://minds-and-muscles.pl/wp-content/uploads/2026/02/presence-300x169.jpg`
  - `srcset` sizes available: `presence-300x169.jpg` (300w), `presence-1024x576.jpg` (1024w), `presence-768x432.jpg` (768w), `presence-1536x864.jpg` (1536w), `presence.jpg` (1920w, full size)
  - Alt/title text: `Obecność w epoce rozproszenia`
- **Publish date shown:** none
- **Category/tag shown:** none
- **Link:** `https://minds-and-muscles.pl/byc-obecnym-rodzicem/`
- **CTA link text:** `Dowiedz się więcej →`

---

## 4. Filtering / Category UI

None present. No category tabs, tag filters, or search box appear anywhere in the post
listing widget or elsewhere on the page.

---

## 5. Pagination

None present. No pagination controls, "load more" button, or page-number links exist. The
widget renders exactly 3 hardcoded posts with no indication of a larger total post count.

---

## 6. Sidebar / Additional Widgets

No sidebar (`ast-no-sidebar` class is present on `<body>`, confirming no sidebar template is
used). Below the post grid, the page includes what appears to be the **global footer**
content (see section 7 note) rather than page-specific widgets:

- **Newsletter signup** (WPForms form, ID 11):
  - Heading (H2): `Zapisz się do Newslettera`
  - Subheading: `Bądź na bieżąco z tym, co wspiera ciało i głowę.`
  - Field: single email input, placeholder `Email address`, label `Email *`, required
  - Submit button text: `Zapisuję się` (WPForms `data-alt-text` while sending: `Sending...`)
  - Form posts back to: `https://minds-and-muscles.pl/strefa-wiedzy-blog/` (self, `page_title` hidden field = `Strefa Wiedzy`)
  - Tagline text near the form: `Równoległe zajęcia ruchowe dla dzieci i opiekunów. Bezpieczna przestrzeń dla dziecka. Czas dla Ciebie.`

- **"Ważne linki" (Important links) widget:**
  - Heading (H2): `Ważne linki`
  - Links: Home (`/`), Strefa Wiedzy (`/strefa-wiedzy-blog/`), Polityka prywatności (`/polityka-prywatnosci/`), Polityka cookies (`/polityka-cookies/`)

- **"Bądźmy w kontakcie" (Let's stay in touch) widget:**
  - Heading (H2): `Bądźmy w kontakcie`
  - Phone (plain text, not a `tel:` link): `tel. 696 483 349`
  - Email (mailto link): `kontakt@mindsmuscles.pl`

- **Footer copyright line:** `© 2026 Minds & Muscles | Projekt realizowany jest w ramach Fundacji DeepKind`
- **"Powered by WordPress"** boilerplate text also present.

---

## 7. Nav/Footer Differences From a Typical Page

This page's structure differs from a plain content page in two notable ways worth flagging
to whoever owns the global nav/footer extraction:

1. **Primary header nav points to on-page anchors, not homepage anchors.** The main nav
   (`aria-label="Podstawowa nawigacja witryny"`) items — `O Minds & Muscles`, `Jak to działa?`,
   `Rodzaje zajęć`, `Strefa Wiedzy` — all link to `https://minds-and-muscles.pl/strefa-wiedzy-blog/#...`
   fragment anchors (e.g. `#o-minds-&-muscles`, `#jak-to-dziala`, `#rodzaje-zajec`,
   `#strefa-wiedzy`) instead of the homepage. This looks like a bug: the header template was
   likely built assuming it's always rendered on the homepage, and on this page the anchors
   resolve to sections that don't actually exist here (this page has no `id="o-minds-&-muscles"`
   etc. sections). Confirm against the homepage extraction whether these anchor IDs exist there.

2. **A second, distinct nav menu appears** (`aria-label="Nawigacja strony"`) with different
   items: `Blog` (→ `/blog/`), `Home`, `Kontakt`, `Polityka cookies`, `Polityka prywatności`,
   `Strefa Wiedzy` (→ `/strefa-wiedzy-blog/`). This looks like a secondary/breadcrumb-style or
   mobile-specific menu unique to inner pages (not the homepage's primary nav). Worth checking
   whether this is reused across all non-homepage pages or specific to this one.

Footer content (newsletter, "Ważne linki", "Bądźmy w kontakcie", copyright) appears to be the
standard global footer template (`elementor-337`, loaded via `hfe-before-footer-wrap`) — same
as would appear on any other page. Full footer copy is captured above in Section 6 for
convenience but should be treated as duplicate of the homepage's global footer, not
page-unique content.

---

## 8. Internal Links (Deduplicated)

All internal (`minds-and-muscles.pl` or relative/mailto) links found anywhere on the page:

| Href | Link text |
|---|---|
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/#content` | Przejdź do treści (skip-to-content) |
| `https://minds-and-muscles.pl/` | (logo, no text) |
| `https://minds-and-muscles.pl/` | Home |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/#o-minds-&-muscles` | O Minds & Muscles |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/#jak-to-dziala` | Jak to działa? |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/#rodzaje-zajec` | Rodzaje zajęć |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/#strefa-wiedzy` | Strefa Wiedzy |
| `https://minds-and-muscles.pl/kontakt/` | Kontakt |
| `https://minds-and-muscles.pl/blog/` | Blog |
| `https://minds-and-muscles.pl/polityka-cookies/` | Polityka cookies |
| `https://minds-and-muscles.pl/polityka-prywatnosci/` | Polityka prywatności |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/` | Strefa Wiedzy |
| `https://minds-and-muscles.pl/wybieranie-miedzy-soba-a-dzieckiem/` | (image link, no text) / Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat / Dowiedz się więcej → |
| `https://minds-and-muscles.pl/wplyw-telefonu-na-relacje-z-dzieckiem/` | (image link, no text) / Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem / Dowiedz się więcej → |
| `https://minds-and-muscles.pl/byc-obecnym-rodzicem/` | (image link, no text) / Obecność w epoce rozproszenia / Dowiedz się więcej → |
| `https://forms.gle/GLeR22W6XC5JrNXe9` | Zapisz się (appears 4×, header + mobile menu CTA buttons) — *external Google Forms link, not internal, listed here since it's the site's primary signup CTA* |
| `mailto:kontakt@mindsmuscles.pl` | kontakt@mindsmuscles.pl |

Note: the `Zapisz się` (Sign up) CTA buttons in the header/mobile menu link out to an external
Google Form (`https://forms.gle/GLeR22W6XC5JrNXe9`), not an internal page. Flagging since it's
a key conversion path that needs to be preserved or replaced in the rebuild.
