
import React, { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { NewsTip, Comment } from '../types';
import { MOCK_NEWS } from '../constants';

const Admin = () => {
  const [tips, setTips] = useState<NewsTip[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<'tips' | 'comments' | 'stats'>('tips');

  useEffect(() => {
    setTips(storageService.getTips());
    setComments(storageService.getComments());
    setClicks(storageService.getClicks());
  }, []);

  const handleDeleteTip = (id: string) => {
    storageService.deleteTip(id);
    setTips(tips.filter(t => t.id !== id));
  };

  const handleDeleteComment = (id: string) => {
    storageService.deleteComment(id);
    setComments(comments.filter(c => c.id !== id));
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      storageService.clearTips();
      storageService.clearComments();
      storageService.clearClicks();
      setTips([]);
      setComments([]);
      setClicks({});
    }
  };

  const getStoryTitle = (id: string) => MOCK_NEWS.find(n => n.id === id)?.title || 'Unknown Story';

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bebas tracking-tighter italic">ADMIN DASHBOARD</h1>
            <p className="text-gray-400">TV3 Newsroom Management Console</p>
          </div>
          <button 
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition-colors text-sm"
          >
            Clear All Data
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('tips')}
              className={`flex-1 py-5 font-bold uppercase tracking-widest text-sm transition-all ${activeTab === 'tips' ? 'text-red-600 border-b-4 border-red-600 bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              News Tips ({tips.length})
            </button>
            <button 
              onClick={() => setActiveTab('comments')}
              className={`flex-1 py-5 font-bold uppercase tracking-widest text-sm transition-all ${activeTab === 'comments' ? 'text-red-600 border-b-4 border-red-600 bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Comments ({comments.length})
            </button>
            <button 
              onClick={() => setActiveTab('stats')}
              className={`flex-1 py-5 font-bold uppercase tracking-widest text-sm transition-all ${activeTab === 'stats' ? 'text-red-600 border-b-4 border-red-600 bg-red-50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Analytics
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'tips' && (
              <div className="space-y-6">
                {tips.length > 0 ? tips.map(tip => (
                  <div key={tip.id} className="p-6 border rounded-2xl bg-gray-50 hover:border-red-200 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold uppercase px-2 py-1 rounded mb-2 inline-block">{tip.category}</span>
                        <h3 className="text-xl font-bold">{tip.name}</h3>
                        <p className="text-sm text-gray-500">{tip.email} • {tip.date}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteTip(tip.id)}
                        className="text-red-500 hover:text-red-700 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                    <p className="text-gray-700 bg-white p-4 rounded-xl border italic leading-relaxed">"{tip.message}"</p>
                  </div>
                )) : <p className="text-center text-gray-400 py-12">No news tips submitted yet.</p>}
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                {comments.length > 0 ? comments.map(c => (
                  <div key={c.id} className="p-6 border rounded-2xl bg-gray-50 hover:border-red-200 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <p className="text-[10px] text-red-600 font-bold uppercase mb-1">On: {getStoryTitle(c.storyId)}</p>
                          <h4 className="font-bold">{c.name} <span className="text-gray-400 text-xs font-normal">({c.date})</span></h4>
                       </div>
                       <button 
                        onClick={() => handleDeleteComment(c.id)}
                        className="text-red-500 hover:text-red-700 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                    <p className="text-gray-600 mt-2">"{c.text}"</p>
                  </div>
                )) : <p className="text-center text-gray-400 py-12">No comments to display.</p>}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-red-50 p-8 rounded-3xl border border-red-100 text-center">
                      <p className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2">Total Clicks</p>
                      {/* Fixed: Use type casting to ensure reduce parameters are treated as numbers */}
                      <p className="text-5xl font-bebas text-red-800 italic">{(Object.values(clicks) as number[]).reduce((a, b) => a + b, 0)}</p>
                   </div>
                   <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center">
                      <p className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-2">Total Tips</p>
                      <p className="text-5xl font-bebas text-blue-800 italic">{tips.length}</p>
                   </div>
                   <div className="bg-green-50 p-8 rounded-3xl border border-green-100 text-center">
                      <p className="text-green-600 font-bold uppercase text-xs tracking-widest mb-2">Comments</p>
                      <p className="text-5xl font-bebas text-green-800 italic">{comments.length}</p>
                   </div>
                </div>

                <div className="bg-white border rounded-2xl overflow-hidden">
                   <div className="bg-gray-50 px-6 py-4 border-b">
                      <h3 className="font-bold">Most Viewed Stories</h3>
                   </div>
                   <div className="divide-y">
                      {MOCK_NEWS.sort((a,b) => (clicks[b.id] || 0) - (clicks[a.id] || 0)).map(s => (
                        <div key={s.id} className="px-6 py-4 flex justify-between items-center">
                           <div>
                              <p className="font-bold text-gray-900">{s.title}</p>
                              <p className="text-xs text-gray-400">{s.category}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-2xl font-bebas text-gray-900 italic">{clicks[s.id] || 0}</p>
                              <p className="text-[10px] text-gray-400 font-bold uppercase">Clicks</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
