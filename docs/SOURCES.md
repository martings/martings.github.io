# Editorial sources and verification

Checked 31 October 2026. Public sources only. No linked private repository content was used.

## Professional facts

- Name and ZS affiliation: https://github.com/martings and the 2026 publication below.
- Lead Bioinformatician title and current UBA teaching: explicitly supplied by the owner for this redesign. No start dates or formal teaching rank inferred.
- PhD UBA, research/teaching history: pre-redesign public bio/experience pages in main fbe5f53 and owner brief. Degree shown simply as PhD UBA, without inventing a formal specialization.
- Public professional email and joint NNclinSSOAP maintenance: https://github.com/NovoNordisk-OpenSource/nnclinssoap#contact
- ORCID: https://orcid.org/0000-0002-0229-8870 (linked from the 2021 atlas record). No LinkedIn address inferred.

## Public repositories

GitHub metadata confirmed public visibility before inclusion; README contents informed conservative descriptions.

- https://github.com/martings/scPolASeq — APA pipeline. No benchmark or biological discoveries reproduced on this site.
- https://github.com/martings/scPolASeq_downstream — downstream package; technical agreement does not establish biological validity.
- https://github.com/martings/scAPAview — visualization toolkit.
- https://github.com/martings/scpolaseq_utrnet — experimental regulatory graphs; predicted interactions are explicitly distinguished from validated mechanisms. No gene-specific unpublished results copied.
- https://github.com/NovoNordisk-OpenSource/nnclinssoap — original collaborative repository, credited to Novo Nordisk and ZS, connected to the 2026 paper.
- https://github.com/martings/JOMG-Garcia_Sola_et_al — 2021 atlas code, credited to the full research team.
- https://github.com/collaborativebioinformatics/SVantigen — original collaborative repository. The README lists Martín among nine contributors. Site does not claim sole authorship or completed neoantigen prediction.
- https://github.com/martings/Topicos_Bioinfo — Spanish educational resources, presented in Teaching.

## Publication metadata

Titles, years, complete author lists, journal and DOI verified against the following records. Full author lists preserve collaboration credit. Equal-contribution markers are omitted rather than inferred.

1. 2026 — GxP-Ready Single-Cell RNA-seq and Spatial Transcriptomics End-to-End Pipeline for Clinical Research. Computational and Structural Biotechnology Journal 35(1), 0164. https://doi.org/10.34133/csbj.0164 · https://pubmed.ncbi.nlm.nih.gov/42454105/
2. 2022 — PTHrP induces STAT5 activation, secretory differentiation and accelerates mammary tumor development. Breast Cancer Research 24, 30. https://doi.org/10.1186/s13058-022-01523-1 · https://pubmed.ncbi.nlm.nih.gov/35440032/ . Restored Kata Boras-Granic, missing from the old brief.
3. 2021 — An Integrative Single-cell Transcriptomic Atlas of the Post-natal Mouse Mammary Gland Allows Discovery of New Developmental Trajectories in the Luminal Compartment. Journal of Mammary Gland Biology and Neoplasia 26, 29–42. https://doi.org/10.1007/s10911-021-09488-1 · https://pubmed.ncbi.nlm.nih.gov/33913090/
4. 2021 — A Non-Coding RNA Network Involved in KSHV Tumorigenesis. Frontiers in Oncology 11, 687629. https://doi.org/10.3389/fonc.2021.687629 · https://pubmed.ncbi.nlm.nih.gov/34222014/
5. 2020 — Dengue virus targets RBM10 deregulating host cell splicing and innate immune response. Nucleic Acids Research 48(12), 6824–6838. https://doi.org/10.1093/nar/gkaa340 · https://pubmed.ncbi.nlm.nih.gov/32432721/

## Assets and design

Original img/foto_mia.jpg is restored in About at the owner’s request. The abstract assets/megas-field.svg and PNG remain separate artwork; the PNG is used for social previews. The inline single-cell/spatial SVG and favicon are original code-native illustrations, not scientific data. System fonts require no third-party requests. No paper figures, unpublished plots or institutional logos were reused.

## Remaining owner review

Verify preferred public contact address and exact job-title wording before eventual publication; both are already supported by the brief/public sources. Add the exact LinkedIn URL if wanted. No placeholder links are visible on the site. The owner authorized publication of the approved website on 31 October 2026.

Megas update: the owner supplied the preferred Bioinformagician/Bioinformago identity, deep-learning focus and current DC–UBA teaching affiliation. The displayed background now follows that wording and omits the earlier research-institute affiliation.

