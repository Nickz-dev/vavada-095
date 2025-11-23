'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import GameSortFlag from './GameSortFlag';

interface GameFiltersProps {
  selectedProvider: string;
  onProviderChange: (provider: string) => void;
  selectedFilter: 'all' | 'HIT' | 'NEW';
  onFilterChange: (filter: 'all' | 'HIT' | 'NEW') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

// Полный список провайдеров с алфавитной группировкой
const providersByLetter: Record<string, string[]> = {
  'A': ['Amatic', 'Amusnet', 'Apis Games', 'AvatarUX'],
  'B': ['Backseat Gaming', 'Belatra Games', 'Betgames', 'BGaming', 'BTG', 'Blueprint Gaming', 'Bullshark Games'],
  'E': ['EGT Digital', 'ELK', 'Endorphina', 'Evolution Gaming', 'Ezugi'],
  'F': ['Fantasma'],
  'G': ['Gamomat'],
  'H': ['Habanero', 'Hacksaw Gaming'],
  'I': ['Igrosoft', 'InOut', 'Iron Dog Studio'],
  'J': ['Jili'],
  'K': ['Kalamba'],
  'N': ['NetEnt', 'Nolimit City', 'Novomatic'],
  'P': ['Penguin King', 'Peter & Sons', 'PG Soft', 'Play\'n Go', 'Playtech', 'Popiplay', 'Pragmatic Play', 'Print Studios', 'Push Gaming'],
  'Q': ['Quickspin'],
  'R': ['Red Tiger', 'Relax'],
  'S': ['Slotmill', 'SmartSoft', 'Sneaky Slots', 'Spribe'],
  'T': ['TaDa Gaming', 'Three Oaks Gaming', 'Thunderkick', 'Top Spin', 'True Lab', 'Turbo Games'],
  'Y': ['Yggdrasil'],
};

// Создаем плоский список всех провайдеров
const allProviders = Object.values(providersByLetter).flat();
const providerIds = ['all', ...allProviders];

export default function GameFilters({
  selectedProvider,
  onProviderChange,
  selectedFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: GameFiltersProps) {
  const t = useTranslations('games');
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const providerDropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие селекта при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (providerDropdownRef.current && !providerDropdownRef.current.contains(event.target as Node)) {
        setIsProviderOpen(false);
      }
    };

    if (isProviderOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProviderOpen]);

  const getProviderName = (id: string) => {
    if (id === 'all') {
      return t('allProviders', { defaultValue: 'Все провайдеры' });
    }
    // В реальном проекте можно добавить переводы для каждого провайдера
    return id;
  };

