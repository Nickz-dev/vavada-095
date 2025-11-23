'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Скрытый раздел для редиректов
 * Закрыт от индексации в robots.txt (Disallow: /redirect/)
 * Обрабатывает редиректы через query параметры
 * 
 * Использование:
 * /redirect?external=https://example.com&ref=banner-main
 * /redirect?type=casino&ref=cta-button
 */
export default function RedirectPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Получаем query параметры
    const external = searchParams.get('external');
    const type = searchParams.get('type');
    const ref = searchParams.get('ref') || 'internal-redirect';

    // Логика редиректа
    if (external) {
      // Прямой внешний редирект
      try {
        const decodedUrl = decodeURIComponent(external);
        // Проверка на валидный URL
        new URL(decodedUrl);
        window.location.href = decodedUrl;
      } catch (error) {
        // Если URL невалидный, редиректим на главную
        console.error('Invalid redirect URL:', external);
        window.location.href = '/';
      }
    } else if (type) {
      // Редирект по типу
      handleTypedRedirect(type, ref);
    } else {
      // Если нет параметров, редиректим на главную
      window.location.href = '/';
    }
  }, [searchParams]);

  const handleTypedRedirect = (type: string, ref: string) => {
    // Все редиректы идут на главную страницу, умная система редиректов сама определит куда направить
    const baseUrl = 'https://vavada2.c-wn.ru/';
    
    // Добавляем UTM параметры или другие метрики
    const separator = baseUrl.includes('?') ? '&' : '?';
    const finalUrl = `${baseUrl}${separator}ref=${encodeURIComponent(ref)}&source=landing&type=${encodeURIComponent(type)}`;
    
    window.location.href = finalUrl;
  };

  // Показываем loading при редиректе
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-white">Redirecting...</p>
      </div>
    </div>
  );
}

