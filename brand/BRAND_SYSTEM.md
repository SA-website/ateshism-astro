# Ateshism.com Brand System

**Version:** 1.0  
**Brand:** Ateshism.com  
**Book:** *The Ashen Flame*  
**Author:** Alexei Sassani

## 1. Brand idea

**A living archive of fire, memory and accountability.**

Ateshism.com should feel like a modern editorial archive built around records from an alternate world, particularly Farah's 1991 childhood and the 2010 investigation. It is not a medieval fantasy wiki, a real religious institution or a generic author template.

Three qualities guide every design decision:

- **Luminous:** fire appears as knowledge and moral attention, not magical spectacle.
- **Archival:** documentary photography, records, maps, captions and evidence create credibility.
- **Human:** warmth, bodies, disagreement and institutional consequence keep the world from becoming sterile lore.

## 2. Brand architecture

- **Ateshism.com** — the universe-level site.
- **The Ash Archive** — the archival collection and newsletter identity.
- ***The Ashen Flame*** — the novel and principal commercial entry point.
- **Alexei Sassani** — the visible author identity.

The exact public descriptor is:

> **Explore the fictional faith, history and societies of the Ateshi world.**

Use **fictional** visibly. Immersion must never imply that Ateshism is a real-world religion.

## 3. Logo concept

The mark is an **open inner flame held inside a larger flame**. The outer form suggests continuity and shared tradition; the negative centre suggests a doorway, inquiry and the space left for refusal. A small brass ember grounds the symbol in human-scale practice.

The logo is an out-of-world publishing mark for Ateshism.com. It is **not automatically an in-world temple emblem** and should not appear on fictional artefacts unless the author separately establishes it as canon.

### Supplied assets

- `public/brand/ateshism-mark.svg` — stand-alone symbol on a transparent background.
- `public/brand/ateshism-lockup-dark.svg` — horizontal lockup for pale backgrounds.
- `public/brand/ateshism-lockup-light.svg` — horizontal lockup for dark backgrounds.
- `public/brand/favicon.svg` — compact browser/app icon.

### Clear space and size

- Keep clear space equal to at least one quarter of the mark's height on every side.
- Minimum mark size: **24 CSS px**.
- Minimum horizontal lockup width: **180 CSS px**.
- Below 180px use the mark and live HTML text rather than shrinking the lockup.
- Never stretch, rotate, outline, bevel, shadow or apply a glow to the mark.
- Do not place the ember-red mark on a similar red or low-contrast image.

## 4. Colour palette

The palette comes from ash, paper, fire, rose oil, oxidised metal and institutional records. It should feel material rather than fantastical.

| Token | Hex | Primary use |
|---|---|---|
| Ash 950 | `#181512` | Main text, dark background |
| Ash 800 | `#2D2823` | Dark surfaces |
| Bone 50 | `#F7F1E7` | Main light background |
| Bone 100 | `#EFE5D7` | Alternate light surface |
| Paper | `#FFFDF9` | Cards and reading surface |
| Smoke 600 | `#6C6258` | Secondary text on light surfaces |
| Dust 300 | `#D7C9B8` | Rules, borders and quiet dividers |
| Ember 700 | `#9E3F2D` | Primary action, mark and active state |
| Ember 400 | `#E78B6F` | Accent/link on dark surfaces |
| Rose 700 | `#7E3550` | Rose institution accents and diagrams |
| Rose 300 | `#C98DA1` | Dark-mode Rose accent |
| Patina 700 | `#255C59` | Links, information and maps |
| Patina 300 | `#72AAA5` | Links on dark surfaces |
| Brass 600 | `#9A7135` | Decorative labels only on light surfaces |
| Brass 300 | `#D6A35B` | Dark-mode decorative accent and ember detail |

### Semantic use

- Light background: Bone 50.
- Reading/card surface: Paper.
- Primary text: Ash 950.
- Secondary text: Smoke 600.
- Primary button: Ember 700 with Bone 50 or white text.
- Text link on light: Patina 700.
- Text link on dark: Patina 300.
- Focus ring: Patina 700 on light; Brass 300 on dark.
- Rose and Brass are category/decorative accents, not default link colours.

### Contrast guidance

Verified WCAG contrast ratios for common pairs:

| Pair | Ratio | Use |
|---|---:|---|
| Ash 950 on Bone 50 | 16.18:1 | All text |
| Smoke 600 on Bone 50 | 5.30:1 | Normal secondary text |
| Ember 700 on Bone 50 | 5.84:1 | Links, icons and labels |
| Bone 50 on Ember 700 | 5.84:1 | Button text |
| Patina 700 on Bone 50 | 6.79:1 | Links |
| Rose 700 on Bone 50 | 7.44:1 | Labels and diagrams |
| Ember 400 on Ash 950 | 7.20:1 | Dark-mode accent |
| Patina 300 on Ash 950 | 6.93:1 | Dark-mode links |

Do not use Brass 600 or Dust 300 for normal-sized text on Bone 50. Colour never carries spoiler level or status by itself; always include text or an icon with an accessible label.

## 5. Typography

### Display and editorial serif — Newsreader Variable

Use for H1–H3, pull quotes, book titles and occasional large numerals. Newsreader has an editorial, scholarly character without resembling a generic high-fantasy display face.

- Headlines: weight 500–650.
- Body-sized serif text: weight 400–500.
- Use optical sizing when supported.
- Avoid all caps except short overlines.

### Interface and body sans — Source Sans 3 Variable

Use for body copy, navigation, metadata, captions, buttons, tables, forms and small screens. Its open shapes make dense encyclopedia material easier to read.

