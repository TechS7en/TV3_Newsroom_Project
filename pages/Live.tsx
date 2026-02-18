
import React, { useState, useEffect } from 'react';
import { SCHEDULE } from '../constants';

const Live = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const isNowPlaying = (startTime: string, duration: number) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const start = new Date(currentTime);
    start.setHours(hours, minutes, 0);
    
    const end = new Date(start);
    end.setMinutes(start.getMinutes() + duration);
    
    return currentTime >= start && currentTime < end;
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white pb-20">
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
               <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse"></div>
               <h1 className="text-3xl font-bebas tracking-widest italic">WATCH LIVE</h1>
            </div>
            <div className="bg-gray-800 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              720p HD STREAMING
            </div>
          </div>
          
          <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
            {/* Embedded YouTube Placeholder */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1" 
              title="TV3 Ghana Live Stream" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bebas italic mb-8 border-l-4 border-red-600 pl-4">PROGRAM SCHEDULE</h2>
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <table className="w-full text-left">
                <thead className="bg-gray-700 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <tr>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4">Program Name</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {SCHEDULE.map((prog, idx) => {
                    const active = isNowPlaying(prog.time, prog.durationMinutes);
                    return (
                      <tr key={idx} className={`${active ? 'bg-red-600/20' : ''} transition-colors`}>
                        <td className="px-6 py-5 font-bold text-red-500">{prog.time}</td>
                        <td className="px-6 py-5">
                          <p className="font-bold text-lg">{prog.name}</p>
                          <p className="text-sm text-gray-500">Live Studio 1</p>
                        </td>
                        <td className="px-6 py-5 text-gray-400">{prog.durationMinutes} mins</td>
                        <td className="px-6 py-5">
                          {active ? (
                            <span className="bg-red-600 text-[10px] font-extrabold px-3 py-1 rounded-full animate-bounce inline-block">NOW PLAYING</span>
                          ) : (
                            <span className="text-gray-600 text-[10px] font-bold">UPCOMING</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div>
             <div className="bg-gray-800 p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-bebas mb-6 italic">JOIN THE CONVERSATION</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Connect with us on social media using <strong>#TV3Ghana</strong> and see your messages scroll across the screen!
                </p>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 bg-blue-600 p-4 rounded-xl hover:bg-blue-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    <span className="font-bold">Twitter #TV3News360</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 bg-pink-600 p-4 rounded-xl hover:bg-pink-700 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.267-.07-1.646-.07-4.849 0-3.204 0-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span className="font-bold">Instagram @TV3_Ghana</span>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
