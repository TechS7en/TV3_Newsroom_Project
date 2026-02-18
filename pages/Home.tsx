
import React from 'react';
import { MOCK_NEWS } from '../constants';
import { NewsTicker } from '../components/NewsTicker';
import { NewsCard } from '../components/NewsCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const featured = MOCK_NEWS[0];
  const latestNews = MOCK_NEWS.slice(1, 9);
  const trending = MOCK_NEWS.filter(n => n.trending).slice(0, 5);

  return (
    <div className="bg-gray-50 pb-16">
      <NewsTicker />
      
      <section className="container mx-auto px-4 mt-8">
        {/* Featured Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Link to={`/news/${featured.id}`} className="relative group block rounded-2xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-red-600 px-3 py-1 rounded text-sm font-bold uppercase mb-4 inline-block">{featured.category}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight group-hover:text-red-400 transition-colors">{featured.title}</h1>
                <p className="text-gray-300 text-lg line-clamp-2 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center mt-6 text-sm text-gray-400">
                  <span className="font-bold text-white">By {featured.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Trending Sidebar */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border h-fit sticky top-24">
            <div className="flex items-center justify-between mb-8 border-b pb-4">
              <h2 className="text-2xl font-bebas tracking-tighter text-gray-900 italic">TRENDING STORIES</h2>
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
            </div>
            <div className="space-y-6">
              {trending.map((story, i) => (
                <div key={story.id} className="flex gap-4 group">
                  <span className="text-4xl font-bebas text-gray-100 group-hover:text-red-100 transition-colors leading-none">{i + 1}</span>
                  <Link to={`/news/${story.id}`} className="hover:text-red-600 transition-colors">
                    <h3 className="font-bold leading-tight line-clamp-2">{story.title}</h3>
                    <span className="text-[10px] text-gray-400 uppercase font-bold mt-1 block tracking-wider">{story.category}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bebas tracking-tight border-l-8 border-red-600 pl-4">LATEST NEWS</h2>
            <Link to="/categories" className="text-red-600 font-bold hover:underline">View All Stories &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestNews.map(story => (
              <NewsCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
