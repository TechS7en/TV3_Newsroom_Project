
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsStory } from '../types';
import { storageService } from '../services/storageService';

interface NewsCardProps {
  story: NewsStory;
  horizontal?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ story, horizontal }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Requirement: Track clicks in admin
    storageService.trackClick(story.id);
    // Requirement: Use localStorage to load the clicked news story content on the single page
    localStorage.setItem('tv3_current_story', JSON.stringify(story));
    navigate(`/single`);
  };

  if (horizontal) {
    return (
      <div 
        onClick={handleCardClick}
        className="flex gap-4 group cursor-pointer border-b border-gray-100 pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded-lg transition-colors"
      >
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-wider">{story.category}</span>
          <h3 className="font-bold text-gray-900 group-hover:text-red-600 leading-tight line-clamp-2 text-sm">
            {story.title}
          </h3>
          <span className="text-gray-400 text-[10px] mt-1 block">{story.date}</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col cursor-pointer border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg uppercase">
          {story.category}
        </div>
      </div>
      <div className="p-5 flex-grow">
        <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest">{story.date} • {story.author}</span>
        <h3 className="text-lg font-bold mt-2 mb-3 leading-tight group-hover:text-red-600 transition-colors">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {story.excerpt}
        </p>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between group-hover:bg-red-50 transition-colors">
        <span className="text-red-600 font-bold text-xs uppercase tracking-tighter">Read Full Story</span>
        <svg className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};
