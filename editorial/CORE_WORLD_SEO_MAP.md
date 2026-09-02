# Core, Society, History, World and People SEO Map

This map completes query ownership for the 43-page launch. Fictional entity pages establish branded authority; the homepage and book pages own commercial navigation; hubs prevent flat, undifferentiated architecture.

## Core and commercial pages

| URL | Query ownership | Search role | Must not duplicate |
|---|---|---|---|
| `/` | Ateshism; The Ashen Flame | Brand home and combined world/book gateway | Full religion definition or long book synopsis |
| `/start/` | Ateshi world; Ateshism guide | Spoiler-safe orientation and reading paths | Homepage pitch or specialist detail |
| `/books/` | Ateshi world books; Alexei Sassani books | Series shelf and future-proof book hub | Full copy from the novel page |
| `/books/the-ashen-flame/` | The Ashen Flame Alexei Sassani | Definitive commercial book entity | Chapter extract or encyclopedic religion overview |
| `/books/the-ashen-flame/extract/` | The Ashen Flame extract; read The Ashen Flame | Official sample and reading conversion | Full synopsis or retail information |
| `/glossary/` | Ateshi glossary; The Ashen Flame glossary | Concise term lookup and internal-link bridge | Long article explanations |

## Society pages

| URL | Query ownership | Search role | Must not duplicate |
|---|---|---|---|
| `/society/` | Ateshi society; Ateshi culture | Social hub | Full law of one household form |
| `/society/family/` | Ateshi family life | Household, children, property and emotional care | Complete marriage-form comparison |
| `/society/marriage/` | Ateshi marriage; Temporary Marriage Ateshism | Legal forms, consent and administration | Ritual ceremony or Sister-Bond history in full |
| `/society/sister-bonds/` | Ateshi Sister-Bonds | Definitive entity and early Farah-family context | General same-sex relationship article or family overview |

## History and world pages

| URL | Query ownership | Search role | Must not duplicate |
|---|---|---|---|
| `/history/` | Ateshi history; history of Ateshism | Historical overview and moral frame | Complete chronology |
| `/history/timeline/` | Ateshi history timeline | Fixed dates, approximate eras and disputed sequence | Long thematic essays |
| `/history/1991/` | Ateshi world in 1991 | Period snapshot and Farah's childhood context | 2010 investigation overview |
| `/world/` | Ateshi world | Geographic hub | Full Compact mechanics |
| `/world/map/` | map of the Ateshi world | Accessible canonical political map | Historical conquest map |
| `/world/compact/` | Ateshi Compact | Membership, movement, standards and tensions | Ateshism or empire as a whole |
| `/world/persia/` | Persia in The Ashen Flame | Country, government, cities and regional context | Separate Tehran or Khorasan detail pages |

## People and archive pages

| URL | Query ownership | Search role | Must not duplicate |
|---|---|---|---|
| `/people/` | The Ashen Flame characters | Character hub and spoiler policy | Full biographies |
| `/people/farah-kianzad/` | Farah Kianzad | Protagonist dossier through S1 | Investigation results |
| `/people/anousheh/` | Mother Anousheh | Public career, reputation and inquiry premise | S2/S3 evidence or verdict |
| `/archive/` | Ash Archive Ateshi world | Documentary collection hub and newsletter promise | Individual empty archive categories |

## Structured-data boundaries

- Homepage and hubs use `CollectionPage` alongside site-wide `WebPage` and breadcrumb data.
- The novel page uses `Book`; no `Offer`, price, rating, availability or ISBN until verified and visible.
- The extract describes the same `Book` and must not pretend to be a separate publication.
- Character dossiers use `Article` with fictional `Person` entities in `about`.
- Persia uses an `Article` about a fictional `Place`; the page must not imply a real-world geopolitical claim.
- The Archive uses `CollectionPage`; later objects use `CreativeWork` only when their visible provenance is complete.
- No `FAQPage` schema is added to launch pages.

## Canonical and spoiler rules

1. `/history/1991/` owns the childhood period; the principal Anousheh investigation begins in 2010.
2. Character metadata stops at S1. S2 and S3 facts must not enter initial HTML, JSON-LD, cards, sitemaps or image alt text.
3. The map route owns current political geography. Historical map layers require separate explanatory content.
4. Filter, search, spoiler and map-layer parameters do not create indexable duplicate URLs.
5. Every fictional place and religion page contains an early fiction notice.

## Conversion and measurement

- Track homepage-to-book, extract-to-book and lore-to-book assisted journeys.
- Track branded impressions separately for Ateshism, The Ashen Flame, Farah Kianzad and Mother Anousheh.
- Monitor whether Google chooses the intended canonical for `/`, `/start/` and `/faith/what-is-ateshism/` rather than treating them as duplicates.
- Measure map and glossary links as navigation assists, not last-click conversions alone.
- Add retailer-event tracking only when verified purchase links are published.

