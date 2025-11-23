import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vavada095.com';

  // Генерируем sitemap для каждой локали
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Главная страница
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: locales.reduce((acc, loc) => {
          acc[loc] = `${baseUrl}/${loc}`;
          return acc;
        }, {} as Record<string, string>),
      },
    });

    // Страница обзора (Review)
    routes.push({
      url: `${baseUrl}/${locale}/review`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: locales.reduce((acc, loc) => {
          acc[loc] = `${baseUrl}/${loc}/review`;
          return acc;
        }, {} as Record<string, string>),
      },
    });
  });

  return routes;
}

