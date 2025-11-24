'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Modal from '@/components/ui/Modal';
import { useTranslations } from 'next-intl';
// Иконки из react-icons
import { 
  FaDice,           // Слоты (игровой автомат)
  FaVideo,          // Live-игры (видео/камера)
  FaBasketballBall, // Спорт
  FaRocket,         // Crash
  FaTrophy          // Турниры
} from 'react-icons/fa';

interface CategoryItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  isLink?: boolean; // Если true, то ссылка, иначе модалка
}

export default function BeamCategories() {
  const locale = useLocale();
  const t = useTranslations('common');
  const tModal = useTranslations('modal');
  const [openModal, setOpenModal] = useState<string | null>(null);

  const categories: CategoryItem[] = [
    {
      id: 'slots',
      label: t('categories.slots'),
      href: `/${locale}/slots`,
      icon: FaDice,
      color: 'text-cyan-400',
    },
    {
      id: 'live',
      label: t('categories.live'),
      href: `/${locale}/live`,
      icon: FaVideo,
      color: 'text-orange-500',
    },
    {
      id: 'sports',
      label: t('categories.review'),
      href: `/${locale}/review`,
      icon: FaBasketballBall,
      color: 'text-purple-400',
      isLink: true, // Обзор ведет на страницу review
    },
    {
      id: 'crash',
      label: t('categories.crash'),
      href: `/${locale}/casino`,
      icon: FaRocket,
      color: 'text-green-400',
    },
    {
      id: 'tournament',
      label: t('categories.tournament'),
      href: `/${locale}/tournaments`,
      icon: FaTrophy,
      color: 'text-yellow-400',
    },
  ];

  const handleClick = (e: React.MouseEvent, category: CategoryItem) => {
    if (category.isLink) {
      // Для Спорт - обычный переход
      return;
    }
    // Для остальных - открываем модалку
    e.preventDefault();
    setOpenModal(category.id);
  };

  const handleModalConfirm = (categoryId: string) => {
    setOpenModal(null);
    // Редирект на главную страницу через скрытый раздел
    const params = new URLSearchParams({
      external: encodeURIComponent('https://vavada2.slot24.bet'),
      ref: `beam-category-${categoryId}`,
    });
    setTimeout(() => {
      window.location.href = `/${locale}/redirect?${params.toString()}`;
    }, 300);
  };

  return (
    <>
      <div 
        className="beam-categories relative w-full h-[90px] sm:h-[60px] flex items-center"
        data-navigation="beam"
        style={{
          background: 'linear-gradient(135deg, #1F1F31 25%, #2a2a3f 25%, #2a2a3f 50%, #1F1F31 50%, #1F1F31 75%, #2a2a3f 75%, #2a2a3f)',
          backgroundSize: '10px 10px',
          backgroundColor: '#1F1F31',
          boxShadow: 'inset 0 3px 12px rgba(0, 0, 0, 0.5), inset 0 -3px 12px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
      >
        <nav className="nav-categories w-full">
          <ul className="nav-categories_list flex items-center justify-center gap-0 w-full overflow-x-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isLast = index === categories.length - 1;
              
              return (
                <li
                  key={category.id}
                  className={`nav-categories_item relative flex-1 min-w-0 sm:max-w-[200px] ${category.id === 'slots' ? 'x_slots' : ''} ${category.id === 'live' ? 'x_live' : ''} ${category.id === 'sports' ? 'x_sports' : ''} ${category.id === 'crash' ? 'x_casino' : ''} ${category.id === 'tournament' ? 'x_tournament' : ''}`}
                  data-category={category.id}
                >
                  {category.isLink ? (
                    <Link
                      href={category.href}
                      className={`nav-categories_link flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 h-full hover:opacity-80 transition-opacity ${category.color}`}
                    >
                      <div className="nav-categories_content flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <div className="nav-categories_img-wrapper">
                          <div className="nav-categories_img">
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                          </div>
                        </div>
                        <span className={`nav-categories_text uppercase font-bold text-[9px] sm:text-sm whitespace-nowrap ${category.color}`}>
                          {category.label}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <a
                      href={category.href}
                      onClick={(e) => handleClick(e, category)}
                      className={`nav-categories_link flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 h-full hover:opacity-80 transition-opacity cursor-pointer ${category.color}`}
                    >
                      <div className="nav-categories_content flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <div className="nav-categories_img-wrapper">
                          <div className="nav-categories_img">
                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                          </div>
                        </div>
                        <span className={`nav-categories_text uppercase font-bold text-[9px] sm:text-sm whitespace-nowrap ${category.color}`}>
                          {category.label}
                        </span>
                      </div>
                    </a>
                  )}
                  
                  {/* Разделитель (вертикальная линия) */}
                  {!isLast && (
                    <div 
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white opacity-30"
                      style={{ marginRight: '-1px' }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Canvas элемент (если нужен для анимаций) */}
        <canvas 
          className="beam-categories_canvas absolute inset-0 pointer-events-none" 
          data-navigation="canvas"
        />
      </div>

      {/* Модалки для каждой категории */}
      {categories.map((category) => {
        if (category.isLink) return null;
        
        return (
          <Modal
            key={category.id}
            isOpen={openModal === category.id}
            onClose={() => setOpenModal(null)}
            title={category.label}
          >
            <div className="space-y-4">
              <p className="text-white">
                {tModal('redirectWarning')}
              </p>
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setOpenModal(null)}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  {t('cancel', { defaultValue: 'Отмена' })}
                </button>
                <button
                  onClick={() => handleModalConfirm(category.id)}
                  className="px-4 py-2 bg-[#fe284a] text-white rounded hover:bg-[#e01e3d] transition-colors"
                >
                  {t('continue', { defaultValue: 'Продолжить' })}
                </button>
              </div>
            </div>
          </Modal>
        );
      })}
    </>
  );
}

