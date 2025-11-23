'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import Link from 'next/link';

/**
 * Header компонент
 */
export default function Header() {
  const t = useTranslations('header');
  const tModal = useTranslations('modal');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(false);
    // Редирект на страницу логина
    const params = new URLSearchParams({
      external: encodeURIComponent('https://vavada2.c-wn.ru/login'),
      ref: 'header-login',
    });
    window.location.href = `/${locale}/redirect?${params.toString()}`;
  };

  const handleRegister = () => {
    setIsRegisterModalOpen(false);
    // Редирект на страницу регистрации
    const params = new URLSearchParams({
      external: encodeURIComponent('https://vavada2.c-wn.ru/register'),
      ref: 'header-register',
    });
    window.location.href = `/${locale}/redirect?${params.toString()}`;
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 text-white px-4"
        style={{ 
          zIndex: 1000,
          backgroundColor: isMobile ? '#252537' : 'rgba(37, 37, 55, 0.9)', // На мобильных без opacity, на десктопе с opacity
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1200px' }}>
          {/* Desktop: одна строка */}
          <div className="hidden md:flex items-center justify-between h-[55px]">
            {/* Логотип */}
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/vavada_logo.svg"
                alt="Vavada"
                width={180}
                height={60}
                priority
                className="h-auto"
              />
            </Link>
            
            {/* Правая часть: Войти, Зарегистрироваться, Помощь */}
            <nav className="flex items-center gap-6">
              {/* Кнопка Войти */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-white uppercase hover:opacity-80 transition-opacity text-sm font-medium"
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                }}
              >
                {t('login')}
              </button>

              {/* Кнопка Зарегистрироваться */}
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="bg-[#fe284a] text-white px-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-xs flex items-center justify-center"
                style={{
                  height: '35px',
                  boxShadow: '0 4px 8px rgba(254, 40, 74, 0.5)',
                }}
              >
                {t('register')}
              </button>

              {/* Помощь */}
              <Link
                href="#help"
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <svg
                  className="w-6 h-6 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ backgroundColor: '#fbbf24' }}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
                <span className="text-sm font-medium">Помощь</span>
              </Link>
            </nav>
          </div>

          {/* Mobile: две строки */}
          <div className="flex flex-col md:hidden py-2">
            {/* Первый ряд: Логотип */}
            <div className="flex items-center justify-center mb-2">
              <Link href={`/${locale}`} className="flex items-center">
                <Image
                  src="/vavada_logo.svg"
                  alt="Vavada"
                  width={180}
                  height={60}
                  priority
                  className="h-auto"
                />
              </Link>
            </div>
            
            {/* Разделитель */}
            <hr className="w-full mb-2 border-gray-600 md:hidden" />
            
            {/* Второй ряд: Войти, Зарегистрироваться, Помощь */}
            <nav className="flex items-center justify-center gap-4 flex-wrap">
              {/* Кнопка Войти */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-white uppercase hover:opacity-80 transition-opacity text-sm font-medium"
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                }}
              >
                {t('login')}
              </button>

              {/* Кнопка Зарегистрироваться */}
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="bg-[#fe284a] text-white px-4 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-xs flex items-center justify-center"
                style={{
                  height: '35px',
                  boxShadow: '0 4px 8px rgba(254, 40, 74, 0.5)',
                }}
              >
                {t('register')}
              </button>

              {/* Помощь */}
              <Link
                href="#help"
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <svg
                  className="w-6 h-6 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ backgroundColor: '#fbbf24' }}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Модалка для входа */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title={tModal('attention')}
      >
        <div className="space-y-4">
          <p className="text-white">{tModal('redirectWarning')}</p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              {tCommon('cancel')}
            </button>
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-[#fe284a] text-white rounded hover:bg-[#e01e3d] transition-colors"
            >
              {tCommon('continue')}
            </button>
          </div>
        </div>
      </Modal>

      {/* Модалка для регистрации */}
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title={tModal('attention')}
      >
        <div className="space-y-4">
          <p className="text-white">{tModal('redirectWarning')}</p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsRegisterModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              {tCommon('cancel')}
            </button>
            <button
              onClick={handleRegister}
              className="px-4 py-2 bg-[#fe284a] text-white rounded hover:bg-[#e01e3d] transition-colors"
            >
              {tCommon('continue')}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
