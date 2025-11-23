'use client';

import { useState, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Modal from './Modal';

interface AnchorLinkProps {
  href: string; // Якорная ссылка для SEO (например, #casino)
  anchorId?: string; // ID секции на странице
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  redirectUrl?: string; // URL для редиректа через скрытый раздел
  redirectType?: string; // Тип редиректа (casino, sport, etc.)
  refParam?: string; // Референс параметр для аналитики
  showModal?: boolean; // Показывать ли модалку перед редиректом
  modalContent?: ReactNode; // Контент модалки
  modalTitle?: string; // Заголовок модалки
}

export default function AnchorLink({
  href,
  anchorId,
  onClick,
  children,
  className = '',
  redirectUrl,
  redirectType = 'casino',
  refParam = '',
  showModal = true,
  modalContent,
  modalTitle,
}: AnchorLinkProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Вызываем пользовательский onClick если есть
    if (onClick) {
      onClick();
    }

    // Если есть redirectUrl, показываем модалку и делаем редирект
    if (redirectUrl) {
      if (showModal) {
        setIsModalOpen(true);
      } else {
        performRedirect();
      }
    } else {
      // Обычный якорный переход
      if (anchorId) {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Пробуем найти по href
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const performRedirect = () => {
    if (!redirectUrl) return;

    // Формируем URL для редиректа через скрытый раздел
    // Используем query параметры для передачи данных
    const params = new URLSearchParams({
      external: encodeURIComponent(redirectUrl),
      ref: refParam || 'anchor-link',
    });

    // Переходим через скрытый раздел /redirect
    window.location.href = `/${locale}/redirect?${params.toString()}`;
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    // Небольшая задержка перед редиректом для UX
    setTimeout(() => {
      performRedirect();
    }, 300);
  };

  // Дефолтный контент модалки если не передан
  const defaultModalContent = (
    <div>
      <p className="mb-4">
        {t('modal.redirectWarning', { defaultValue: 'You are leaving the site. Continue?' })}
      </p>
      <div className="flex gap-4 justify-end">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
        >
          {t('common.cancel', { defaultValue: 'Cancel' })}
        </button>
        <button
          onClick={handleModalConfirm}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          {t('common.continue', { defaultValue: 'Continue' })}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
        // Для SEO - ссылка остается валидной
        aria-label={typeof children === 'string' ? children : 'Link'}
      >
        {children}
      </a>

      {/* Модалка */}
      {showModal && redirectUrl && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle || t('modal.attention', { defaultValue: 'Attention' })}
        >
          {modalContent || defaultModalContent}
        </Modal>
      )}
    </>
  );
}

