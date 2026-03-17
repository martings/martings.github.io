# Redesign Plan — martings.github.io

## 1. Current Repository Assessment

### Overview
The site is a static, plain-HTML personal website for **Martín E. García Solá** — molecular biologist, bioinformatician and data scientist. It is hosted on GitHub Pages with no build step, no static-site generator, and no external dependencies beyond the browser.

### File Inventory

| Path | Purpose | Status |
|------|---------|--------|
| `index.html` | Spanish homepage | Active |
| `bio.html` | Spanish bio / skills | Active |
| `publicaciones.html` | Spanish publications | Active |
| `experiencia.html` | Spanish experience | Active |
| `consultoria.html` | Spanish consulting | **Disabled / placeholder** |
| `en/index_en.html` | English homepage | Active |
| `en/bio_en.html` | English bio / skills | Active |
| `en/publicaciones_en.html` | English publications | Active |
| `en/experience_en.html` | English experience | Active |
| `css/styles.css` | Single stylesheet | Active |
| `js/script.js` | Language-toggle script | **Broken (merge conflict)** |
| `js/scroll.js` | Smooth-scroll helper | Active |
| `img/foto_mia.jpg` | Profile photo | Active |

### Existing Issues
1. **`js/script.js` has unresolved git merge-conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`). The page that loads it (`index.html`, `en/index_en.html`) loads a broken script.
2. **Duplicate bilingual maintenance** — every page exists twice (Spanish root + English `en/` folder). Any content edit must be applied to both copies, which is error-prone.
3. **Broken internal links** — `en/bio_en.html` nav links to `experiencia_en.html` (should be `experience_en.html`); `en/index_en.html` "Explore" section links to `publications_en.html` (file does not exist; correct name is `publicaciones_en.html`).
4. **CSS bug** — `body` is styled with `display: grid` and `flex-direction: column` simultaneously; these properties conflict and produce no useful layout.
5. **`consultoria.html`** contains only placeholder copy and placeholder image paths. It is commented out of all nav menus but still publicly accessible.
6. **`experiencia.html`** references `../css/styles.css` (parent-relative path) but lives in the root; the correct path is `css/styles.css`.
7. **Copyright year is hard-coded as 2023** across all pages.
8. **No SEO metadata** — no `<meta name="description">`, no Open Graph tags, no canonical URLs.
9. **No social / contact links** — LinkedIn, GitHub, ORCID, email are absent from every page.
10. **Skills list is outdated** — lists only HTML/CSS/JavaScript as web skills; does not mention current tooling (e.g., Nextflow, Snakemake, Docker) that a bioinformatics audience would recognise.

---

## 2. Obsolete Structure and Content

### Structure
- **Separate `en/` folder for English pages** — the current approach doubles every file and splits all navigation logic. A single-language-per-file scheme should be replaced by a language-toggle mechanism (or i18n data attributes) in a single set of files, or by consolidating to English-primary with Spanish toggle.
- **`consultoria.html`** — placeholder with no real content; should be removed or hidden until genuinely ready.
- **`js/script.js`** — the language-toggle implementation is broken and was never completed. It should be replaced with the simpler `<a>` link approach already used in the nav, or by a proper i18n solution.

### Content
- **"Bienvenido a mi página" / "Welcome to my page"** — generic headings with no personal branding value; should become a punchy tagline.
- **Copyright 2023** — outdated; should use a dynamic or current year.
- **Skills as plain bullet list** — lacks visual hierarchy; no grouping into categories (languages, frameworks, bioinformatics tools, databases, etc.).
- **Experience section** — "Servicios bioinformaticos" is listed under "Experiencia Profesional" with no dates or client context; reads like a services menu rather than a work history.

---

## 3. Proposed File Structure

The redesign consolidates to a **single set of HTML files** with bilingual content delivered via `data-lang` attributes and a JavaScript i18n switcher, eliminating the parallel `en/` folder. The `consultoria.html` file is removed. A `404.html` is added for graceful error handling.

```
martings.github.io/
├── index.html              # Home (hero + summary)
├── about.html              # About / Bio / Skills  (replaces bio.html)
├── experience.html         # Experience timeline    (replaces experiencia.html)
├── publications.html       # Publications           (replaces publicaciones.html)
├── 404.html                # Custom 404 page
├── css/
│   └── styles.css          # Single stylesheet (refactored)
├── js/
│   ├── i18n.js             # Language switcher (replaces broken script.js)
│   └── scroll.js           # Smooth-scroll (unchanged)
├── img/
│   └── foto_mia.jpg        # Profile photo (unchanged)
└── README_REDESIGN.md      # This document
```

### URL migration map

| Old URL | New URL | Action |
|---------|---------|--------|
| `/` → `index.html` | `/` → `index.html` | No change |
| `/bio.html` | `/about.html` | Redirect (meta-refresh or JS) in old file |
| `/publicaciones.html` | `/publications.html` | Redirect in old file |
| `/experiencia.html` | `/experience.html` | Redirect in old file |
| `/consultoria.html` | *(removed)* | Return 404 / redirect to `/` |
| `/en/index_en.html` | `/` (with `?lang=en` or `#en`) | Redirect from old path |
| `/en/bio_en.html` | `/about.html` | Redirect from old path |
| `/en/experience_en.html` | `/experience.html` | Redirect from old path |
| `/en/publicaciones_en.html` | `/publications.html` | Redirect from old path |

