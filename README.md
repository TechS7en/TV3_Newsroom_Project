# TV3 Ghana Newsroom Prototype

A modern, interactive frontend prototype for the TV3 Ghana Newsroom. This project delivers a high-fidelity user interface for a national news outlet, featuring real-time data simulation via `localStorage`, dynamic content filtering, and a comprehensive admin dashboard.

## 📺 Project Overview

This prototype was developed to demonstrate a modern news-reading experience for TV3 Ghana. It focuses on clean typography, brand-consistent aesthetics (TV3 Red & Gold), and seamless navigation between categories, live broadcasts, and breaking updates.

## ✨ Key Features

### 📰 News & Content
- **Dynamic Homepage:** Features a high-impact "Hero" section for featured stories and a robust grid for the latest news.
- **Breaking News Ticker:** A JavaScript-powered auto-scrolling ticker that cycles through the latest headlines every 3 seconds.
- **Trending Sidebar:** Real-time tracking of popular stories based on user click data.
- **Category Filtering:** Dynamic filtering system (Politics, Business, Sports, Entertainment, Technology) with real-time title and metadata updates.
- **Deep-Linking:** Using `localStorage` to pass story data between the grid and the single-article view without a backend.

### 🎥 Multimedia & Interactivity
- **Live TV Page:** Embedded YouTube live stream simulation with a dynamic "Now Playing" schedule that tracks the user's system time.
- **News Tip System:** A validated contact form allowing citizens to submit news tips and upload media (simulated).
- **Reader Engagement:** Functional comment section on every article with persistence via local storage.

### 🛠 Admin Dashboard
- **Analytics:** Tracks and displays click counts for every article.
- **Content Management:** View, manage, and delete reader comments and news tips.
- **Data Control:** "Clear All" functionality to reset the prototype state.

## 🚀 Technical Stack

- **Markup:** HTML5
- **Styling:** CSS3 (Flexbox, CSS Grid, Custom Variables for easy branding/logo scaling)
- **Logic:** Vanilla JavaScript (ES6+)
- **Icons:** Font Awesome 6.4.0
- **Typography:** Bebas Neue (Headings) & Inter (Body)
- **Persistence:** Web Storage API (`localStorage`)

## 📂 Project Structure

```text
TV3_Newsroom_Project/
├── index.html          # Homepage (Featured, Latest, Trending)
├── news.html           # Full Latest News Archive
├── category.html       # Dynamic News Filtering
├── single.html         # Individual Article View & Comments
├── live.html           # Live Stream & Schedule
├── contact.html        # News Tip Submission Form
├── admin.html          # Admin Management Dashboard
├── css/
│   └── style.css       # Core UI Styles & Branding Variables
├── js/
│   └── main.js        # Core Logic, News Data, & Ticker System
└── images/             # Brand Assets (Logo, Banners, Thumbnails)
```

## 🛠 Setup & Customization

### Installation
No build step is required. Simply clone the repository and open `index.html` in any modern web browser.

### Adjusting Logo Size
The project uses CSS variables for global scaling. To change the logo size across the entire site:
1. Open `css/style.css`
2. Locate the `:root` section.
3. Modify the `--logo-height` variable:
   ```css
   :root {
       --logo-height: 60px; /* Change this value to resize the logo */
   }
   ```

### Updating News Content
All news articles are managed via the `NEWS_DATA` array in `js/main.js`. Updating an object in this array will automatically update the Homepage, Category pages, and Ticker.

## 📝 Usage Notes

- **Persistence:** Because this is a frontend-only prototype, all "submitted" data (tips, comments, clicks) is saved to your browser's `localStorage`. Clearing your browser cache or using the "Clear All" button in the Admin panel will reset the data.
- **Browser Support:** Optimized for the latest versions of Chrome, Firefox, Safari, and Edge.

## 🎓 Credits
Developed for the TV3 Ghana Newsroom Frontend Prototype Project.
