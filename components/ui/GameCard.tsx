'use client';

import { useState } from 'react';
import GameBadge from './GameBadge';
import Modal from './Modal';
import { useTranslations, useLocale } from 'next-intl';

interface Game {
  id: number | string;
  name: string;
  image: string;
  provider?: string;
  tags?: ('HIT' | 'NEW' | 'PRE')[];
  url?: string;
}

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const t = useTranslations('games');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <div className="relative group cursor-pointer">
        <div 
          className="relative aspect-square rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300"
          style={{ 
            backgroundColor: '#161626',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Изображение игры */}
          <img
            src={game.image}
            alt={game.name}
            style={{ 
              position: 'absolute',
              inset: 0,
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              minWidth: 0,
              minHeight: 0,
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />

          {/* Бейджи (HIT, NEW, PRE) - SVG */}
          {game.tags && game.tags.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
              {game.tags.map((tag) => (
                <GameBadge key={tag} type={tag} />
              ))}
            </div>
          )}

          {/* Логотип провайдера - скрыт, так как уже есть на изображении */}

          {/* Overlay при наведении */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300" />

          {/* Кнопки при наведении */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" style={{ marginTop: '-20%' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlayModalOpen(true);
              }}
              className="text-white font-bold rounded-full transition-colors"
              style={{
                width: '110px',
                height: '40px',
                background: 'linear-gradient(to bottom, #9FE082, #7DCD5E)',
                boxShadow: '0 4px 8px rgba(125, 205, 94, 0.5)',
                paddingTop: '2px',
                paddingBottom: '2px',
                fontSize: '13px',
              }}
            >
              PLAY
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDemoModalOpen(true);
              }}
              className="text-white font-bold rounded-full transition-colors"
              style={{
                width: '90px',
                height: '25px',
                backgroundColor: '#313047',
                fontSize: '12px',
              }}
            >
              DEMO
            </button>
          </div>

          {/* Название игры внизу */}
          <div 
            className="absolute bottom-0 left-0 right-0 px-3 py-4 flex items-center justify-center"
            style={{ backgroundColor: '#161626' }}
          >
            <p className="text-white text-xs font-medium text-center">{game.name}</p>
          </div>
        </div>
      </div>

      {/* Модалка для PLAY */}
      <Modal
        isOpen={isPlayModalOpen}
        onClose={() => setIsPlayModalOpen(false)}
        title={game.name}
      >
        <div className="space-y-4">
          <p className="text-white">
            {t('playGame', { defaultValue: 'Запуск игры' })}: {game.name}
          </p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsPlayModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              {tCommon('cancel', { defaultValue: 'Отмена' })}
            </button>
            <button
              onClick={() => {
                setIsPlayModalOpen(false);
                // Редирект на главную страницу через скрытый раздел
                const params = new URLSearchParams({
                  external: encodeURIComponent('https://vavada2.slot24.bet'),
                  ref: `game-play-${game.id}`,
                });
                setTimeout(() => {
                  window.location.href = `/${locale}/redirect?${params.toString()}`;
                }, 300);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              {t('play', { defaultValue: 'Играть' })}
            </button>
          </div>
        </div>
      </Modal>

      {/* Модалка для DEMO */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title={`${game.name} - Demo`}
      >
        <div className="space-y-4">
          <p className="text-white">
            {t('demoGame', { defaultValue: 'Демо версия игры' })}: {game.name}
          </p>
          <div className="flex gap-4 justify-end">
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
            >
              {t('cancel', { defaultValue: 'Отмена' })}
            </button>
            <button
              onClick={() => {
                setIsDemoModalOpen(false);
                // TODO: Реализовать демо режим
              }}
              className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition-colors"
            >
              {t('demo', { defaultValue: 'Демо' })}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

