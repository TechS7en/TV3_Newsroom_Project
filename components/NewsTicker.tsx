
import React from 'react';
import { MOCK_NEWS } from '../constants';

export const NewsTicker = () => {
  const headlines = MOCK_NEWS.map(n => n.title).join("  •  ");

  return (
    <div className="bg-red-700 text-white h-12 flex items-center overflow-hidden border-b-2 border-yellow-400">
      <div className="bg-red-900 px-6 h-full flex items-center font-bold whitespace-nowrap z-20 shadow-2xl italic tracking-tighter text-sm">
        BREAKING NEWS
      </div>
      <div className="flex-1 relative h-full flex items-center overflow-hidden">
        <div className="whitespace-nowrap animate-ticker inline-block pl-[100%] text-sm font-semibold uppercase tracking-wide">
          {headlines} — {headlines}
        </div>
      </div>
    </div>
  );
};
