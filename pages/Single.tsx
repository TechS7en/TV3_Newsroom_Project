
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_NEWS } from '../constants';
import { storageService } from '../services/storageService';
import { Comment, NewsStory } from '../types';
import { NewsCard } from '../components/NewsCard';

const Single = () => {
  const [story, setStory] = useState<NewsStory | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Requirement: Use localStorage to load the clicked news story content
    const savedStory = localStorage.getItem('tv3_current_story');
    if (savedStory) {
      const parsedStory = JSON.parse(savedStory) as NewsStory;
      setStory(parsedStory);
      
      const allComments = storageService.getComments();
      setComments(allComments.filter(c => c.storyId === parsedStory.id));
      window.scrollTo(0, 0);
    } else {
      // If no story in localStorage, redirect home
      navigate('/');
    }
  }, [navigate]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story || !commentName || !commentText) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      storyId: story.id,
      name: commentName,
      text: commentText,
      date: new Date().toLocaleDateString()
    };

    storageService.saveComment(newComment);
    setComments(prev => [...prev, newComment]);
    setCommentName('');
    setCommentText('');
  };

  if (!story) return null;

  const relatedStories = MOCK_NEWS.filter(n => n.category === story.category && n.id !== story.id).slice(0, 3);

  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-white border-b pt-12 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to={`/categories?cat=${story.category}`} className="text-red-600 font-extrabold uppercase text-xs tracking-widest mb-4 inline-block hover:underline">
            {story.category} News
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            {story.title}
          </h1>
          <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
               {story.author[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{story.author}</p>
              <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">{story.date} • Accra, Ghana</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-10">
        <img src={story.image} alt={story.title} className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-12 border-4 border-white" />
        
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
          <p className="text-xl font-semibold text-gray-900 leading-snug border-l-4 border-red-600 pl-6 py-2">
            {story.excerpt}
          </p>
          <div className="text-gray-700 whitespace-pre-wrap">
            {story.content}
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="mt-4">Reporting live from the TV3 Ghana Newsroom, this is a developing story. We will provide more details as they become available.</p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t">
          <h2 className="text-3xl font-bebas italic tracking-tight mb-8 border-b-2 border-red-600 w-fit pr-4">READER COMMENTS</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-10 border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Leave a comment</h3>
            <form onSubmit={handleCommentSubmit} className="space-y-3">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                required
              />
              <textarea 
                placeholder="Message..." 
                className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-red-600 h-24"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
              ></textarea>
              <button 
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                Post
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {comments.map(c => (
              <div key={c.id} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 text-xs">
                  {c.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{c.name} <span className="text-[10px] text-gray-400 font-normal ml-2">{c.date}</span></h4>
                  <p className="text-sm text-gray-600 mt-1">{c.text}</p>
                </div>
              </div>
            ))}
            {comments.length === 0 && <p className="text-center text-gray-400 text-sm py-4 italic">No comments yet.</p>}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bebas italic tracking-tight mb-8">RELATED COVERAGE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map(s => (
              <NewsCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
