'use client';

import { useState } from 'react';
import { launchClient } from '@/lib/launcher';

interface GameCardProps {
  placeId: number;
  title: string;
  creator: string;
  playingCount: number;
  thumbnailUrl: string;
}

export default function GameCard({ placeId, title, creator, playingCount, thumbnailUrl }: GameCardProps) {
  const [isLaunching, setIsLaunching] = useState(false);

  const handlePlay = async () => {
    setIsLaunching(true);
    await launchClient(placeId);
    setTimeout(() => setIsLaunching(false), 3000);
  };

  return (
    <div className="bg-purple-950/40 border border-purple-900/50 rounded-xl overflow-hidden hover:border-purple-700/60 transition duration-200 shadow-xl shadow-black/40 group">
      <div className="relative aspect-video bg-purple-950 overflow-hidden">
        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        <span className="absolute bottom-2 left-2 bg-purple-950/80 backdrop-blur-md text-xs font-medium text-purple-200 px-2.5 py-1 rounded-md border border-purple-800/50">
          👤 {playingCount} Playing
        </span>
      </div>
      
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-slate-100 truncate">{title}</h3>
          <p className="text-xs text-purple-300/60 mt-0.5">By {creator}</p>
        </div>

        <button
          onClick={handlePlay}
          disabled={isLaunching}
          className="mt-4 w-full bg-purple-700 hover:bg-purple-600 active:bg-purple-800 disabled:bg-purple-950/60 text-white font-bold py-2.5 rounded-lg text-sm transition duration-150 shadow-md shadow-purple-950 flex items-center justify-center space-x-2"
        >
          <span>{isLaunching ? 'Launching...' : 'Play'}</span>
        </button>
      </div>
    </div>
  );
}
