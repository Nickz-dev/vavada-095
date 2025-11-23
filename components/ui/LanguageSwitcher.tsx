'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { locales, localeIconMap, type Locale } from '@/i18n/config';
import { useState, useRef, useEffect } from 'react';

/**
 * LanguageSwitcher компонент
 * Переключатель языков в виде селекта с SVG иконками
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('footer');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getLanguageName = (loc: Locale): string => {
    return t(`language.${loc}`, { defaultValue: loc.toUpperCase() });
  };

  // Маппинг полных имен файлов иконок
  const iconFileMap: Record<Locale, string> = {
    'en': 'en.02c53f0bf538e75a136d92769fd1b55e.svg',
    'az': 'az.0c367161c41799556a4589bd9c68b3a0.svg',
    'bg': 'bg.d22e08cfbbb0a345fced842ef95d8ae8.svg',
    'de': 'de.f6d12bec8b679cd03221a8dbb71602b5.svg',
    'el': 'el.5abe276ad8caba0884de1cec5bb9aaeb.svg',
    'es-mx': 'es_MX.957e196769f9ed1e3714a4fcf4db168a.svg',
    'fi': 'fi.eb356f185c86200d41050b9dd9cff69a.svg',
    'fr-ca': 'fr_CA.63ca2113dfbb5f0e9bef95bf25b766d3.svg',
    'hi': 'hi.115f916f98dde95f66beadb93fb9272f.svg',
    'hu': 'hu.a533a7c1703bd91a20007c6d12a0b2e2.svg',
    'it': 'it.ce2f8b55f8097622e5d69c673b34dbce.svg',
    'ja': 'ja.806eec36677ec7912802c43fb9f0d6fb.svg',
    'kk': 'kk.f5706cb1d8bfb458424b34aa17a4c2f7.svg',
    'ko': 'en.02c53f0bf538e75a136d92769fd1b55e.svg', // Временная заглушка, пока нет файла
    'pl': 'pl.b29e0b6777c7ab526c792cc44704f2aa.svg',
    'pt-br': 'pt_BR.42ba3e9cab4bbcd3e495c4e2add75c5c.svg',
    'ru': 'ru.fb35bb6066b28ec4d9e27c509838ea1b.svg',
    'sv': 'sv.75e6602d22431c68e522ef7114aa95aa.svg',
    'tr': 'tr.6d91ee0bb831e2b15012132d6c80b143.svg',
    'uz': 'uz.3e5f1501ecb5d163b8fe258375aa9cfb.svg'
  };

  const getIconPath = (loc: Locale): string => {
    return `/assets/icons/lang/${iconFileMap[loc]}`;
  };

  const switchLocale = (newLocale: Locale) => {
    // Удаляем текущую локаль из пути
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Добавляем новую локаль
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const currentLocale = locale as Locale;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        data-select-redirect=""
      >
        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={getIconPath(currentLocale)}
            alt={getLanguageName(currentLocale)}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm font-bold">{getLanguageName(currentLocale)}</span>
        <svg
          className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full md:bottom-full bottom-auto md:top-auto left-1/2 md:left-auto right-auto md:right-0 -translate-x-1/2 md:translate-x-0 mt-2 md:mb-2 mb-0 md:mt-0 rounded-lg shadow-lg overflow-hidden w-[calc(100vw-2rem)] max-w-[350px] min-w-[280px] md:min-w-[350px] max-h-[400px] overflow-y-auto z-50" style={{ backgroundColor: '#4A5372' }}>
          <div className="grid grid-cols-2 gap-0">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`flex items-center gap-2 px-4 py-2 text-left text-sm transition-colors ${
                  locale === loc
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={getIconPath(loc)}
                    alt={getLanguageName(loc)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="whitespace-nowrap font-bold">{getLanguageName(loc)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

