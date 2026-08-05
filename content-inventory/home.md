# Content Inventory — Home

Source file: `legacy/Home - Minds and Muscles.html`
Original URL: `https://minds-and-muscles.pl/`

**Structural note:** This is a WordPress Page (post ID 17, `page-17`) built entirely with
Elementor containers/widgets (Elementor 4.2.1). Several top-level Elementor containers/sections
in the export are **empty** (spacers, unpopulated columns) — these are listed at the end of
Section 4 for completeness but carry no content. One entire section ("Kto prowadzi zajęcia?" —
team/experts) is present in the DOM but hidden on all breakpoints
(`elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile`) and still contains
generic template placeholder content (fake names, `#` social links) — flagged below, do not
treat as real copy.

---

## 1. Page Metadata

| Field | Value |
|---|---|
| `<title>` | `Home - Minds and Muscles` |
| Meta description | `WITAMY w MINDS & MUSCLES Ruch dla ciała. Spokój dla głowy. Czas dla każdego. Równoległe zajęcia dla dzieci i rodziców— zaprojektowane tak, by każdy dostał to,` (truncated, cut off mid-sentence) |
| Canonical URL | `https://minds-and-muscles.pl/` |
| Robots | `index, follow` |
| `og:url` | `https://minds-and-muscles.pl/` |
| `og:site_name` | `Minds and Muscles` |
| `og:locale` | `pl_PL` |
| `og:type` | `website` |
| `og:title` | `Home - Minds and Muscles` |
| `og:description` | (same truncated string as meta description above) |
| `og:image` | `https://minds-and-muscles.pl/wp-content/uploads/2026/02/pexels-photo-4021358-4021358-769x1024.webp` |
| `article:published_time` | `2026-02-02T11:07:36+00:00` |
| `article:modified_time` | `2026-02-15T15:09:13+00:00` |
| `twitter:card` | `summary_large_image` |
| `twitter:title` | `Home - Minds and Muscles` |
| `twitter:description` | (same truncated string as meta description above) |
| Favicon (32x32) | `https://minds-and-muscles.pl/wp-content/uploads/2026/02/cropped-mm-logo-icon-2-1-32x32.webp` |
| Favicon (192x192) | `https://minds-and-muscles.pl/wp-content/uploads/2026/02/cropped-mm-logo-icon-2-1-192x192.webp` |
| Apple touch icon (180x180) | `https://minds-and-muscles.pl/wp-content/uploads/2026/02/cropped-mm-logo-icon-2-1-180x180.webp` |
| `msapplication-TileImage` | `https://minds-and-muscles.pl/wp-content/uploads/2026/02/cropped-mm-logo-icon-2-1-270x270.webp` |

**Note on data quality:** the meta description / `og:description` / `twitter:description` are
all identically truncated mid-sentence ("...zaprojektowane tak, by każdy dostał to,") — this
looks like a copy/character-limit bug in the legacy SEO plugin, not intentional. The full
sentence, recovered from the page body hero copy, is: *"Równoległe zajęcia dla dzieci i
rodziców — zaprojektowane tak, by każdy dostał to, czego potrzebuje."* Recommend using the full
sentence for the rebuilt site's meta description.

---

## 2. Global Navigation

Logo image: `./Home - Minds and Muscles_files/cropped-Minds-and-Muscles-logo-transparent-211x70.png`
(alt text: `minds and muscles logo transparent`). Logo links to `https://minds-and-muscles.pl/`.

Two `<nav>` menus exist in the header markup:

### Primary menu (desktop, `#primary-site-navigation-desktop`)

In order:

| Label | href |
|---|---|
| Home | `https://minds-and-muscles.pl/` |
| O Minds & Muscles | `https://minds-and-muscles.pl/#o-minds-&-muscles` |
| Jak to działa? | `https://minds-and-muscles.pl/#jak-to-dziala` |
| Rodzaje zajęć | `https://minds-and-muscles.pl/#rodzaje-zajec` |
| Strefa Wiedzy | `https://minds-and-muscles.pl/#strefa-wiedzy` |
| Kontakt | `https://minds-and-muscles.pl/kontakt/` |

No dropdown/submenu items — this is a flat single-level menu. All items except "Kontakt" are
in-page anchor links to sections on this same Home page.

