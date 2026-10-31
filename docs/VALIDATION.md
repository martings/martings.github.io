# Validation — 31 October 2026

- Dependency-free Node build: passed.
- Five automated tests passed: locale content, local links/assets/anchors, landmarks/metadata/project references, legacy URL migration, conflict/placeholder checks.
- Local HTTP preview returned 200 OK on 127.0.0.1:4322.
- Browser review: English desktop at the in-app browser's default viewport; mobile 390 × 844 in English and Spanish. No horizontal overflow in inspected pages.
- Mobile menu opens; selecting Projects collapses it. EN → ES preserves #projects. Spanish SVG labels are translated.
- Publications inspected at mobile size; full titles, authors and DOI links remain readable.
- The portrait is retained and lazy-loaded. Browser console showed no warnings/errors during reviewed navigation.
- No-JavaScript fallback assessed from generated markup: full content, visible navigation and ordinary locale links are present in the static HTML. A JavaScript-disabled browser session was not separately tested.
- External publication metadata checked against PubMed/publisher records; public repository visibility and READMEs checked through GitHub. No claim of exhaustive external link monitoring.
- Desktop/mobile screenshots are local, ignored artifacts in .preview/.

Main and origin/main remain at the original clone's fbe5f53 commit. At the initial validation checkpoint no publication had been performed; the owner subsequently authorized publication on 31 October 2026.

## Branding revision

Three local alternatives (MGS, Megas/software, Megas/spatial) generated in EN/ES. All five structural tests pass including links in the review pages. Browser review confirmed the new wordmarks, professional copy, translated schematic, navigation and absence of horizontal overflow in inspected layouts. No browser console errors were recorded. No AI image generation was used.

## Megas selected version

Megas/spatial promoted to the main EN/ES pages. Four research/method areas and repository links are present; Bioinformagician/Bioinformago and current DC–UBA teaching are included. IFIByNE is absent from displayed background and teaching copy. All five tests and diff whitespace check pass. Browser review confirmed Megas branding, the four research areas and no horizontal overflow in the inspected desktop layout.

## Bilingual identity and abstract artwork

EN/ES eyebrow labels and shared Single Cell y Spatial subtitle checked in rendered browser content. Hero affiliation line updated in both languages. Abstract SVG replaces the displayed portrait; original photo retained only as a source asset. SVG was visually inspected via PNG export. Build and five tests pass. English and Spanish screenshots saved for this handoff.
