'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useTranslations } from 'next-intl';

export default function MoreGamesButton() {
  const t = useTranslations('games');
  const tCommon = useTranslations('common');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white font-bold rounded-full transition-colors"
        style={{
          width: '165px',
          height: '40px',
          background: 'linear-gradient(to bottom, #6B7FA8, #4D5A85)',
          paddingTop: '2px',
          paddingBottom: '2px',
          fontSize: '13px',
        }}
      >
        {t('moreGames', { defaultValue: 'MORE GAMES' })}
      </button>

      {/* Модалка для "Больше игр" */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('moreGames', { defaultValue: 'Больше игр' })}
      >
        <div className="space-y-4">
          <p className="text-white">
            {t('moreGamesDescription', { defaultValue: 'Загрузка дополнительных игр...' })}
          </p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              {tCommon('cancel', { defaultValue: 'Отмена' })}
            </button>
            <button
              onClick={() => {
                setIsModalOpen(false);
                // TODO: Реализовать загрузку дополнительных игр
              }}
              className="px-4 py-2 bg-[#4D5A85] text-white rounded hover:bg-[#3d4a6f] transition-colors"
            >
              {t('loadMore', { defaultValue: 'Загрузить' })}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