Selected hero artwork: the owner supplied an externally generated raster reference and selected color adaptation C. Conventional color, contrast and paper-background adjustments were made without AI regeneration. It is presented as a conceptual illustration, not experimental data. Original source remains local; only optimized approved derivatives are published. The personal portrait remains in About.

## Public repository refresh — 27 November 2026

Repository visibility was checked through the GitHub connector before reading and inclusion. Descriptions use public default-branch code, documentation and merged commits only. Internal filesystem links appearing in upstream reports were not copied into this portfolio. The existing publication list is unchanged.

### UTRNNet: implemented deep learning

- Public source snapshot: [UTRNNet at 9eb285b](https://github.com/martings/UTRNNet/tree/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7). The [README](https://github.com/martings/UTRNNet/blob/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7/README.md) identifies it as a separate extension of scpolaseq_utrnet, with preserved upstream history.
- [Implemented encoder](https://github.com/martings/UTRNNet/blob/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7/src/utrnnet/models/hetero_gnn.py): PyTorch Geometric TransformerConv-based heterogeneous message passing, node-type projections and reconstruction decoders. The perturbation-conditioned head in this module is explicitly a scaffold; the site does not describe it as a validated perturbation-response model.
- [Architecture and data schema](https://github.com/martings/UTRNNet/blob/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7/docs/architecture/CELL_REGULATORY_STATE_V0_1.md): typed nodes and relations; explicit missingness, evidence categories and anti-leakage handling.
- [M1–M2 experiment report](https://github.com/martings/UTRNNet/blob/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7/docs/experiments/M1_M2_EXPERIMENT_REPORT_AND_BACKLOG.md): masked-feature reconstruction, held-out-gene split, non-graph baselines, randomized-edge controls and ablations on PBMC1k. These are exploratory reconstruction experiments, not evidence of causal regulation or measured binding. No headline performance numbers or general superiority claims were added.
- [Tahoe pilot report](https://github.com/martings/UTRNNet/blob/9eb285b5ef0ab6b75cc13ddbccdcb326a50f5df7/docs/experiments/TAHOE_PILOT_BENCHMARK.md): bounded expression-change pilot with sample-isolated evaluation. Tahoe does not supply APA measurements or a continuous time course; the site states the APA limitation and makes no causal, clinical or broad generalization claim.

### RNA/APA workflow updates

- [scpolaseq_utrnet at 0028b73](https://github.com/martings/scpolaseq_utrnet/tree/0028b7394e045e9e820f7b26596d594da3026115): versioned graph exports and a separate regulatory-signature format. The [README](https://github.com/martings/scpolaseq_utrnet/blob/0028b7394e045e9e820f7b26596d594da3026115/README.md) distinguishes observed counts, annotation-derived structure and candidate interactions. This remains the graph-construction project, separate from the UTRNNet neural extension.
- [scPolASeq modularization at 8766bd5](https://github.com/martings/scPolASeq/commit/8766bd53bfba69bfc7ca34d59f2f9e9aa8ae4a2b): Sierra CountPeaks module, staged SCAPTURE and nf-test suites. [Module metadata](https://github.com/martings/scPolASeq/blob/8766bd53bfba69bfc7ca34d59f2f9e9aa8ae4a2b/modules/nf-core/sierra/countpeaks/meta.yml) supports the description. The website says conventions, not acceptance into the official nf-core distribution. Sierra and SCAPTURE retain their original tool identities; no sole authorship of those tools is implied.
- scPolASeq_downstream and scAPAview public READMEs remain consistent with their existing method descriptions. The original NovoNordisk-OpenSource/nnclinssoap repository is retained and credited; the personal fork is not substituted. SVantigen's README still marks neoantigen prediction as future work, so that status is preserved.

### Teaching and selection

- [ML_Practica_y_Herramientas README](https://github.com/martings/ML_Practica_y_Herramientas/blob/main/README.md), blob f5c790d01d0e747cb66de94a33a3cc0a52bbd765, describes Python machine-learning notebooks with standard datasets and Colab use. Added as educational resources without assigning a course, institutional role or deep-learning claim.
- Public legacy imaging code and GPU experiments were inspected or discovered but not promoted as new deep-learning work. Forks of Sierra, SCAPTURE, nnclinssoap and nf-modules were not presented as independently authored projects. No private repositories or unpublished local analyses were used.
