# Redesign — implementation decision (31 October 2026)

This document supersedes the earlier services-oriented plan. The owner’s current brief takes precedence. Starting point: main fbe5f53; clean new local clone. Work branch: redesign/scientific-portfolio-2026.

## Architecture decision

Astro supports static output and GitHub Pages (https://docs.astro.build/en/guides/deploy/github/). It would provide components, content collections and route-based i18n, but introduces a package dependency and a build/deployment integration for this small site.

Chosen: retain HTML/CSS, with a small dependency-free Node generator sharing one template and structured EN/ES content. Generated HTML is tracked at the root, preserving the existing Pages serving model. This removes manual page duplication while avoiding client-side translation. Astro can be reconsidered for a blog, many project detail pages or more complex content collections.

## Information architecture

Home → Research → Software & Projects → Publications → Teaching → About & Contact. Each section has a stable anchor in both / and /es/. English is the default; Spanish is complete and independently indexable.

The design is editorial: warm paper, green/ink palette, system typography and serif headings; one conceptual single-cell/spatial schematic and the retained portrait. No invented metrics, testimonials, results or service offers.

## Migration

Existing Spanish URLs redirect to the relevant Spanish section. Existing English URLs redirect to the English section. Known misspellings experiencia_en.html and publications_en.html are also covered. Redirects use HTML refresh with a visible fallback link; GitHub Pages does not provide configurable server-side 301 redirects for these files.

The conflicted language switcher is retired. New locale links work without JavaScript. The optional script only manages the mobile menu and preserves section fragments on language changes.

## Verification and maintenance

Run the build and meaningful structural tests from README.md. Browser QA checks both languages, desktop/mobile layouts, no-JS behavior, navigation and console errors. SEO includes localized descriptions, canonical and reciprocal language alternates, Person JSON-LD, Open Graph, sitemap and a bilingual 404. Publication to main was subsequently authorized by the owner on 31 October 2026.
