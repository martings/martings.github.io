# Content Brief — martings.github.io

## Purpose of This Document

This brief defines the **target audience**, **tone of voice**, **key messages**, and **page-level copy direction** for the redesigned personal website. It is the companion to `README_REDESIGN.md` and should be consulted before writing or editing any copy.

---

## 1. Audience

### Primary Audience
**Potential clients and collaborators in academia, biotech startups, and pharma/life-sciences industry** who need bioinformatics or data-science services.

- Academic principal investigators (PIs) looking for a bioinformatics contractor to analyse multi-omics data.
- Startup founders / CTOs scoping out data-science or bioinformatics support.
- Hiring managers at biotech/pharma companies evaluating freelance or consulting candidates.

### Secondary Audience
**Academic peers and conference contacts** — researchers who have encountered Martín at Wellcome Genome Campus courses, NIH consortium meetings, or UBA events, and want to verify credentials or find publications.

### Tertiary Audience
**Students** from the NGS LATAM / FCEN-UBA courses looking for course materials, contact info, or career references.

---

## 2. Tone of Voice

| Quality | Guidance |
|---------|----------|
| **Authoritative but approachable** | Speak from expertise without jargon overload. Use first person ("I built…", "I analyse…"). |
| **Precise** | Avoid vague claims ("passionate about data"). Prefer specifics ("I design multi-omics pipelines in R and Python"). |
| **International** | The site is bilingual (Spanish / English). Both versions should read naturally — avoid literal translations. English is the primary language for professional discovery; Spanish is for local/regional academic contacts. |
| **Concise** | Each page's above-the-fold content should be scannable in under 10 seconds. Longer content lives below the fold. |

---

## 3. Key Messages

1. **Interdisciplinary expertise** — Martín bridges molecular biology lab knowledge with computational data analysis. He understands both the biology and the code.
2. **PhD-level rigour** — Research published in peer-reviewed journals (Breast Cancer Research, Frontiers in Oncology, JMGBN) establishes scientific credibility.
3. **Teaching track record** — Wellcome Genome Campus, FCEN-UBA, and UNSAM courses demonstrate communication skill and leadership.
4. **Service-ready** — Offers concrete deliverables: multi-omics analysis, ML/AI pipelines, bioinformatics consulting for industry and academia.

---

## 4. Page-Level Copy Direction

### 4.1 `index.html` — Home

**Goal:** Make a strong first impression; direct the right visitor to the right page in one click.

#### Hero block
```
Heading:    Martín E. García Solá
Subheading: Bioinformatician & Data Scientist
            PhD · Universidad de Buenos Aires
Body:       I turn complex biological data into actionable insights —
            from single-cell transcriptomics to machine-learning models.
CTAs:       [View Experience]    [Publications]
```

*(Spanish)*
```
Heading:    Martín E. García Solá
Subheading: Bioinformático y Científico de Datos
            Doctor — Universidad de Buenos Aires
Body:       Convierto datos biológicos complejos en conclusiones accionables,
            desde transcriptómica de célula única hasta modelos de aprendizaje automático.
CTAs:       [Ver Experiencia]    [Publicaciones]
```

#### About summary
```
EN: Molecular biologist by training, bioinformatician and data scientist by practice.
    I have worked at the intersection of high-throughput sequencing, single-cell
    technologies, and machine learning — in research institutes, NIH-funded consortia,
    and industry engagements.
ES: Biólogo molecular de formación, bioinformático y científico de datos en la práctica.
    He trabajado en la intersección de la secuenciación masiva, las tecnologías de
    célula única y el aprendizaje automático — en institutos de investigación, consorcios
    financiados por los NIH y proyectos industriales.
```

#### Services cards (icon + heading + one-line description)
| Card | EN | ES |
|------|----|----|
| Multi-omics | **Multi-omics Analysis** / Genomics, transcriptomics, proteomics, metabolomics pipelines | **Análisis Multi-ómica** / Pipelines de genómica, transcriptómica, proteómica, metabolómica |
| ML / AI | **Machine Learning & AI** / Predictive models and deep-learning tools for biological data | **Aprendizaje Automático e IA** / Modelos predictivos y herramientas de aprendizaje profundo para datos biológicos |
| Teaching | **Teaching & Training** / Workshops and courses on NGS bioinformatics and R/Python | **Docencia y Formación** / Talleres y cursos de bioinformática NGS y R/Python |

