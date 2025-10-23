import type { MetadataRoute } from 'next';

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://roxpt-marketing.vercel.app';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = ['/', '/science', '/team', '/pricing', '/join-team', '/privacy', '/cookies'];
  const now = new Date();
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}