  const selectedProviderName = getProviderName(selectedProvider);

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-3 md:gap-4 w-full">
      {/* Контейнер для селекта и флагов */}
      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        {/* Селект провайдеров */}
        <div className="relative flex-shrink-0" ref={providerDropdownRef}>
          <button
            onClick={() => setIsProviderOpen(!isProviderOpen)}
            className={`w-[220px] sm:w-auto sm:min-w-[200px] px-4 rounded-lg text-white text-sm font-medium flex items-center justify-between gap-2 transition-all ${
            selectedProvider !== 'all' || isProviderOpen
              ? 'border-2 border-yellow-500'
              : 'border-2 border-transparent hover:border-yellow-500'
          }`}
          style={{
            backgroundColor: '#1D1F30',
            boxShadow: 'inset 0 -1px 2px rgba(0, 0, 0, 0.3)',
            height: '35px',
          }}
        >
          <span className="truncate">{selectedProviderName}</span>
          <svg
            className={`w-4 h-4 transition-transform flex-shrink-0 ${isProviderOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isProviderOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-full min-w-[200px] md:min-w-[600px] rounded-lg shadow-lg overflow-hidden z-50 max-h-[500px] overflow-y-auto"
            style={{ 
              backgroundColor: '#1D1F30',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            {/* Опция "Все провайдеры" */}
            <button
              onClick={() => {
                onProviderChange('all');
                setIsProviderOpen(false);
              }}
              className={`w-full px-4 py-1.5 text-left text-sm transition-all ${
                selectedProvider === 'all'
                  ? 'text-white border-l-2 border-yellow-500'
                  : 'text-gray-300 hover:text-white hover:border-l-2 hover:border-yellow-500'
              }`}
              style={{
                backgroundColor: selectedProvider === 'all' ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (selectedProvider !== 'all') {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedProvider !== 'all') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {t('allProviders', { defaultValue: 'Все провайдеры' })}
            </button>

            {/* Провайдеры по алфавиту - 3 колонки на десктопе, 1 на мобильных */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Распределяем буквы по колонкам */}
              {(() => {
                const letters = Object.keys(providersByLetter);
                const columns: string[][] = [[], [], []];
                
                // Распределяем буквы по колонкам
                letters.forEach((letter, index) => {
                  columns[index % 3].push(letter);
                });
                
                return columns.map((columnLetters, colIndex) => (
                  <div key={colIndex} className="md:border-r md:border-gray-700 last:border-r-0">
                    {columnLetters.map((letter) => {
                      const providers = providersByLetter[letter];
                      return (
                        <div key={letter}>
                          {/* Заголовок буквы */}
                          <div className="px-4 py-1 text-gray-500 text-xs font-bold uppercase sticky top-0" style={{ backgroundColor: '#1D1F30' }}>
                            {letter}
                          </div>
                          {/* Провайдеры этой буквы */}
                          {providers.map((provider) => (
                            <button
                              key={provider}
                              onClick={() => {
                                onProviderChange(provider);
                                setIsProviderOpen(false);
                              }}
                              className={`w-full px-4 py-1.5 text-left text-sm transition-all ${
                                selectedProvider === provider
                                  ? 'text-white border-l-2 border-yellow-500'
                                  : 'text-gray-300 hover:text-white hover:border-l-2 hover:border-yellow-500'
                              }`}
                              style={{
                                backgroundColor: selectedProvider === provider ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                              }}
                              onMouseEnter={(e) => {
                                if (selectedProvider !== provider) {
                                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (selectedProvider !== provider) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                }
                              }}
                            >
                              {provider}
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ));
              })()}
            </div>
          </div>
        )}
      </div>

        {/* Фильтры HIT и NEW - SVG флажки */}
        <ul className="flex gap-2 flex-shrink-0 list-none p-0 m-0">
          <GameSortFlag
            type="HIT"
            isActive={selectedFilter === 'HIT'}
            onClick={() => onFilterChange(selectedFilter === 'HIT' ? 'all' : 'HIT')}
          />
          <GameSortFlag
            type="NEW"
            isActive={selectedFilter === 'NEW'}
            onClick={() => onFilterChange(selectedFilter === 'NEW' ? 'all' : 'NEW')}
          />
        </ul>
      </div>

      {/* Поиск - на отдельной строке на мобильных, в одной линии на десктопе */}
      <div className="relative w-full sm:w-auto md:w-[440px] sm:ml-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('searchPlaceholder', { defaultValue: 'Поиск игр' })}
          className="w-full px-4 pr-10 rounded-full text-white text-sm placeholder-gray-400 focus:outline-none transition-all italic"
          style={{ 
            backgroundColor: '#1D1F30',
            border: '2px solid transparent',
            boxShadow: 'inset 0 -1px 2px rgba(0, 0, 0, 0.3)',
            height: '35px',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#eab308';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
          }}
          onMouseEnter={(e) => {
            if (document.activeElement !== e.currentTarget) {
              e.currentTarget.style.borderColor = '#eab308';
            }
          }}
          onMouseLeave={(e) => {
            if (document.activeElement !== e.currentTarget) {
              e.currentTarget.style.borderColor = 'transparent';
            }
          }}
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

