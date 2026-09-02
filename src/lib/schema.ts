import type { CollectionEntry } from 'astro:content';
import { SITE } from '../data/site';

type PageData = CollectionEntry<'pages'>['data'];

const absolute = (path: string) => new URL(path, SITE.url).href;

const compact = <T extends Record<string, unknown>>(value: T): T =>
  Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined && item !== null),
  ) as T;

function entity(entityData: PageData['about'][number]) {
  return compact({
    '@type': entityData.type,
    name: entityData.name,
    description: entityData.description,
    url: entityData.url ? absolute(entityData.url) : undefined,
  });
}

export function buildStructuredData(data: PageData, canonicalUrl: string) {
  const pageId = `${canonicalUrl}#webpage`;
  const contentId = `${canonicalUrl}#content`;
  const author = compact({
    '@type': 'Person',
    name: SITE.author,
    url: SITE.authorUrl ? absolute(SITE.authorUrl) : undefined,
  });

  const webPage = {
    '@context': 'https://schema.org',
    '@type': data.pageType === 'hub' ? 'CollectionPage' : 'WebPage',
    '@id': pageId,
    url: canonicalUrl,
    name: data.title,
    description: data.description,
    inLanguage: SITE.language,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      name: SITE.name,
      url: `${SITE.url}/`,
      description: SITE.description,
    },
    about: data.about.map(entity),
  };

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumbs`,
    itemListElement: data.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absolute(item.href),
    })),
  };

  const image = data.hero ? absolute(data.hero.src) : undefined;

  const commonContent = compact({
    '@context': 'https://schema.org',
    '@type': data.schemaType,
    '@id': contentId,
    name: data.title,
    headline: data.schemaType === 'Article' ? data.title : undefined,
    description: data.description,
    url: canonicalUrl,
    mainEntityOfPage: { '@id': pageId },
    author,
    datePublished: data.schemaType === 'Article' ? data.datePublished.toISOString() : undefined,
    dateModified: data.schemaType === 'Article' ? data.dateModified.toISOString() : undefined,
    inLanguage: SITE.language,
    image,
    about: data.about.map(entity),
    mentions: data.mentions.map(entity),
  });

  return data.permalink === '/'
    ? [webPage, commonContent]
    : [webPage, breadcrumbList, commonContent];
}
