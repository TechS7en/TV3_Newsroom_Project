
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_NEWS } from '../constants';
import { NewsCategory } from '../types';
import { NewsCard } from '../components/NewsCard';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCat);

  useEffect(() => {
    document.title = `${selectedCategory === 'All' ? 'All' : selectedCategory} News | TV3 Ghana`;
  }, [selectedCategory]);

  const filteredNews = selectedCategory === 'All' 
    ? MOCK_NEWS 
    : MOCK_NEWS.filter(n => n.category === selectedCategory);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setSearchParams({ cat: value });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-white border-b py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bebas italic text-gray-900">{selectedCategory} NEWS</h1>
              <p className="text-gray-500 mt-2">Browse our comprehensive coverage across {selectedCategory.toLowerCase()}.</p>
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Filter By:</label>
              <select 
                value={selectedCategory} 
                onChange={handleFilterChange}
                className="bg-gray-100 border-none rounded-lg px-6 py-3 font-semibold focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="All">All Categories</option>
                {Object.values(NewsCategory).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNews.map(story => (
              <NewsCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <h3 className="text-xl font-bold text-gray-400">No stories found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
