'use client';

import { useState } from 'react';

interface CatalogCardProps {
  assetId: number;
  name: string;
  creator: string;
  price: number;
  currency: 'robux' | 'tickets';
  thumbnailUrl: string;
}

export default function CatalogCard({ name, creator, price, currency, thumbnailUrl }: CatalogCardProps) {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handleBuy = async () => {
    setIsPurchasing(true);
    // API purchase call implementation
    setTimeout(() => setIsPurchasing(false), 1500);
  };

  return (
    <div className="bg-dark-surface border border-dark-border rounded-xl overflow-hidden hover:border-purple-600/50 transition duration-200 shadow-xl shadow-black/40 p-3 flex flex-col justify-between">
      <div className="aspect-square bg-dark-base rounded-lg overflow-hidden mb-3">
        <img src={thumbnailUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      <div>
        <h4 className="font-bold text-slate-100 text-sm truncate">{name}</h4>
        <p className="text-xs text-purple-300/60 mt-0.5">By {creator}</p>
      </div>

      <button
        onClick={handleBuy}
        disabled={isPurchasing}
        className="mt-3 w-full bg-dark-card hover:bg-purple-900/40 border border-dark-border text-xs font-bold py-2 rounded-lg transition flex items-center justify-center space-x-1"
      >
        <span>{currency === 'robux' ? 'R$' : 'Tx'}</span>
        <span className={currency === 'robux' ? 'text-purple-300' : 'text-amber-300'}>
          {price === 0 ? 'Free' : price.toLocaleString()}
        </span>
      </button>
    </div>
  );
}
