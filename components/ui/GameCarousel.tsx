'use client';

interface Game {
  id: number | string;
  name: string;
  image: string;
  url?: string;
}

interface GameCarouselProps {
  title: string;
  games: Game[];
  icon?: string;
  viewAllLink?: string;
}

/**
 * GameCarousel компонент - базовая заглушка
 * TODO: Реализовать карусель игр согласно дизайну
 * 
 * Пример использования:
 * const games = [
 *   { id: 1, name: "Game 1", image: "/assets/images/games/game1.jpg" },
 *   { id: 2, name: "Game 2", image: "/assets/images/games/game2.jpg" },
 * ];
 * 
 * <GameCarousel
 *   title="Trending Games"
 *   games={games}
 *   viewAllLink="/games/trending"
 * />
 */
export default function GameCarousel({
  title,
  games,
  icon,
  viewAllLink,
}: GameCarouselProps) {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          {viewAllLink && (
            <a
              href={viewAllLink}
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              View All →
            </a>
          )}
        </div>
        
        {/* TODO: Реализовать карусель игр */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-32 object-cover"
              />
              <p className="p-2 text-white text-sm text-center">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