#### Selected publications (homepage teaser only — 2 entries max)
- 2022 — PTHrP induces STAT5 activation… — *Breast Cancer Research*
- 2021 — A non-coding RNA network involved in KSHV tumorigenesis — *Frontiers in Oncology*

#### Connect / contact
Icons with links (to be supplied by site owner):
- LinkedIn profile URL
- GitHub: `https://github.com/martings`
- ORCID (URL to be supplied)
- Email (address to be supplied or use a contact form)

---

### 4.2 `about.html` — About / Bio

**Goal:** Give depth to the homepage summary; validate skills for a technical audience.

#### Long-form bio
Expand the existing paragraphs from `bio.html` / `bio_en.html`. Suggested English text:

> "I am a molecular biologist who transitioned to bioinformatics and data science, driven by the explosion of information generated by high-throughput sequencing, single-cell resolution technologies, and computer vision. My research has focused on understanding the regulatory networks and transcriptomic landscapes underlying cancer and developmental biology.
>
> I hold a PhD from the Universidad de Buenos Aires, where I carried out research at IFIByNE-UBA-CONICET under Drs. Omar Coso and Edith Kordon, and subsequently as a NIH-NCI/UM-CFAR fellow at the Sylvester Comprehensive Cancer Center under Drs. Enrique Mesri and Omar A. Coso.
>
> Beyond research, I am committed to science education. I have taught NGS bioinformatics at the Wellcome Genome Campus Advanced Courses, at the Pontifical Catholic University of Chile, and at FCEN-UBA as part of the Exactas program."

*(Equivalent Spanish version to be supplied; basis is the existing `bio.html` paragraphs.)*

#### Skills section — grouped categories

**Programming Languages**
- R (Tidyverse: dplyr, tidyr, ggplot2, stringr; Shiny; BioConductor)
- Python (NumPy, Pandas, Scikit-learn, Scikit-image, PyTorch, TensorFlow)
- Bash / Shell scripting
- SQL
- HTML · CSS · JavaScript

**Bioinformatics & Data Tools**
- Jupyter Notebook / JupyterLab
- Power BI
- Git / GitHub
- *[Add: Nextflow, Snakemake, Docker, Singularity if applicable]*

**Areas of Expertise**
- Bulk RNA-seq and scRNA-seq analysis
- Multi-omics integration
- Machine learning for biological data
- Computer vision for microscopy images
- KSHV / viral oncogenesis data analysis

---

### 4.3 `experience.html` — Experience

**Goal:** Demonstrate career trajectory and specific contributions; make it easy for a recruiter or collaborator to assess fit in under one minute.

**Layout note:** Use a vertical timeline with clear date badges. Group into three labelled sections: **Research**, **Teaching**, and **Services**.

#### Research
- **Sep 2020 – Aug 2022** — NIH-NCI/UM-CFAR Sylvester CCC Argentina Consortium Fellow  
  *University of Miami / IFIByNE-UBA-CONICET*  
  Supervisors: Dr. Enrique Mesri & Dr. Omar A. Coso  
  Focus: Virally induced AIDS-related malignancies; non-coding RNA networks in KSHV tumorigenesis.

- **Apr 2015 – Sep 2020** — Doctoral Researcher  
  *IFIByNE-UBA-CONICET, Buenos Aires*  
  Supervisors: Dr. Omar Coso & Dr. Edith Kordon  
  Focus: Single-cell transcriptomics of the mammary gland; epigenetics; bioinformatics pipeline development.

#### Teaching
- **2020 / 2021 / 2022 / 2023** — Professor, NGS LATAM Team  
  *Wellcome Genome Campus Advanced Courses*  
  *Pontifical Catholic University of Chile, Santiago*  
  Next Generation Sequencing Bioinformatics course for the Latin American region.

- **2022 / 2023** — Teaching Assistant — Exactas Program  
  *Facultad de Ciencias Exactas y Naturales, UBA*

- **2019** — Organiser & Instructor — Introductory R Course for Biological Sciences  
  *IFIByNE-UBA-CONICET & UNSAM*

- **Mar 2015 – Mar 2016** — Second Regular Teaching Assistant (by competition)  
  *Department of Physiology and Molecular Biology, FCEN-UBA*