- Body: weight 400, line-height 1.65–1.75.
- UI: weight 550–650.
- Labels: weight 650, letter-spacing `0.06em`.

### Persian and Arabic script — Vazirmatn Variable

Use whenever Persian or Arabic script appears. Set `lang="fa"` and `dir="rtl"` on the smallest appropriate container. Do not fake script with a Latin display font.

### Self-hosting

Recommended packages:

```bash
npm install @fontsource-variable/newsreader @fontsource-variable/source-sans-3 @fontsource-variable/vazirmatn
```

Import only the required subsets/axes in the global stylesheet. Keep system fallbacks in place and preload only fonts used above the fold. Do not call Google Fonts or another third-party font CDN in production.

### Type scale

| Role | Responsive size | Line height |
|---|---|---:|
| Display | `clamp(3rem, 8vw, 7.5rem)` | 0.92 |
| H1 article | `clamp(2.5rem, 6vw, 5rem)` | 0.98 |
| H2 | `clamp(1.75rem, 3vw, 2.75rem)` | 1.08 |
| H3 | `clamp(1.3rem, 2vw, 1.75rem)` | 1.18 |
| Lead | `clamp(1.15rem, 1.8vw, 1.4rem)` | 1.55 |
| Body | `clamp(1rem, 0.3vw + 0.94rem, 1.125rem)` | 1.7 |
| Small | `0.875rem` | 1.5 |
| Overline | `0.75rem` | 1.2 |

Keep article measure between **62ch and 72ch**. Long lines are especially damaging on lore pages.

## 6. Layout and spacing

Use an 8px-derived spacing system with fluid exceptions for major sections.

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`

- Content width: 72rem maximum.
- Reading column: 68ch maximum.
- Full-bleed image rail: up to 96rem.
- Card radius: 2–6px. Avoid soft SaaS-style 20px cards.
- Rules/borders: usually 1px Dust 300.
- Shadows: rare and subtle; favour borders and tonal surfaces.

The page should feel composed like a museum catalogue or serious literary magazine. White space is structural, not decorative emptiness.

## 7. Imagery

The defining image system is **documentary evidence from the relevant story period**—especially 1991 and 2010.

Use:

- period-authentic 35mm colour photography;
- occasional formal medium/large-format portraits;
- archival paper, carbon copies, stamps, folders and map layers;
- early-1990s cars, offices, domestic interiors and broadcast technology;
- plausible Persian and distinctively Ateshi architecture;
- natural grain, imperfect exposure and practical lighting.

Avoid:

- fantasy glow, sparks or supernatural fire;
- painterly character art;
- generic Islamic domes used as visual shorthand;
- Faravahar or other real sacred symbols as Ateshi marks;
- artificial parchment on ordinary interface panels;
- cars, devices, lighting or street furniture that do not belong to the date of the scene;
- decorative imagery that conveys no place, person, object or evidence.

Archive imagery may be imperfect. Interface legibility may not.

## 8. Graphic language

- Use thin rules, folio numbers, archival captions and restrained stamps.
- Maps should use Patina for water/information, Ember for primary story routes, Rose for religious institutions and Ash for political boundaries.
- Use the flame mark as a navigational signature, not as a repeating wallpaper.
- Spoiler badges use clear text: `World lore`, `Early-book context`, `Story spoiler`, `Major spoiler`.
- Page section can be indicated by a narrow colour rule, but the section name must remain visible in text.

## 9. Components

### Primary button

- Ember 700 background; Bone 50 text.
- 44px minimum target height.
- 2px border in Ember 700.
- Hover may darken to `#843225`; do not animate with glow.
- Focus ring: 3px Patina 700 with 3px offset.

### Secondary button

- Transparent on light surface.
- Ash 950 text and border.
- Hover: Bone 100 background.

### Article cards

- Paper or transparent surface.
- Thin Dust border or top rule.
- Image is optional; title and description are never dependent on it.
- Show section and spoiler label before the title.

### Archive objects

- Use more generous captions and provenance blocks.
- Distinguish transcript, translation and archivist's note visually and semantically.
- Do not use distressed filters on the interface itself.

## 10. Voice in interface copy

Prefer:

- `Explore the Five Pillars`
- `Enter the Ash Archive`
- `Read the novel`
- `Reveal story spoilers`
- `View the archival record`

Avoid:

- `Uncover forbidden secrets`
- `Join the cult`
- `Embark on an epic journey`
- `Click here`
- language that presents Ateshism as a real faith.

## 11. Accessibility and performance

- Meet WCAG 2.2 AA.
- Never place body text directly on a busy photograph without an opaque reading surface.
- Honour `prefers-reduced-motion`.
- Use motion only to clarify state; keep transitions under roughly 200ms.
- Supply width/height for all images and responsive `srcset` output.
- Ensure keyboard-visible focus and 44px pointer targets.
- Keep webfonts self-hosted and subset. Use at most the three approved families.
- The logo must have a text alternative when it is not adjacent to the site name.

## 12. Brand approval checklist

- [ ] The page clearly belongs to the Ateshism system without pretending the religion is real.
- [ ] Newsreader, Source Sans 3 and Vazirmatn are used according to role.
- [ ] Colour combinations meet contrast requirements.
- [ ] Ember is controlled, not spread across the whole page.
- [ ] Photographs feel documentary and period-correct.
- [ ] The logo has adequate clear space and no visual effects.
- [ ] The layout reads as an archive/editorial publication, not a fantasy-game interface.
- [ ] Mobile typography and targets remain comfortable.