**Broken anchor note:** `#rodzaje-zajec` has no matching `id="rodzaje-zajec"` anywhere in the
page body — the "Rodzaje zajęć" content lives inside the `#jak-to-dziala` container without its
own anchor id, so this nav link does not actually scroll to a "Rodzaje zajęć"-specific position;
it falls through to default (no-op) behavior. Flag for fix when rebuilding.

### Secondary/mobile menu (`.ast-mobile-site-navigation`, auto-generated page list fallback)

This appears to be a different, auto-generated menu (not the same as the primary menu above) —
likely a fallback "list of pages" widget shown at a different breakpoint or state:

| Label | href |
|---|---|
| Blog | `https://minds-and-muscles.pl/blog/` |
| Home | `https://minds-and-muscles.pl/` |
| Kontakt | `https://minds-and-muscles.pl/kontakt/` |
| Polityka cookies | `https://minds-and-muscles.pl/polityka-cookies/` |
| Polityka prywatności | `https://minds-and-muscles.pl/polityka-prywatnosci/` |
| Strefa Wiedzy | `https://minds-and-muscles.pl/strefa-wiedzy-blog/` |

### Header CTA button

A button labeled **"Zapisz się"** (`ast-custom-button-link`) appears in the header markup twice
(duplicate desktop/mobile instances), linking to: `https://forms.gle/GLeR22W6XC5JrNXe9`
(external Google Form).

---

## 3. Footer

Footer (`#colophon`) has two rows: a primary 3-column row and a below-footer bar.

### Primary footer row (3 columns)

**Column 1 — About/brand:**
- Image: `./Home - Minds and Muscles_files/cropped-mm-logo-people-e1770537736761.webp` (alt: `cropped mm logo people.png`)
- Body copy: `Równoległe zajęcia ruchowe dla dzieci i opiekunów. Bezpieczna przestrzeń dla dziecka. Czas dla Ciebie.`

**Column 2 — "Ważne linki" (Important links):**

Heading: `Ważne linki`

| Label | href |
|---|---|
| Home | `https://minds-and-muscles.pl/` |
| Strefa Wiedzy | `https://minds-and-muscles.pl/strefa-wiedzy-blog/` |
| Polityka prywatności | `https://minds-and-muscles.pl/polityka-prywatnosci/` |
| Polityka cookies | `https://minds-and-muscles.pl/polityka-cookies/` |