- **Apr 2013 – Dec 2013** — Elementary School Teacher (Natural Sciences, Second Cycle EGB)  
  *Colegio Nuevos Rumbos A-931*

#### Services
- **Bioinformatics Consulting** (ongoing) — Multi-omics data analysis for industry, startups, and academia.  
  Domains: Metabolomics · Proteomics · Transcriptomics · Epigenetics · Genomics · Metagenomics.

- **Network & Systems Administration** — SysAdmin and Network-Admin for IFIByNE-UBA-CONICET.

---

### 4.4 `publications.html` — Publications

**Goal:** Provide a clean, scannable list of peer-reviewed work that an academic or industry reviewer can verify quickly.

**Layout note:** Reverse-chronological by year. Each entry: title (linked to DOI), author list, journal name, year.

#### 2022
- **"PTHrP induces STAT5 activation, secretory differentiation and accelerates mammary tumor development."**  
  Diego Y Grinman, Farzin M Takyar, Pamela Dann, Julie R Hens, Christina Marmol, Jongwon Lee, Jungmin Choi, Lewis A Chodosh, **Martín E. García Solá**, John J Wysolmerski.  
  *Breast Cancer Research* · [doi:10.1186/s13058-022-01523-1](https://doi.org/10.1186/s13058-022-01523-1)

#### 2021
- **"A non-coding RNA network involved in KSHV tumorigenesis"**  
  Julián Naipauer\*, **Martín E. García Solá**\*, Daria Salyakina, Santas Rosario, Sion Williams, Omar Coso, Martín C. Abba, Enrique A. Mesri, Ezequiel Lacunza. (\*Equal contribution)  
  *Frontiers in Oncology* · [doi:10.3389/fonc.2021.687629](https://doi.org/10.3389/fonc.2021.687629)

- **"An Integrative Single-cell Transcriptomic Atlas of the Post-natal Mouse Mammary Gland Allows Discovery of New Developmental Trajectories in the Luminal Compartment"**  
  **Martín E. García Solá**, Micaela Stedile, Inés Beckerman, Edith C. Kordon.  
  *Journal of Mammary Gland Biology and Neoplasia* · [doi:10.1007/s10911-021-09488-1](https://doi.org/10.1007/s10911-021-09488-1)

**Note for site owner:** If additional publications exist (e.g., preprints, book chapters, conference papers), add them in the same format grouped by year. ORCID link on the page will auto-aggregate future publications.

---

### 4.5 `404.html` — Not Found

```
EN:  Oops — page not found.
     The page you are looking for may have moved.
     [← Go to Home]

ES:  Página no encontrada.
     Es posible que la página que buscás haya sido movida.
     [← Ir al inicio]
```

---

## 5. SEO and Metadata

Each page should include:

```html
<meta name="description" content="…">
<meta property="og:title" content="…">
<meta property="og:description" content="…">
<meta property="og:image" content="…/img/foto_mia.jpg">
<meta property="og:url" content="https://martings.github.io/…">
<link rel="canonical" href="https://martings.github.io/…">
```

Suggested description per page:

| Page | EN description |
|------|---------------|
| `index.html` | "Martín E. García Solá — bioinformatician and data scientist. PhD from Universidad de Buenos Aires. Multi-omics analysis, ML/AI, and NGS teaching." |
| `about.html` | "About Martín E. García Solá — molecular biologist turned bioinformatician. Skills in R, Python, scRNA-seq, multi-omics, and machine learning." |
| `experience.html` | "Professional and research experience of Martín E. García Solá — NIH fellow, UBA researcher, Wellcome Genome Campus instructor." |
| `publications.html` | "Peer-reviewed publications by Martín E. García Solá — Breast Cancer Research, Frontiers in Oncology, JMGBN." |

---

## 6. Assets Needed

| Asset | Status | Action |
|-------|--------|--------|
| Profile photo (`img/foto_mia.jpg`) | ✅ Exists | Ensure ≥ 400×400 px for OG image use |
| LinkedIn URL | ❌ Missing | Site owner to supply |
| ORCID URL | ❌ Missing | Site owner to supply |
| Contact email | ❌ Missing | Site owner to supply (or add contact form) |
| Favicon | ❌ Missing | Create 32×32 px `.ico` or SVG |
| OG/social image (1200×630 px) | ❌ Missing | Can reuse profile photo with text overlay |
