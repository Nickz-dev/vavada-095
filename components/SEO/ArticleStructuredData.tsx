import Script from 'next/script';

interface ArticleStructuredDataProps {
  locale: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
}

export default function ArticleStructuredData({
  locale,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: ArticleStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vavada095.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImage = image
    ? (image.startsWith('http') ? image : `${baseUrl}${image}`)
    : `${baseUrl}/og-image.jpg`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: fullImage,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author?.name || 'Vavada',
      url: author?.url || baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vavada',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/vavada_logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    inLanguage: locale === 'ru' ? 'ru-RU' : 'en-US',
  };

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

