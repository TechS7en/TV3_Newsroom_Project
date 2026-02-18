
import { NewsStory, NewsCategory, Program } from './types';

export const MOCK_NEWS: NewsStory[] = [
  {
    id: '1',
    title: 'Election 2024: Major Political Parties Launch Manifestos',
    excerpt: 'The political landscape heats up as the two main parties outline their visions for Ghana\'s future.',
    content: 'Full details on the manifesto launch and the key economic indicators promised by both sides...',
    category: NewsCategory.POLITICS,
    author: 'Kojo Mensah',
    date: 'Oct 24, 2024',
    image: 'https://picsum.photos/seed/politics1/800/600',
    trending: true
  },
  {
    id: '2',
    title: 'Ghana Cedi Stabilizes Against Major Global Currencies',
    excerpt: 'Bank of Ghana introduces new measures to ensure currency stability amidst global inflation.',
    content: 'Economists weigh in on the recent stabilization of the Cedi and what it means for the average Ghanaian consumer...',
    category: NewsCategory.BUSINESS,
    author: 'Abena Serwaa',
    date: 'Oct 23, 2024',
    image: 'https://picsum.photos/seed/business1/800/600',
    trending: true
  },
  {
    id: '3',
    title: 'Black Stars Gear Up for Crucial AFCON Qualifier',
    excerpt: 'The national team begins intensive training ahead of their must-win match this weekend.',
    content: 'Coach Chris Hughton expresses confidence in his squad as key players arrive in camp...',
    category: NewsCategory.SPORTS,
    author: 'Kwesi Appiah',
    date: 'Oct 24, 2024',
    image: 'https://picsum.photos/seed/sports1/800/600',
    trending: false
  },
  {
    id: '4',
    title: 'Sarkodie Announces New Album Release Date',
    excerpt: 'Ghanas rap icon sends social media into a frenzy with a surprise announcement.',
    content: 'Fans are eagerly awaiting the latest project from the Landlord himself...',
    category: NewsCategory.ENTERTAINMENT,
    author: 'Ekuwa Brown',
    date: 'Oct 22, 2024',
    image: 'https://picsum.photos/seed/ent1/800/600',
    trending: true
  },
  {
    id: '5',
    title: 'New Tech Hub to Open in Kumasi',
    excerpt: 'The Silicon Valley of Ghana expands as international investors fund a new startup incubator.',
    content: 'This move is expected to create thousands of jobs for young developers in the Ashanti region...',
    category: NewsCategory.TECHNOLOGY,
    author: 'Yaw Boateng',
    date: 'Oct 21, 2024',
    image: 'https://picsum.photos/seed/tech1/800/600',
    trending: false
  },
  {
    id: '6',
    title: 'Oil & Gas: New Discovery Off the Coast of Ghana',
    excerpt: 'Petroleum commission confirms a significant find in the Tano basin.',
    content: 'Analysts suggest this discovery could boost national revenue significantly over the next decade...',
    category: NewsCategory.BUSINESS,
    author: 'Abena Serwaa',
    date: 'Oct 20, 2024',
    image: 'https://picsum.photos/seed/business2/800/600',
    trending: true
  },
  {
    id: '7',
    title: 'Ghanaian High Schoolers Win Global Robotics Competition',
    excerpt: 'A team from Accra Academy takes home the top prize in California.',
    content: 'The brilliant students designed an autonomous waste-sorting robot using AI...',
    category: NewsCategory.TECHNOLOGY,
    author: 'Yaw Boateng',
    date: 'Oct 19, 2024',
    image: 'https://picsum.photos/seed/tech2/800/600',
    trending: false
  },
  {
    id: '8',
    title: 'Health Sector: New Hospital Commissioned in Ho',
    excerpt: 'Modern facility aims to reduce referral rates to Accra.',
    content: 'The 200-bed hospital is equipped with state-of-the-art diagnostic tools...',
    category: NewsCategory.POLITICS,
    author: 'Kojo Mensah',
    date: 'Oct 18, 2024',
    image: 'https://picsum.photos/seed/politics2/800/600',
    trending: true
  }
];

export const SCHEDULE: Program[] = [
  { name: "New Day (Morning Show)", time: "06:00", durationMinutes: 180 },
  { name: "News 360", time: "09:00", durationMinutes: 60 },
  { name: "The Pulse", time: "10:00", durationMinutes: 120 },
  { name: "Midday News", time: "12:00", durationMinutes: 60 },
  { name: "Sports Station", time: "13:00", durationMinutes: 90 },
  { name: "Entertainmemt News", time: "14:30", durationMinutes: 60 },
  { name: "The Big Issue", time: "15:30", durationMinutes: 150 },
  { name: "News 360 Evening", time: "18:00", durationMinutes: 60 },
  { name: "Late Night Show", time: "19:00", durationMinutes: 120 }
];
