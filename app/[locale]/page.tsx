'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BeamCategories from '@/components/layout/BeamCategories';
import GamesSection from '@/components/sections/GamesSection';
import ReviewSeoSection from '@/components/sections/ReviewSeoSection';

/**
 * Главная страница - полностью реализована
 * 
 * Компоненты:
 * - Header: навигация, вход/регистрация
 * - Hero: карусель промо-слайдов
 * - BeamCategories: навигация по категориям
 * - GamesSection: секция с играми, фильтрами и поиском (40 слотов)
 * - ReviewSeoSection: SEO-секция с кнопкой на обзор
 * - Footer: футер сайта
 * 
 * Документация: docs/HOME_PAGE_AUDIT.md
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-white pt-[90px] md:pt-[55px]" style={{ backgroundColor: '#1F2132' }}>
        <Hero />
        <BeamCategories />
        <GamesSection />
        <ReviewSeoSection />
        {/* TODO: Добавить дополнительные секции */}
        {/* Примеры:
          <TrendingGames />
          <BestGames />
          <GameSection />
          <ReviewSection />
        */}
      </main>
      <Footer />
    </>
  );
}
