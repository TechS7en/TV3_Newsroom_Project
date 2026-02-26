TV3 Ghana Newsroom Web App Prototype
Overview

A modern, interactive news website prototype for TV3 Ghana, featuring a responsive design with real-time updates, category-based news filtering, live TV simulation, and an admin dashboard. This frontend-only prototype demonstrates key functionality for a professional news platform.
Features
Homepage (index.html)

    TV3-branded header with logo and navigation

    Auto-scrolling breaking news ticker (rotates every 3 seconds)

    Featured story section with prominent display

    Latest news grid with 8+ news cards

    Trending sidebar with top 5 headlines

    Social media integration in footer

Category Page (category.html)

    Dynamic category filtering (Politics, Business, Sports, Entertainment, Technology)

    Dropdown filter with real-time updates

    Dynamic page title updates (e.g., "Sports News")

    Responsive grid layout

Single News Page (single.html)

    Complete story view with headline, author, date, and full content

    Related stories section (3 stories)

    Interactive comment system

    LocalStorage integration for content persistence

    Story click tracking

Live TV Page (live.html)

    YouTube live stream placeholder

    Program schedule table

    "Now Playing" indicator highlighting current shows based on system time

    Real-time updates every minute

Contact/News Tip Page (contact.html)

    Comprehensive tip submission form

    Inline form validation with error messages

    Category selection dropdown

    File upload simulation

    LocalStorage storage for submitted tips

Admin Dashboard (admin.html)

    View all submitted tips

    Manage comments

    Track story click statistics

    Delete individual items

    "Clear All" functionality

    LocalStorage data management

Technologies Used

    HTML5 - Semantic markup structure

    CSS3 - Modern styling with flexbox and grid

    JavaScript (ES6+) - Dynamic functionality and localStorage management

    Font Awesome 6 - Social media icons and UI elements

    LocalStorage API - Client-side data persistence

Project Structure
TV3_Newsroom_Project/
│
├── index.html              # Homepage
├── news.html               # News listing page
├── category.html           # Category filtering page
├── single.html             # Individual news story
├── live.html               # Live TV streaming page
├── contact.html            # News tip submission
├── admin.html              # Admin dashboard
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── main.js            # Core JavaScript functionality
│
└── images/                 # Image assets (create this folder)
    ├── logo.png           # TV3 Ghana logo
    ├── favicon.ico        # Website icon
    └── [news images]      # Story thumbnails
Key Functionality
Breaking News Ticker

    Automatically cycles through headlines every 3 seconds

    Eye-catching red background with white text

    Smooth transitions

Category Filtering

    Dropdown selection updates visible stories

    Dynamic page title reflects current category

    Smooth filtering without page reload

Comment System

    Users can post comments on stories

    Comments stored in localStorage

    Real-time display updates

    Admin can moderate comments

Live TV Schedule

    Current program highlighted in gold

    Updates based on user's system time

    Schedule table with program times and hosts

Form Validation

    Real-time inline error messages

    Email format validation

    Required field checking

    No alert popups - clean user experience

Admin Features

    Centralized data management

    Delete individual tips/comments

    Bulk data clearing

    Click statistics tracking

Design Features

    Responsive Design - Works on mobile, tablet, and desktop

    TV3 Branding - Blue and gold color scheme

    Modern UI - Card-based layout with hover effects

    Accessibility - Semantic HTML, proper contrast ratios

    User Experience - Intuitive navigation, clear visual hierarchy

Data Management

All data is stored locally in the browser's localStorage:

    News tips - Contact form submissions

    Comments - User comments on stories

    Story clicks - Tracking popular content

    Persistent storage - Data survives page refreshes

Browser Support

    Chrome (latest)

    Firefox (latest)

    Safari (latest)

    Edge (latest)

    Opera (latest)

Responsive Breakpoints

    Mobile: 320px - 768px

    Tablet: 768px - 1024px

    Desktop: 1024px+

Usage Examples
Submitting a News Tip

    Navigate to Contact page

    Fill in all required fields

    Select tip category

    Add message and optional attachment

    Submit - data saves to localStorage

Filtering News by Category

    Go to Category page

    Use dropdown to select category

    Page updates to show relevant stories

    Title changes dynamically

Watching Live TV

    Visit Live TV page

    View embedded YouTube stream

    Check schedule for upcoming shows

    Current show automatically highlighted

Target Users

    General Public - News consumption

    Journalists - Story submission

    News Editors - Content management

    Administrators - Data oversight

Potential Enhancements

    Backend API integration

    User authentication system

    Real-time comment updates

    Push notifications

    Social media sharing

    Advanced search functionality

    Video on-demand library

    Weather updates integration

License

© 2026 Accra Technical University. All rights reserved. This is a prototype for demonstration purposes.
Contributing

This is a prototype project. For suggestions or improvements, please contact the ATU B-tech CS (level 200) development team.
Contact:

    Email: nicholassowahjr@gmail.com

    Phone: +233 599 454 898

    Address: TV3 Ghana, Accra, Ghana

Acknowledgments

    TV3 Ghana for the inspiration

    Font Awesome for icons

    YouTube for embed functionality

Built for ATU
