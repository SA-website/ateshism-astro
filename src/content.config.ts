import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const breadcrumbSchema = z.object({
  label: z.string().min(1),
  href: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/),
});

const entitySchema = z.object({
  name: z.string().min(1),
  type: z.enum([
    'Thing',
    'DefinedTerm',
    'Person',
    'Place',
    'Organization',
    'Book',
    'CreativeWork',
    'Event',
  ]),
  description: z.string().min(20),
  url: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/).optional(),
});

const imageSchema = z.object({
  src: z.string().regex(/^\/images\/.+\.(?:avif|webp|png|jpe?g)$/i),
  alt: z.string().min(10).max(180),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: z.string().max(300).optional(),
  credit: z.string().max(160).optional(),
});

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string().min(4).max(100),
    seoTitle: z.string().min(20).max(68),
    description: z.string().min(70).max(170),
    summary: z.string().min(80).max(400),
    permalink: z.string().regex(/^(?:\/$|\/(?:[a-z0-9-]+\/)+)$/),
    section: z.enum([
      'start',
      'faith',
      'practice',
      'institutions',
      'society',
      'history',
      'world',
      'people',
      'archive',
      'books',
      'blog',
      'about',
      'legal',
    ]),
    pageType: z.enum([
      'landing',
      'hub',
      'article',
      'person',
      'place',
      'archive-object',
      'book',
      'blog-post',
      'legal',
    ]),
    status: z.enum(['draft', 'review', 'published', 'hold']),
    phase: z.enum(['launch', 'P1', 'P2', 'future']),
    spoiler: z.enum(['S0', 'S1', 'S2', 'S3']),
    canonStatus: z.array(z.enum(['C1', 'C2', 'C3', 'C4', 'C5'])).min(1),
    fictional: z.literal(true),
    author: z.literal('Alexei Sassani'),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    index: z.boolean().default(true),
    follow: z.boolean().default(true),
    primaryKeyword: z.string().min(2),
    secondaryKeywords: z.array(z.string()).max(12).default([]),
    searchIntent: z.enum([
      'entity-definition',
      'informational',
      'commercial-investigation',
      'navigational',
      'transactional',
    ]),
    schemaType: z.enum(['Article', 'Book', 'CreativeWork', 'CollectionPage']),
    breadcrumbs: z.array(breadcrumbSchema).min(1).max(6),
    about: z.array(entitySchema).min(1).max(12),
    mentions: z.array(entitySchema).max(20).default([]),
    related: z.array(z.string().regex(/^\/(?:[a-z0-9-]+\/)+$/)).min(2).max(6),
    hero: imageSchema.optional(),
    cta: z.object({
      primaryLabel: z.string().min(2).max(50),
      primaryHref: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/),
      secondaryLabel: z.string().min(2).max(50).optional(),
      secondaryHref: z.string().regex(/^\/(?:[a-z0-9-]+\/)*$/).optional(),
    }),
  }),
});

export const collections = { pages };