**Column 3 — "Bądźmy w kontakcie" (Let's stay in touch):**

Heading: `Bądźmy w kontakcie`

Body copy: `tel. 696 483 349` / `kontakt@mindsmuscles.pl` (phone not a tel: link in source; email is `mailto:kontakt@mindsmuscles.pl`)

Social links (icon-only, no visible link text):
- Facebook: `https://www.facebook.com/profile.php?id=61588108561753`
- Instagram: `https://www.instagram.com/mind.s_and_muscle.s`

### Below-footer bar

Copyright text: `© 2026 Minds & Muscles | Projekt realizowany jest w ramach Fundacji DeepKind`

Second column: `Powered by WordPress` (generic WordPress attribution, not custom copy — drop when rebuilding).

No newsletter signup copy appears in the footer itself — the newsletter form is a dedicated
body section (see Section 4, "Newsletter signup").

---

## 4. Page Body Sections (in document order)

### 4.1 Hero (`#home`, Elementor container `bc08beb`)

- **Eyebrow (H6):** `WITAMY w MINDS & MUSCLES`
- **H1:** `Ruch dla ciała. Spokój dla głowy. Czas dla każdego.`
- **Body copy:** `Równoległe zajęcia dla dzieci i rodziców — zaprojektowane tak, by każdy dostał to, czego potrzebuje.`
- **Buttons:** "ZGŁOŚ ZAINTERESOWANIE" → `https://forms.gle/GLeR22W6XC5JrNXe9`; "Dowiedz się więcej" → `https://minds-and-muscles.pl/#` (placeholder, no real target)
- No `<img>` elements in this section; any hero background is set via linked/external CSS not captured in this HTML export (out of scope per extraction instructions).

### 4.2 Empty spacer container (Elementor `d5b43eb`)

Contains only a spacer widget — no content.

### 4.3 Empty section (Elementor `dix9j2k`)

Empty top-level section/column with no widgets — no content.

### 4.4 "O Minds & Muscles" — About (`#o-minds-&-muscles`, Elementor container `5e306da`)

- **Image:** `./Home - Minds and Muscles_files/pexels-photo-4021358-4021358-scaled.webp` (alt: `Stay Safe Be Kind text carved on stone in green park during coronavirus pandemic`)
- **Quote heading (H5):** `Prawie wszystko zaczyna działać znowu, jeśli odłączysz to na kilka minut. Włącznie z Tobą` + inline emoji image `./Home - Minds and Muscles_files/1f609.svg` (alt: `😉`)
- **Quote attribution:** `Anne Lamott`
- **H2:** `Czym jest Minds & Muscles?`
- **Body copy (paragraph 1):**
  > Żyjemy w świecie, w którym bardzo łatwo poczuć, że ciągle mamy za mało czasu. Za mało, by naprawdę uważnie być z dziećmi. Za mało, by zadbać o siebie — o swoje ciało, głowę, oddech. Za mało, by pielęgnować relacje i budować wokół siebie wspierającą społeczność. Brakuje nam też przestrzeni, by na chwilę zwolnić. By pobyć offline. Bez powiadomień, bez presji, bez listy rzeczy, którymi „powinniśmy się zająć". My też to znamy. Jesteśmy rodzicami, którzy chcą dbać o swoje dzieci — o ich rozwój, bezpieczeństwo i radość. Chcemy spędzać z nimi czas i być naprawdę obecni. A jednocześnie — jak wielu innych rodziców — czasem czujemy, że sami znikamy z tego równania.
- **Body copy (paragraph 2, three sub-paragraphs):**
  > Minds & Muscles powstało właśnie z tego miejsca. Stworzyliśmy je, bo nie chcieliśmy już wybierać: albo moje dziecko – albo ja,  albo ruch – albo spokój, albo czas razem – albo czas dla siebie.
  >
  > W Minds & Muscles wierzymy, że te potrzeby nie muszą się wykluczać. Że dzieci mogą być bezpieczne, aktywne i zaopiekowane, a dorośli — w tym samym czasie — mogą zadbać o swoje ciało, głowę i energię.
  >
  > To przestrzeń zaprojektowana przez rodziców dla rodziców.Z uważnością, prostotą i szacunkiem do tego, jak naprawdę wygląda codzienne życie.

  (Note: `rodziców.Z` has no space in source — verbatim as found.)

### 4.5 "Jak to działa" + "Rodzaje zajęć" (`#jak-to-dziala`, Elementor container `85de00a`)

**"Jak to działa" (How it works):**

- **H2:** `Jak to działa`
- **Subheading:** `Prosto. Równolegle. Bez stresu.`
- **4-step icon list**, each with a "Krok N" label and body text:

  1. **Krok 1 – ZACZYNACIE RAZEM**
     > Zanim zacznie się trening, jest wspólna droga . Krótki spacer, rozmowa, chwila ciszy albo śmiech po drodze. To pierwszy moment, w którym zwalniacie i jesteście razem. Zajęcia zaczynają się jeszcze przed wejściem na salę.
  2. **Krok 2 - PRZESTRZEŃ DLA DZIECKA**
     > Dziecko trafia na zajęcia ruchowe dopasowane do jego wieku i potrzeb. Jest ruch, zabawa, rozwijanie sprawności i poczucie bezpieczeństwa. Ćwiczymy w małych grupach, w dobrej atmosferze, pod uważną opieką trenerów. Dziecko jest w ruchu, zaopiekowane i po prostu… dobrze się bawi.
  3. **Krok 3 - CZAS DLA DOROSŁEGO**
     > W tym samym czasie Ty masz swój moment. Zajęcia ruchowe, oddech, rozluźnienie ciała i głowy. Bez patrzenia na zegarek. Bez poczucia winy. Z pełnym spokojem, że dziecko jest zaopiekowane. To czas, który naprawdę działa.
  4. **Krok 4 - WSPÓLNA PRZESTRZEŃ**
     > Po zajęciach spotykamy się w części wspólnej. Herbata, rozmowy, kontakt z innymi dorosłymi i swobodna zabawa dzieci. Czasem także warsztaty i wydarzenia specjalne. Bo Mind & Muscles to nie tylko trening - t utaj relacje nie kończą się wraz z ostatnim ćwiczeniem..

     (Note: "t utaj" and trailing ".." are verbatim typos/artifacts in the source — preserved as-is.)

  Inline emoji image within the list: `./Home - Minds and Muscles_files/1f642.svg` (alt: `🙂`)

- **4 supporting images (no captions), in order:**
  1. `./Home - Minds and Muscles_files/pexels-photo-2253879-2253879-scaled.webp` — alt: `A joyful family walking together outdoors, holding hands in a playful and happy moment.`
  2. `./Home - Minds and Muscles_files/pexels-photo-11897289-11897289-scaled-e1770294958192-768x1059.jpg` — alt: `Two women, parents practicing yoga in a bright indoor space, focusing on fitness and mindfulness.`
  3. `./Home - Minds and Muscles_files/pexels-photo-8613146-8613146-scaled.webp` — alt: `Happy diverse children playing with colorful balls indoors, showcasing fun and friendship.`
  4. `./Home - Minds and Muscles_files/g7bceab8c5f8d00ed07beb3ef76a588e347de624490613bf93c0a3a27dc53dda4e712f780b3b0fc0c2d7f23be311b5f44339f76abce5cfd750c389bde98dd296b_1280-2255823-e1770294795310-768x576.jpg` — alt: `friend, mates, tea, friendship, young, fun, group, together, parents`

**"Rodzaje zajęć" (Types of classes) — same container, follows directly after:**

- **H2:** `Rodzaje zajęć`
- **3 class-type entries, each an image + paragraph (no titles/labels in source markup):**

  1. Image: `./Home - Minds and Muscles_files/pexels-photo-3822122-3822122-scaled-e1770297967609-ripjjr5vfikomgxj2brp3kkafh8qvb8ii1ddcs3k6g.jpg` — alt: `Two women practicing partner yoga pose together on a yoga mat indoors, promoting fitness and mindfulness.`
     > Zajęcia ruchowe inspirowane jogą i pilatesem.
     > Łączą spokojną pracę z ciałem, oddech i wzmacnianie mięśni głębokich, pomagając odzyskać lekkość, stabilność i spokój. Pracujemy w łagodnym tempie, z szacunkiem do możliwości każdego ciała.
  2. Image: `./Home - Minds and Muscles_files/pexels-photo-3992594-3992594-scaled-e1770300208144-ripl69m6v8o9clxse4amtb09nyub10izjnchtvcaug.jpg` — alt: `Young girl practicing balance exercises with a blue yoga ball indoors on a mat.`
     > Ogólnorozwojowe zajęcia ruchowe dla dzieci, oparte na zabawie, ruchu i naturalnej potrzebie eksplorowania świata. Każde spotkanie to połączenie ćwiczeń, gier i wyzwań, które rozwijają sprawność, koordynację i pewność siebie.
  3. Image: `./Home - Minds and Muscles_files/pexels-photo-5714269-5714269-1-scaled-e1770299736882-ripktxyd9fsx4nu8csiq4eypa3l23vloinfbb9m4fc.jpg` — alt: `Two individuals flexing their muscles with purple dumbbells`
     > Ogólnorozwojowe zajęcia ruchowe dla dorosłych, łączące pracę nad zakresem ruchu, stabilnością i siłą funkcjonalną. Ćwiczymy tak, by ciało było sprawne, odporne i gotowe na codzienne wyzwania. Zajęcia mają dynamiczny, ale bezpieczny charakter.

  (These three entries correspond to: adult yoga/pilates class, children's movement class, adult functional-training class, based on copy content — no explicit category label exists in the source to carry over verbatim.)

### 4.6 CTA banner — "Totalna troska" (Elementor section `m497vrk`)

- **Eyebrow (H4):** `Ruch, który daje przestrzeń`
- **H2:** `Totalna troska, \nktóra nie wymaga wyboru.` (line break present in source between "troska," and "która")
- **Button:** "ZAPISZ SIĘ" → `https://forms.gle/GLeR22W6XC5JrNXe9`
- No images in this section.

### 4.7 "Kto prowadzi zajęcia?" — Team (Elementor container `d6e246d`) — HIDDEN / PLACEHOLDER

**This entire section is hidden on all breakpoints** (`elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile`) — it is not visible to any real visitor. Content is generic template placeholder, not real Minds & Muscles copy:

- **H2:** `Kto prowadzi zajęcia?`
- **Intro copy:**
  > Jesteśmy zespołem osób pracujących z ciałem, ruchem i relacjami. Tworzymy Mind & Muscles, bo wierzymy, że dbanie o dzieci i dorosłych może dziać się równolegle
  >
  > Pracujemy uważnie i spokojnie, stawiając na bezpieczeństwo, radość z ruchu i poczucie bycia zaopiekowanym — w każdym wieku.
- **3 placeholder team members**, each with a generic stock template image, a fake name, and 4 dead social icon links (all `https://minds-and-muscles.pl/#`):
  1. Image: `./Home - Minds and Muscles_files/child-care-template-expert-img-1.webp` (alt: `child care template expert img 1`) — Name: **Sarah B. Johnson**
  2. Image: `./Home - Minds and Muscles_files/child-care-template-expert-img-2.webp` (alt: `child care template expert img 2`) — Name: **Alicia Michelle**
  3. Image: `./Home - Minds and Muscles_files/child-care-template-expert-img-3.webp` (alt: `child care template expert img 3`) — Name: **Michael Rich**

  Each has Facebook/Twitter/Instagram/Youtube icon links, all pointing to `https://minds-and-muscles.pl/#` (non-functional placeholders).

**Recommendation:** do not carry this section into the rebuild as-is — it is unfinished template content, currently hidden by design. Flag for the content team to decide whether a real team/instructors section should be built, or omit entirely.

### 4.8 Empty full-width section, 5 empty columns (Elementor `2ypxq7m`)

No widgets/content in any of its 5 columns — likely an unused/abandoned logo strip or partner-bar section.

### 4.9 Empty full-width section, empty columns (Elementor `2p1ngbe`)

Same as above — no widgets/content.

### 4.10 "Strefa wiedzy" — Blog teaser (`#strefa-wiedzy`, Elementor container `dca7d66`)

- **H2:** `Strefa wiedzy`
- **Intro copy:** `O ruchu, regulacji i codziennej trosce — dla dorosłych i dzieci. Rzeczy, które pomagają lepiej rozumieć ciało, emocje i relacje.`
- **3 post cards** (HFE Basic Posts widget), each with image + heading (H3) + "Więcej" link, all linking to the same post URL:
  1. Image: `./Home - Minds and Muscles_files/choice-300x169.jpg` (alt: `Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat`) — Title: `Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat` — links to `https://minds-and-muscles.pl/wybieranie-miedzy-soba-a-dzieckiem/`
  2. Image: `./Home - Minds and Muscles_files/Digital-Detox-300x169.jpg` (alt: `Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem`) — Title: `Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem` — links to `https://minds-and-muscles.pl/wplyw-telefonu-na-relacje-z-dzieckiem/`
  3. Image: `./Home - Minds and Muscles_files/presence-300x169.jpg` (alt: `Obecność w epoce rozproszenia`) — Title: `Obecność w epoce rozproszenia` — links to `https://minds-and-muscles.pl/byc-obecnym-rodzicem/`
- **Button:** "Przejdź do Bloga" → `https://minds-and-muscles.pl/strefa-wiedzy-blog/`

### 4.11 Newsletter signup (Elementor container `c485d23`)

MailPoet subscription form (shortcode widget), background image
`https://minds-and-muscles.pl/wp-content/uploads/2021/01/child-care-template-cta-blob-shape-bg.svg`
(referenced via inline `<style>`, not an `<img>` tag).

- **H2 (large):** `Zapisz się do newslettera`
- **H2 (subheading):** `Bądź na bieżąco z tym, jak wspieramy wspiera ciało i głowę.` (verbatim — contains a grammatical duplication "wspieramy wspiera" in the source; preserved as-is, flag for copy cleanup)
- **H2 (empty, unused third heading slot):** no text content
- **Form fields:** single email input, placeholder/aria-label `Adres email *`, required
- **Submit button label:** `Zaczynamy!`
- **Privacy copy below the form:**
  > Obiecujemy, że nigdy nie będziemy spamować! Zapoznaj się z naszą Polityką prywatności , aby uzyskać więcej informacji.
  ("Polityką prywatności" is a link → `https://minds-and-muscles.pl/polityka-prywatnosci/`)
- **Success message (shown after subscribing, hidden by default):**
  > Sprawdź swoją skrzynkę odbiorczą albo katalog spam i potwierdź swoją subskrypcję.
- Form posts to: `https://minds-and-muscles.pl/wp-admin/admin-post.php?action=mailpoet_subscription_form` (MailPoet plugin endpoint — will need a replacement mechanism, e.g. a new provider/API, in the Astro rebuild)

---

## 5. Buttons / CTAs

All buttons found on the page, in document order:

| Label | href | Location |
|---|---|---|
| Zapisz się | `https://forms.gle/GLeR22W6XC5JrNXe9` | Header (appears twice — desktop + mobile instance) |
| ZGŁOŚ ZAINTERESOWANIE | `https://forms.gle/GLeR22W6XC5JrNXe9` | Hero section |
| Dowiedz się więcej | `https://minds-and-muscles.pl/#` | Hero section (placeholder, no real target) |
| ZAPISZ SIĘ | `https://forms.gle/GLeR22W6XC5JrNXe9` | "Totalna troska" CTA banner |
| Przejdź do Bloga | `https://minds-and-muscles.pl/strefa-wiedzy-blog/` | Strefa wiedzy (blog teaser) section |
| Zaczynamy! | (form submit, no href — posts to MailPoet endpoint) | Newsletter signup form |
| Facebook / Twitter / Instagram / Youtube (icon-only, ×3 sets) | `https://minds-and-muscles.pl/#` | Hidden "Kto prowadzi zajęcia?" section (dead placeholder links) |

All three "external form" CTAs (`Zapisz się`, `ZGŁOŚ ZAINTERESOWANIE`, `ZAPISZ SIĘ`) point to the
same Google Form: `https://forms.gle/GLeR22W6XC5JrNXe9`.

---

## 6. Internal Links (deduplicated, all occurrences on the page)

| href | Link text seen |
|---|---|
| `https://minds-and-muscles.pl/#content` | Przejdź do treści (skip link) |
| `https://minds-and-muscles.pl/` | Home / logo (no text) |
| `https://minds-and-muscles.pl/#o-minds-&-muscles` | O Minds & Muscles |
| `https://minds-and-muscles.pl/#jak-to-dziala` | Jak to działa? |
| `https://minds-and-muscles.pl/#rodzaje-zajec` | Rodzaje zajęć (broken anchor — no matching id on page) |
| `https://minds-and-muscles.pl/#strefa-wiedzy` | Strefa Wiedzy |
| `https://minds-and-muscles.pl/kontakt/` | Kontakt |
| `https://minds-and-muscles.pl/blog/` | Blog |
| `https://minds-and-muscles.pl/polityka-cookies/` | Polityka cookies |
| `https://minds-and-muscles.pl/polityka-prywatnosci/` | Polityka prywatności / Polityką prywatności |
| `https://minds-and-muscles.pl/strefa-wiedzy-blog/` | Strefa Wiedzy / Przejdź do Bloga |
| `https://minds-and-muscles.pl/wybieranie-miedzy-soba-a-dzieckiem/` | Dlaczego wybieranie między sobą a dzieckiem to fałszywy dylemat / Więcej |
| `https://minds-and-muscles.pl/wplyw-telefonu-na-relacje-z-dzieckiem/` | Technoferencja: jak telefon zakłóca relację rodzica z dzieckiem / Więcej |
| `https://minds-and-muscles.pl/byc-obecnym-rodzicem/` | Obecność w epoce rozproszenia / Więcej |
| `https://minds-and-muscles.pl/#` | Dowiedz się więcej / social icon placeholders (dead/no-op link) |

External links (non-internal, for completeness):
- `https://forms.gle/GLeR22W6XC5JrNXe9` — Google Form, used by all "sign up" CTAs
- `https://www.facebook.com/profile.php?id=61588108561753` — footer Facebook icon
- `https://www.instagram.com/mind.s_and_muscle.s` — footer Instagram icon
- `mailto:kontakt@mindsmuscles.pl` — footer email

---

## 7. Structured Data

One JSON-LD `<script type="application/ld+json">` block, `@context: https://schema.org`, using
an `@graph` array with 4 entities:

1. **`WebSite`** (`@id: .../#website`) — name, description, url, `potentialAction` (SearchAction), `publisher` reference
2. **`WebPage`** (`@id: .../#webpage`) — name "Home", `inLanguage: pl-PL`, `datePublished`, `dateModified`, `isPartOf` (WebSite), `publisher` reference
3. **`Organization`** (`@id: .../#organization`) — name "Minds and Muscles", `founder` (Person "admin"), `logo`, `slogan`, `url`
4. **`SearchAction`** (`@id: .../#searchaction`) — `target: https://minds-and-muscles.pl/?s={search_term_string}`, `query-input`

No `Article`, `BreadcrumbList`, `FAQPage`, or other content-specific schema types are present on
this page — only the site-wide WebSite/WebPage/Organization/SearchAction graph (standard
Yoast/RankMath-style boilerplate, not custom structured data for the page content itself).
