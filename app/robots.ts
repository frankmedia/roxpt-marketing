import type { MetadataRoute } from 'next';

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://roxpt-marketing.vercel.app';
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Explicitly allow popular LLM and research crawlers
      { userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'Anthropic-ai', 'PerplexityBot'], allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}


