import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-black tracking-wider text-purple-400 mb-4">
        XOXO
      </h1>
      <p className="text-lg text-purple-200/70 max-w-xl mb-8">
        67
      </p>

      <div className="flex space-x-4">
        <Link
          href="/games"
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-purple-950/50"
        >
          Browse Games
        </Link>
        <Link
          href="/catalog"
          className="bg-dark-surface hover:bg-dark-card border border-dark-border text-purple-200 font-bold px-6 py-3 rounded-xl transition"
        >
          Open Catalog
        </Link>
      </div>
    </main>
  );
}
