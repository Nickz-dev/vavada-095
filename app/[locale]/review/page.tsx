import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ReviewContent from '@/components/sections/ReviewContent';
import ArticleStructuredData from '@/components/SEO/ArticleStructuredData';
import BreadcrumbStructuredData from '@/components/SEO/BreadcrumbStructuredData';
import { generateSEOMetadata } from '@/components/SEO/SEO';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  let t;
  try {
    t = await getTranslations({ locale, namespace: 'review' });
  } catch {
    // Fallback to English if review translations are missing
    t = await getTranslations({ locale: 'en', namespace: 'review' });
  }
  
  const title = t('title');
  const introText = t('intro');
  const description = introText.replace(/<[^>]*>/g, '').substring(0, 160);
  const keywords = locale === 'ru' 
    ? 'обзор Vavada, онлайн казино Vavada, игры Vavada, бонусы Vavada, зеркала Vavada, регистрация Vavada, безопасность Vavada'
    : 'Vavada review, online casino Vavada, Vavada games, Vavada bonuses, Vavada mirrors, Vavada registration, Vavada security';

  return generateSEOMetadata({
    locale,
    title,
    description,
    keywords,
    url: `/${locale}/review`,
    type: 'article',
  });
}

export default async function ReviewPage({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vavada095.com';
  
  // Get translations with fallback
  let t, tBreadcrumbs;
  try {
    t = await getTranslations({ locale, namespace: 'review' });
  } catch {
    t = await getTranslations({ locale: 'en', namespace: 'review' });
  }
  
  try {
    tBreadcrumbs = await getTranslations({ locale, namespace: 'breadcrumbs' });
  } catch {
    tBreadcrumbs = await getTranslations({ locale: 'en', namespace: 'breadcrumbs' });
  }
  
  const articleUrl = `/${locale}/review`;
  const articleTitle = t('title');
  const introText = t('intro');
  const articleDescription = introText.replace(/<[^>]*>/g, '').substring(0, 160);
  
  // Дата публикации и обновления (можно сделать динамической)
  const datePublished = '2024-01-15T00:00:00Z';
  const dateModified = new Date().toISOString();
  
  // Breadcrumb данные для структурированных данных
  const breadcrumbItems = [
    { label: tBreadcrumbs('home'), url: `/${locale}` },
    { label: articleTitle.split(':')[0] || articleTitle, url: articleUrl },
  ];
  
  return (
    <>
      <ArticleStructuredData
        locale={locale}
        title={articleTitle}
        description={articleDescription}
        url={articleUrl}
        datePublished={datePublished}
        dateModified={dateModified}
        author={{ name: 'Vavada' }}
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Header />
      <main className="min-h-screen text-white" style={{ backgroundColor: '#1F2132', paddingTop: '90px' }}>
        <ReviewContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}
