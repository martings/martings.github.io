# Martín E. García Solá — scientific portfolio

English-primary portfolio with a complete Spanish edition. Static HTML, CSS and a small progressive-enhancement script. GitHub Pages compatible; no runtime dependencies, external fonts, analytics or API keys.

## Local development

Use Node.js 22 or newer. No installation step is needed.

```sh
npm run build
npm test
npm run dev
```

Open http://127.0.0.1:4321/ (English) or http://127.0.0.1:4321/es/ (Spanish). Stop the server with Ctrl+C. Directly opening index.html also works for the core content.

## Editing

- content/site.json: EN/ES editorial copy, public project URLs and verified publication metadata.
- scripts/build.mjs: shared semantic template and URL migration map. Run build after changing content/templates.
- css/styles.css: responsive design, focus states, reduced motion and print styles.
- js/site.js: optional mobile navigation and section-preserving language switch.
- assets/megas-field.svg: original abstract composition, with PNG export for social sharing. The old portrait is retained in img/ but is no longer displayed.
- index.html and es/index.html: generated, tracked static output. Do not edit them directly.
- docs/SOURCES.md: editorial sources and verification limits.

All six sections are available as anchors in both languages. Publication titles and author names retain the published spelling. Language selection is an ordinary link, with no JavaScript dependency. The SVG is a conceptual illustration, not a data visualization.

## Checks

Build, then run the tests: translation shape, local links/assets/fragments, generated metadata, public project links and legacy URL redirects. Browser review should cover desktop, 390px mobile, both languages, menu keyboard behavior, language switching and JavaScript-disabled content. External services may rate-limit automated link checks; sources are recorded separately.

## GitHub Pages and review

The output lives at the repository root with .nojekyll, so the existing branch-based Pages configuration can continue to serve it without a new framework or deployment workflow. No deployment configuration or remote repository settings were changed. Before publication, review the generated diff and confirm the Pages source.

The redesign was developed on redesign/scientific-portfolio-2026, based on main at fbe5f53. Publication to main was authorized by the owner on 31 October 2026. Pages serves the committed root output at https://martings.github.io/ and https://martings.github.io/es/.

## Branding review

Generate the three local design alternatives with `node scripts/build.mjs --review`, then run the development server and open `/review/`. Megas/spatial is the selected working version; the other identities remain local comparison alternatives. Each has full English and Spanish versions. Review output is ignored by Git and is not part of the tracked website. Identity settings are maintained in content/branding.json.

All identity motifs and illustrations use CSS/SVG authored in code. No AI image-generation tool or generated image asset was used.
