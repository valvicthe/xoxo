import GameCard from '@/components/GameCard';

const SAMPLE_GAMES = [
  { placeId: 1, title: 'Natural Disaster Survival', creator: 'Placeholder', playingCount: 12, thumbnailUrl: '/thumbnails/nds.png' },
  { placeId: 2, title: 'Crossroads', creator: 'Placeholder', playingCount: 5, thumbnailUrl: '/thumbnails/crossroads.png' },
];

export default function GamesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Popular Games</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SAMPLE_GAMES.map((game) => (
          <GameCard key={game.placeId} {...game} />
        ))}
      </div>
    </main>
  );
}
