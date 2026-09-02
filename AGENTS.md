# CLAUDE.md — Ateshism.com

## Mission

Build and maintain **ateshism.com** as a fast, accessible Astro site hosted through GitHub and Cloudflare Pages. It is the official reader-facing archive for the **fictional** Ateshi world and the novel *The Ashen Flame* by Alexei Sassani.

The site must serve two jobs:

1. Attract relevant fantasy and alternate-history readers through original, useful editorial content.
2. Let readers explore the world while moving naturally toward the novel and the Ash Archive mailing list.

## Non-negotiable canon hierarchy

When facts conflict, use this order:

1. *The Ashen Flame* Publication Master Pass 111.
2. Explicit later decisions by the author.
3. Compatible, repeated worldbuilding from the Claude archive.
4. Grok material only when separately approved.

Never turn an AI suggestion into canon merely because it is detailed. Never silently reconcile a contradiction. Mark uncertain material `canonStatus: [C4]` and `status: hold`.

Locked terminology:

- **Ateshism** is the religion.
- **Ateshi** is the adjective and the term for a follower.
- The formal name is *Din-e Atezhan*, the Faith of the Flame.
- Persia is Farah's country; Khorasan is a province of Persia.
- The transnational political structure is the Compact.
- The books are the *Book of Fire — the Sayings of Arahita* and the *Book of the Hidden Flame*.
- Rose Mothers are priestly and pastoral authorities; Rose skin is unmarked.
- The Ash Order is an investigative accountability institution; Ash Mothers bear institutional tattoos.

Quarantined terms and material must not be published unless the author explicitly restores them: Atashan as modern Persia, Ognia, Zoriana, Agnistan, Book of the Inner Flame, Kandahar-Urn, Tehran-Urn, Circle-3/Circle-6, Hearth Offering and the Grok-created sexual-training system.

## Fiction transparency

Ateshism is not a real religion. The fiction notice must be visible in page copy where context requires it, in the global footer, on the About page, and in relevant metadata. Immersive design must never falsely present invented history as real-world fact.

## Content contract

- Treat `src/content.config.ts` as the authoritative schema.
- Do not rename frontmatter fields or permanent URLs without an explicit migration and redirects.
- Render only `status: published` entries.
- Exclude `draft`, `review` and `hold` entries from routes, internal search, feeds and XML sitemaps.
- Do not output editorial-only fields such as target keywords or canon status as visible keyword stuffing.
- Do not add a `meta keywords` tag.
- Structured data must be generated from visible page content and must never make claims absent from the page.
- Do not add review, rating, price, availability, ISBN or Offer schema until each value is verified and visibly present.
- Do not add `FAQPage` markup merely because a page contains an FAQ. Keep the questions visible for readers, but there is no expected rich-result benefit for this site.

## SEO rules

- One intent and one canonical URL per page.
- Titles should usually remain within 45–65 characters; descriptions within roughly 140–165 characters. Clarity outranks mechanically hitting a count.
- Put the direct answer in the opening paragraph.
- Use descriptive internal-link anchors, never repeated “click here” links.
- Hub pages link down to every published child; child pages link back to their hub and across to genuinely related entities.
- Do not create many near-identical pages to target keyword variations.
- Do not promise rankings or traffic from schema. Schema describes the page; it does not manufacture authority.
- Reader-discovery posts may include *The Ashen Flame*, but must disclose the author's interest and use a defensible selection methodology.
- S2 and S3 spoilers must not leak into titles, descriptions, Open Graph copy, related cards, image alt text or structured data.
- Search/filter parameters must not create indexable duplicates. Canonicalise to the base page and noindex internal result pages where appropriate.

## Schema rules

- All content pages: `WebPage` plus `BreadcrumbList`.
- Lore/editorial pages: `Article` with Alexei Sassani as the visible author.
- Book page: `Book`; add `Offer` only when commercial details are verified.
- Archive object: `CreativeWork` plus an explanatory page.
- Fictional characters and places may be entities in an article's `about`, but their descriptions must explicitly say they are fictional.
- Every JSON-LD object must use an absolute canonical URL and stable `@id`.

## Images

- Do not publish broken placeholder paths.
- Add width and height to prevent layout shift.
- Alt text describes the image's content and function; it is not a keyword field.
- The visual language is documentary evidence from the relevant alternate period, particularly 1991 and 2010: period-correct photography, material archives, maps and records—not generic fantasy illustration.
- Social images should be at least 1200px wide. Where practical, provide 1:1, 4:3 and 16:9 crops for important article imagery.

## Brand implementation

- `brand/BRAND_SYSTEM.md` is the visual authority.
- `brand/tokens.json` is the machine-readable source; `src/styles/tokens.css` is its CSS implementation.
- Use the supplied SVG mark and lockups. Do not redraw the mark, add effects, or treat it as an in-world sacred emblem.
- Self-host Newsreader, Source Sans 3 and Vazirmatn through the build. Do not load fonts from a third-party CDN in production.
- Keep long-form reading surfaces quiet and high-contrast. Ember is an accent, not a body-text colour.
- The site should feel like a contemporary archive holding evidence from an alternate world—not a parchment fantasy wiki.

## Spoilers

- `S0`: safe world lore.
- `S1`: premise and early-book context.
- `S2`: mid-book discoveries; gated.
- `S3`: ending or 2030 consequences; gated.

For mixed character pages, the default dossier must remain S0/S1. Render S2/S3 material only inside an explicit reveal control. Do not place gated spoilers in the initial HTML if they should not be indexed; load them from a separate noindex source or keep them off the public build until the final spoiler implementation is agreed.

## Writing voice

Write clear literary nonfiction about a fictional world. Be precise, calm and curious. Preserve internal disagreements. Separate doctrine, law, customary practice, regional variation, historical practice, allegations and stereotypes. Avoid promotional gush, lore-dump density, generic AI phrasing and titillation.

Every page should answer:

- What is it?
- Why does it matter in the Ateshi world?
- How did it develop?
- How does it work in the period being described, especially 1991 or 2010?
- Where do Ateshis disagree about it?
- Where should the reader go next?

## Technical rules

- Prefer static output and build-time content collections.
- Preserve `site: 'https://ateshism.com'` and trailing slashes.
- Keep JavaScript optional for ordinary reading and navigation.
- Meet WCAG 2.2 AA for contrast, keyboard access, focus, forms and spoiler controls.
- Use semantic HTML and a single visible H1.
- Run `npm run astro check` and `npm run build` before every merge.
- Cloudflare Pages production settings are `main`, `npm run build`, and `dist`.

## Completion definition for a page

A page is not finished until copy, canon, spoiler state, metadata, internal links, breadcrumbs, schema inputs, image metadata, CTA and build validation are complete. If any material field is unresolved, keep the page out of the published collection.
