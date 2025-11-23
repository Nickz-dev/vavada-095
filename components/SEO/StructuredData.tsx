import Script from 'next/script';
import { locales } from '@/i18n/config';

interface StructuredDataProps {
  locale: string;
  type?: 'WebSite' | 'Organization';
}

export default function StructuredData({ locale, type = 'WebSite' }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vavada095.com';

  const siteName = {
    en: 'Vavada',
    ru: 'Vavada',
  };

  const description = {
    en: 'Play at Vavada - the best online casino with slots, live casino and sports betting',
    ru: 'Играйте в Vavada - лучшее онлайн казино со слотами, живым казино и спортивными ставками',
  };

  // Структурированные данные для сайта
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName[locale as keyof typeof siteName] || siteName.en,
    description: description[locale as keyof typeof description] || description.en,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: locales.map((loc) => loc === 'ru' ? 'ru-RU' : 'en-US'),
    alternateName: [
      'Vavada',
    ],
  };

  // Структурированные данные для организации
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName[locale as keyof typeof siteName] || siteName.en,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      // Добавить ссылки на соцсети при необходимости
      // 'https://twitter.com/coinsgame',
      // 'https://facebook.com/coinsgame',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Russian'],
    },
  };

  const schema = type === 'Organization' ? organizationSchema : websiteSchema;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