---

## 4. Homepage Layout

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                   │
│  [Name logo/text]   [Nav: Home | About | Experience |    │
│                      Publications]      [ES | EN toggle] │
├──────────────────────────────────────────────────────────┤
│  HERO SECTION                                             │
│                                                           │
│   ┌──────────┐   Martín E. García Solá                   │
│   │  photo   │   Bioinformatician & Data Scientist        │
│   │          │   PhD · Universidad de Buenos Aires        │
│   └──────────┘                                           │
│   [→ View CV / Experience]   [→ Publications]             │
├──────────────────────────────────────────────────────────┤
│  ABOUT SUMMARY (2–3 sentence pitch)                       │
│  Molecular biologist turned bioinformatician ...          │
├──────────────────────────────────────────────────────────┤
│  SERVICES / WHAT I DO  (3 icon cards)                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│  │Multi-omics│  │ML / AI   │  │Teaching  │               │
│  │ analysis  │  │          │  │& Training│               │
│  └──────────┘  └──────────┘  └──────────┘               │
├──────────────────────────────────────────────────────────┤
│  SELECTED PUBLICATIONS (2 latest with links)              │
├──────────────────────────────────────────────────────────┤
│  CONTACT / CONNECT                                        │
│  [LinkedIn]  [GitHub]  [ORCID]  [Email]                  │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                   │
│  © <current year> Martín E. García Solá                  │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Page-by-Page Content Plan

### 5.1 `index.html` — Home

| Section | Content |
|---------|---------|
| Hero heading | `Martín E. García Solá` |
| Hero sub-heading | `Bioinformatician & Data Scientist` (ES: `Bioinformático y Científico de Datos`) |
| Hero body (1–2 sentences) | Pitch from existing `index.html` intro paragraphs — condensed |
| Hero CTAs | "View Experience" → `experience.html`; "Publications" → `publications.html` |
| About summary | 2–3 sentences drawn from `bio.html` body paragraphs |
| Services cards | Multi-omics Analysis · Machine Learning & AI · Teaching & Training |
| Selected publications | Two most recent papers (2022 and 2021) with journal, authors, DOI link |
| Connect links | LinkedIn (placeholder URL), GitHub (`github.com/martings`), ORCID, email |

### 5.2 `about.html` — About / Bio

| Section | Content |
|---------|---------|
| Heading | `About Me` / `Sobre mí` |
| Long-form bio | Existing paragraphs from `bio.html` (both languages) |
| Skills — Languages | R, Python, Bash, SQL, HTML/CSS/JavaScript |
| Skills — Bioinformatics | BioConductor, Tidyverse, Numpy, Pandas, Scikit-learn, PyTorch, TensorFlow, Scikit-image |
| Skills — Workflows & Infra | Jupyter, Git, Power BI, Docker (to be confirmed) |
| Education | PhD in Bioinformatics & Data Science — Universidad de Buenos Aires (date TBD) |

### 5.3 `experience.html` — Experience

Restructured as a chronological timeline with clear date ranges and roles.

