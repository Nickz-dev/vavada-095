import { Metadata } from 'next';

interface SEOProps {
  locale: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

// SEO данные для каждой локали
const seoData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  og: {
    title: string;
    description: string;
    image: string;
  };
}> = {
  en: {
    title: "Vavada - Online Casino",
    description: "Play at Vavada - the best online casino with slots, live casino and sports betting",
    keywords: "online casino, slots, live casino, sports betting, gambling, casino games",
    og: {
      title: "Vavada - Online Casino",
      description: "Play at Vavada - the best online casino with slots, live casino and sports betting",
      image: "/og-image.jpg"
    }
  },
  ru: {
    title: "Vavada - Онлайн Казино",
    description: "Играйте в Vavada - лучшее онлайн казино со слотами, живым казино и спортивными ставками",
    keywords: "онлайн казино, слоты, живое казино, спортивные ставки, азартные игры, игры казино",
    og: {
      title: "Vavada - Онлайн Казино",
      description: "Играйте в Vavada - лучшее онлайн казино со слотами, живым казино и спортивными ставками",
      image: "/og-image.jpg"
    }
  }
};

export function generateSEOMetadata({
  locale,
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vavada095.com';
  const defaultSEO = seoData[locale] || seoData.en;
  const siteUrl = url || `${baseUrl}/${locale}`;
  const ogImage = image || defaultSEO.og.image;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    alternates: {
      canonical: siteUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: title || defaultSEO.og.title,
      description: description || defaultSEO.og.description,
      url: siteUrl,
      siteName: 'Vavada',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title || defaultSEO.title,
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: type as 'website' | 'article',
      ...(type === 'article' && {
        publishedTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
        authors: ['Vavada'],
        section: 'Casino Review',
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || defaultSEO.og.title,
      description: description || defaultSEO.og.description,
      images: [fullOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

