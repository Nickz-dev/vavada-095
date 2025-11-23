'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import GameFilters from '@/components/ui/GameFilters';
import GameCard from '@/components/ui/GameCard';
import MoreGamesButton from '@/components/ui/MoreGamesButton';

interface Game {
  id: number | string;
  name: string;
  image: string;
  provider?: string;
  tags?: ('HIT' | 'NEW' | 'PRE')[];
  url?: string;
}

/**
 * GamesSection компонент - секция с играми, фильтрами и поиском
 */
export default function GamesSection() {
  const t = useTranslations('games');
  
  // Пример данных игр (в реальном проекте будут приходить из API)
  const [games] = useState<Game[]>([
    {
      id: 1,
      name: 'Le Santa',
      image: '/assets/images/slots/1.jpg',
      provider: 'Hacksaw Gaming',
      tags: ['PRE'],
    },
    {
      id: 2,
      name: 'Flock Me',
      image: '/assets/images/slots/2.jpg',
      provider: 'NetEnt',
      tags: ['NEW'],
    },
    {
      id: 3,
      name: 'Snake Arena 2',
      image: '/assets/images/slots/3.jpg',
      provider: 'Relax',
      tags: ['NEW'],
    },
    {
      id: 4,
      name: 'Crack More Piggy Banks',
      image: '/assets/images/slots/4.jpg',
      provider: 'Penguin King',
      tags: ['NEW'],
    },
    {
      id: 5,
      name: 'The Dog House',
      image: '/assets/images/slots/5.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 6,
      name: 'Wild Bounty Showdown',
      image: '/assets/images/slots/6.jpg',
      provider: 'PG Soft',
    },
    {
      id: 7,
      name: 'Gates of Olympus Super Scatter',
      image: '/assets/images/slots/7.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 8,
      name: 'Gates of Olympus 1000',
      image: '/assets/images/slots/8.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 9,
      name: 'Book of Dead',
      image: '/assets/images/slots/9.jpg',
      provider: 'Play\'n Go',
    },
    {
      id: 10,
      name: 'Zeus vs Hades - Gods of War',
      image: '/assets/images/slots/10.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 11,
      name: 'Sweet Bonanza Super Scatter',
      image: '/assets/images/slots/11.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 12,
      name: 'Mummyland Treasures',
      image: '/assets/images/slots/12.jpg',
      provider: 'Belatra Games',
    },
    {
      id: 13,
      name: 'Sweet Rush Bonanza',
      image: '/assets/images/slots/13.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 14,
      name: 'Le Bandit',
      image: '/assets/images/slots/14.jpg',
      provider: 'Hacksaw Gaming',
    },
    {
      id: 15,
      name: 'Duck Hunters',
      image: '/assets/images/slots/15.jpg',
      provider: 'Nolimit City',
    },
    {
      id: 16,
      name: 'Vituss Britva God of Random',
      image: '/assets/images/slots/16.jpg',
      provider: 'True Lab',
    },
    {
      id: 17,
      name: 'Minotaurus',
      image: '/assets/images/slots/17.jpg',
      provider: 'Endorphina',
    },
    {
      id: 18,
      name: 'Bullets and Bounty',
      image: '/assets/images/slots/18.jpg',
      provider: 'Hacksaw Gaming',
    },
    {
      id: 19,
      name: 'Big Bass Splash',
      image: '/assets/images/slots/19.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 20,
      name: 'Tome of Madness',
      image: '/assets/images/slots/20.jpg',
      provider: 'Play\'n Go',
    },
    {
      id: 21,
      name: 'Great Pigsby Megaways',
      image: '/assets/images/slots/21.jpg',
      provider: 'Relax',
    },
    {
      id: 22,
      name: 'Dr. Rock & the Riff Reactor',
      image: '/assets/images/slots/22.jpg',
      provider: 'True Lab',
    },
    {
      id: 23,
      name: 'Le King',
      image: '/assets/images/slots/23.jpg',
      provider: 'Hacksaw Gaming',
    },
    {
      id: 24,
      name: 'Plinko',
      image: '/assets/images/slots/24.jpg',
      provider: 'Apis Games',
    },
    {
      id: 25,
      name: 'Legacy of Dead',
      image: '/assets/images/slots/25.jpg',
      provider: 'Play\'n Go',
    },
    {
      id: 26,
      name: 'Wild Bandito',
      image: '/assets/images/slots/26.jpg',
      provider: 'PG Soft',
    },
    {
      id: 27,
      name: 'Sweet Bonanza 1000',
      image: '/assets/images/slots/27.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 28,
      name: 'The Dog House Megaways',
      image: '/assets/images/slots/28.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 29,
      name: 'Le Cowboy',
      image: '/assets/images/slots/29.jpg',
      provider: 'Hacksaw Gaming',
    },
    {
      id: 30,
      name: 'Le Zeus',
      image: '/assets/images/slots/30.jpg',
      provider: 'Hacksaw Gaming',
    },
    {
      id: 31,
      name: 'Ice Princess',
      image: '/assets/images/slots/31.jpg',
      provider: 'Belatra Games',
    },
    {
      id: 32,
      name: 'Voodoo Coins',
      image: '/assets/images/slots/32.jpg',
      provider: 'Belatra Games',
    },
    {
      id: 33,
      name: 'Crash',
      image: '/assets/images/slots/33.jpg',
      provider: 'Apis Games',
    },
    {
      id: 34,
      name: 'Sugar Rush 1000',
      image: '/assets/images/slots/34.jpg',
      provider: 'Pragmatic Play',
    },
    {
      id: 35,
      name: 'Battle Rage',
      image: '/assets/images/slots/35.jpg',
      provider: 'True Lab',
    },
    {
      id: 36,
      name: 'Chicken Road 2',
      image: '/assets/images/slots/36.jpg',
      provider: 'InOut',
    },
    {
      id: 37,
      name: 'Aviamasters',
      image: '/assets/images/slots/37.jpg',
      provider: 'BGaming',
    },
    {
      id: 38,
      name: 'Crown Coins',
      image: '/assets/images/slots/38.jpg',
      provider: 'Endorphina',
    },
    {
      id: 39,
      name: 'Royal Xmass 2',
      image: '/assets/images/slots/39.jpg',
      provider: 'Endorphina',
    },
    {
      id: 40,
      name: 'The Dog House – Royal Hunt',
      image: '/assets/images/slots/40.jpg',
      provider: 'Pragmatic Play',
    },
  ]);

  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'HIT' | 'NEW'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация игр
  const filteredGames = games.filter((game) => {
    const matchesProvider = selectedProvider === 'all' || game.provider === selectedProvider;
    const matchesFilter = selectedFilter === 'all' || game.tags?.includes(selectedFilter);
    const matchesSearch = searchQuery === '' || game.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesProvider && matchesFilter && matchesSearch;
  });

  return (
    <section 
      className="relative w-full pt-6 pb-0 md:pt-16 md:pb-0 games-section-bg"
      style={{
        backgroundColor: '#1F2132',
      }}
    >
      <div className="container mx-auto px-4 pb-0" style={{ maxWidth: '1200px' }}>
        {/* Панель фильтров */}
        <GameFilters
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Сетка игр - 5 колонок, 8 строк */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6 md:min-h-[400px]">
          {filteredGames.slice(0, 40).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Кнопка "Больше игр" */}
        {filteredGames.length > 0 && (
          <div className="flex justify-center mt-8 mb-0">
            <MoreGamesButton />
          </div>
        )}

        {/* Сообщение, если игр не найдено */}
        {filteredGames.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>{t('noGamesFound', { defaultValue: 'Игры не найдены' })}</p>
          </div>
        )}
      </div>
    </section>
  );
}

