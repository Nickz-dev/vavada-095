'use client';

/**
 * GameSection компонент - заглушка
 * TODO: Создать игровую секцию используя GameCarousel
 * 
 * Пример использования:
 * import GameSection from '@/components/sections/GameSection';
 * import GameCarousel from '@/components/ui/GameCarousel';
 * 
 * <GameSection />
 */
export default function GameSection() {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Game Section</h2>
        {/* TODO: Добавить GameCarousel с играми */}
        <p>Add game carousel here</p>
      </div>
    </section>
  );
}

