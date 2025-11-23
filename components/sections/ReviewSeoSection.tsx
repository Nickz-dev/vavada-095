'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ReviewSeoSection() {
  const locale = useLocale();
  const t = useTranslations('reviewSeo');

  return (
    <section className="pt-8 md:pt-12 px-4 pb-0 md:pb-8" style={{ backgroundColor: '#1F2132' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
          {/* Текст обзора */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white text-sm md:text-base leading-relaxed">
              {t('description')}
            </p>
          </div>
          
          {/* Кнопка на страницу review */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Link
              href={`/${locale}/review`}
              className="inline-block text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-xs md:text-sm flex items-center justify-center"
              style={{
                height: '40px',
                background: 'linear-gradient(to bottom, #9FE082, #7DCD5E)',
                boxShadow: '0 4px 8px rgba(125, 205, 94, 0.5)',
              }}
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

