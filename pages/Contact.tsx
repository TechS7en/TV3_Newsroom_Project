
import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { NewsCategory, NewsTip } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    const tip: NewsTip = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString()
    };

    storageService.saveTip(tip);
    setFormData({ name: '', email: '', category: '', message: '' });
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-red-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bebas italic mb-4">SEND US A NEWS TIP</h1>
          <p className="text-red-100 max-w-2xl mx-auto">Got a story we should cover? Seen something in your community? Send us your tips, images, or videos anonymously or with your name.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border">
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-bold">Thank you! Your tip has been submitted to the newsroom.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Full Name</label>
                <input 
                  type="text" 
                  className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.name ? 'border-red-500 ring-2 ring-red-100' : 'focus:ring-2 focus:ring-red-600'}`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.email ? 'border-red-500 ring-2 ring-red-100' : 'focus:ring-2 focus:ring-red-600'}`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Tip Category</label>
              <select 
                className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none transition-all ${errors.category ? 'border-red-500 ring-2 ring-red-100' : 'focus:ring-2 focus:ring-red-600'}`}
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select a category...</option>
                {Object.values(NewsCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                <option value="General">General/Other</option>
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1 font-bold">{errors.category}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Your Message / Tip Details</label>
              <textarea 
                className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none transition-all h-40 ${errors.message ? 'border-red-500 ring-2 ring-red-100' : 'focus:ring-2 focus:ring-red-600'}`}
                placeholder="Describe what's happening..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message}</p>}
            </div>

            <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex items-start space-x-4">
               <div className="p-2 bg-red-100 rounded-lg text-red-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" /><path d="M9 13h2v5a1 1 0 11-2 0v-5z" /></svg>
               </div>
               <div>
                  <h4 className="font-bold text-red-900">Upload Attachments (Simulated)</h4>
                  <p className="text-sm text-red-700 mb-4">You can drag and drop images or documents here.</p>
                  <input type="file" className="text-sm text-red-600" />
               </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-red-600 text-white font-bold py-5 rounded-2xl text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/30"
            >
              Submit News Tip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
