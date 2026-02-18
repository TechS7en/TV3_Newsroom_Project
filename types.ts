
export enum NewsCategory {
  POLITICS = 'Politics',
  BUSINESS = 'Business',
  SPORTS = 'Sports',
  ENTERTAINMENT = 'Entertainment',
  TECHNOLOGY = 'Technology'
}

export interface NewsStory {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  author: string;
  date: string;
  image: string;
  trending?: boolean;
}

export interface Comment {
  id: string;
  storyId: string;
  name: string;
  text: string;
  date: string;
}

export interface NewsTip {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  date: string;
}

export interface Program {
  name: string;
  time: string; // HH:mm format
  durationMinutes: number;
}