| Period | Role / Institution | Type |
|--------|--------------------|------|
| 2020–2022 | NIH-NCI/UM-CFAR Sylvester CCC Argentina Consortium Fellow | Research |
| 2015–2020 | Doctoral Researcher, IFIByNE-UBA-CONICET | Research |
| 2020–2023 | NGS LATAM Professor, Wellcome Genome Campus | Teaching |
| 2022–2023 | Teaching Assistant, FCEN-UBA — Exactas Program | Teaching |
| 2019 | Organiser & Instructor, Intro R Course, IFIByNE-UNSAM | Teaching |
| 2015–2016 | Second Regular Teaching Assistant, FCEN-UBA | Teaching |
| 2013 | Elementary School Teacher (Natural Sciences), Colegio Nuevos Rumbos | Teaching |
| Ongoing | Freelance Bioinformatics & Data Services | Professional |

**Services sub-section** (currently buried in "Experiencia Profesional"):

- Multi-omics: Metabolomics, Proteomics, Transcriptomics, Epigenetics, Genomics, Metagenomics
- SysAdmin / Network-Admin (IFIByNE-UBA-CONICET)

### 5.4 `publications.html` — Publications

| Section | Content |
|---------|---------|
| 2022 | PTHrP induces STAT5 activation… — *Breast Cancer Research* — DOI: 10.1186/s13058-022-01523-1 |
| 2021 (a) | A non-coding RNA network involved in KSHV tumorigenesis — *Frontiers in Oncology* — DOI: 10.3389/fonc.2021.687629 |
| 2021 (b) | An Integrative Single-cell Transcriptomic Atlas… — *J. Mammary Gland Biology & Neoplasia* — DOI: 10.1007/s10911-021-09488-1 |

Fix broken DOI href in Spanish `publicaciones.html`: `https://10.3389/...` should be `https://doi.org/10.3389/...`; same for the JMGBN paper.

### 5.5 `404.html` — Not Found

- Friendly "Page not found" message in English and Spanish.
- Link back to `index.html`.

---

## 6. Migration Strategy (Minimising Breakage)

The strategy preserves all existing URLs via thin redirect stubs and merges both language versions into unified bilingual pages.

### Phase 1 — Bug-fix pass (no URL changes, no visual changes)
1. Fix merge-conflict markers in `js/script.js` (or delete file and replace `<script>` reference with the working `i18n.js`).
2. Fix CSS bug: change `body { display: grid; flex-direction: column; }` to `body { display: flex; flex-direction: column; }`.
3. Fix broken nav link in `en/bio_en.html`: `experiencia_en.html` → `experience_en.html`.
4. Fix broken "Explore" link in `en/index_en.html`: `publications_en.html` → `publicaciones_en.html`.
5. Fix `experiencia.html` CSS path: `../css/styles.css` → `css/styles.css`.
6. Fix broken DOI links in `publicaciones.html`.

### Phase 2 — New files (additive, no deletions)
1. Add `css/styles.css` refactored version (mobile-first, grid layout, language-switcher styles).
2. Add `js/i18n.js` — reads `data-lang-es` / `data-lang-en` attributes and switches content on click.
3. Create `about.html`, `experience.html`, `publications.html`, `index.html` (redesigned) with bilingual `data-lang` attributes.
4. Create `404.html`.

### Phase 3 — Redirect stubs (preserve old URLs)
For each old Spanish page and all English `en/` pages, replace file content with a lightweight redirect:

```html
<!-- e.g. bio.html -->
<meta http-equiv="refresh" content="0; url=about.html">
<script>window.location.replace('about.html');</script>
<a href="about.html">Redirecting…</a>
```

English paths (`/en/bio_en.html`) redirect to the new unified page with `?lang=en` query param so the i18n switcher auto-activates English on arrival.

### Phase 4 — Cleanup (optional, later)
- Remove `consultoria.html` (redirect to `index.html`).
- Archive original `en/` folder files (they now only contain redirect stubs).
- Update copyright year to use `<span id="year"></span>` populated by JavaScript.

### Risk register

| Risk | Mitigation |
|------|-----------|
| Indexed Spanish URLs break | Phase 3 redirects keep them alive |
| Indexed English `/en/` URLs break | Phase 3 redirects via `en/` stubs |
| CSS refactor breaks existing visual | Refactored styles.css is additive and tested in same browser |
| Language switcher not working without JS | Fall back to static text; link still navigates correctly |
| Profile photo aspect ratio changes | Keep `img/foto_mia.jpg` at same filename; CSS `object-fit: cover` handles sizing |
