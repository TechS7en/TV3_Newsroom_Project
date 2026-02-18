
import { Comment, NewsTip } from '../types';

const KEYS = {
  COMMENTS: 'tv3_comments',
  TIPS: 'tv3_tips',
  CLICKS: 'tv3_clicks',
};

export const storageService = {
  getComments: (): Comment[] => {
    const data = localStorage.getItem(KEYS.COMMENTS);
    return data ? JSON.parse(data) : [];
  },
  saveComment: (comment: Comment) => {
    const comments = storageService.getComments();
    localStorage.setItem(KEYS.COMMENTS, JSON.stringify([...comments, comment]));
  },
  deleteComment: (id: string) => {
    const comments = storageService.getComments().filter(c => c.id !== id);
    localStorage.setItem(KEYS.COMMENTS, JSON.stringify(comments));
  },
  clearComments: () => localStorage.removeItem(KEYS.COMMENTS),

  getTips: (): NewsTip[] => {
    const data = localStorage.getItem(KEYS.TIPS);
    return data ? JSON.parse(data) : [];
  },
  saveTip: (tip: NewsTip) => {
    const tips = storageService.getTips();
    localStorage.setItem(KEYS.TIPS, JSON.stringify([...tips, tip]));
  },
  deleteTip: (id: string) => {
    const tips = storageService.getTips().filter(t => t.id !== id);
    localStorage.setItem(KEYS.TIPS, JSON.stringify(tips));
  },
  clearTips: () => localStorage.removeItem(KEYS.TIPS),

  trackClick: (storyId: string) => {
    const clicks = storageService.getClicks();
    clicks[storyId] = (clicks[storyId] || 0) + 1;
    localStorage.setItem(KEYS.CLICKS, JSON.stringify(clicks));
  },
  getClicks: (): Record<string, number> => {
    const data = localStorage.getItem(KEYS.CLICKS);
    return data ? JSON.parse(data) : {};
  },
  clearClicks: () => localStorage.removeItem(KEYS.CLICKS),
};
