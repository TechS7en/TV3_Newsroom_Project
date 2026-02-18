
/**
 * TV3 GHANA NEWSROOM PROTOTYPE - CORE LOGIC
 * Strictly Vanilla JavaScript
 */

// =============================================================
// 1. HOME PAGE FEATURED IMAGE & STORY
// The very first item in this array is the "Hero" at the top.
// Change the 'image' path below to update the big homepage image.
// =============================================================
var NEWS_DATA = [
    { 
        id: 1, 
        category: "Politics", 
        title: "Election 2024: Major Political Parties Launch Manifestos", 
        author: "Kojo Mensah", 
        date: "Oct 24, 2024", 
        /* CHANGE THE LINE BELOW TO UPDATE THE BIG TOP IMAGE */
        image: "images/politics.png", 
        excerpt: "The political landscape heats up as the two main parties outline their visions for Ghana's future.", 
        content: "Full details on the manifesto launch and the key economic indicators promised by both sides. The political landscape heats up as the two main parties outline their visions for Ghana's future. Experts suggest that economic stability will be the primary driver for voters this December. Both major parties are intensifying their campaign efforts in key battleground constituencies." 
    },
    { id: 2, category: "Business", title: "Ghana Cedi Stabilizes Against Major Global Currencies", author: "Abena Serwaa", date: "Oct 23, 2024", image: "images/business.png", excerpt: "Bank of Ghana introduces new measures to ensure currency stability amidst global inflation.", content: "Economists weigh in on the recent stabilization of the Cedi and what it means for the average Ghanaian consumer." },
    { id: 3, category: "Sports", title: "Black Stars Gear Up for Crucial AFCON Qualifier", author: "Kwesi Appiah", date: "Oct 24, 2024", image: "images/sports.png", excerpt: "The national team begins intensive training ahead of their must-win match this weekend.", content: "The national team has begun intensive training at the Accra Sports Stadium." },
    { id: 4, category: "Entertainment", title: "Sarkodie Announces New Album Release Date", author: "Ekuwa Brown", date: "Oct 22, 2024", image: "images/entertainment.png", excerpt: "Ghana's rap icon sends social media into a frenzy with a surprise announcement.", content: "Ghanaian rap legend Sarkodie continues to dominate the global music charts." },
    { id: 5, category: "Technology", title: "New Tech Hub to Open in Kumasi", author: "Yaw Boateng", date: "Oct 21, 2024", image: "images/technology.png", excerpt: "The Silicon Valley of Ghana expands as startup culture grows.", content: "The future of technology in Ghana looks bright." },
    { id: 6, category: "Business", title: "Oil & Gas: New Discovery Off the Coast of Ghana", author: "Abena Serwaa", date: "Oct 20, 2024", image: "images/business2.png", excerpt: "Petroleum commission confirms a significant find in the Tano basin.", content: "Significant find off the coast." },
    { id: 7, category: "Technology", title: "Ghanaian High Schoolers Win Global Robotics Competition", author: "Yaw Boateng", date: "Oct 19, 2024", image: "images/technology2.png", excerpt: "A team from Accra takes home the top prize in California.", content: "Brilliant students design autonomous robots." },
    { id: 8, category: "Politics", title: "Health Sector: New Hospital Commissioned in Ho", author: "Kojo Mensah", date: "Oct 18, 2024", image: "images/politics2.png", excerpt: "Modern facility aims to reduce referral rates to Accra.", content: "Modern hospital in Ho." }
];

var SCHEDULE = [
    { name: "New Day (Morning Show)", start: "06:00", end: "09:00" },
    { name: "News 360 Morning", start: "09:00", end: "10:00" },
    { name: "The Pulse", start: "10:00", end: "12:00" },
    { name: "Midday News", start: "12:00", end: "13:00" },
    { name: "Sports Station", start: "13:00", end: "14:30" },
    { name: "Entertainment News", start: "14:30", end: "15:30" },
    { name: "The Big Issue", start: "15:30", end: "18:00" },
    { name: "News 360 Evening", start: "18:00", end: "19:00" },
    { name: "Late Night Show", start: "19:00", end: "23:59" }
];

// Explicitly attach to window
window.NEWS_DATA = NEWS_DATA;
window.SCHEDULE = SCHEDULE;

// Breaking News Ticker Logic
window.initTicker = function() {
    const tickerText = document.getElementById('ticker-text');
    if (!tickerText) return;
    
    let index = 0;
    const headlines = window.NEWS_DATA.map(n => n.title);
    
    tickerText.innerText = headlines[0];
    
    setInterval(() => {
        tickerText.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % headlines.length;
            tickerText.innerText = headlines[index];
            tickerText.style.opacity = 1;
        }, 500);
    }, 3000);
};

// Render News Grid
window.renderNewsGrid = function(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = data.map(news => `
        <div class="card" onclick="window.goToSingle(${news.id})">
            <img src="${news.image}" class="card-img" alt="${news.title}" loading="lazy">
            <div class="card-content">
                <span class="category-tag">${news.category}</span>
                <h3 class="card-title">${news.title}</h3>
                <p style="font-size: 12px; color: #888;">${news.date} • ${news.author}</p>
            </div>
        </div>
    `).join('');
};

// Render Featured Hero
window.renderHero = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.NEWS_DATA.length) return;
    
    const featured = window.NEWS_DATA[0];
    container.innerHTML = `
        <div class="featured-main card" style="height: 500px; position: relative;" onclick="window.goToSingle(${featured.id})">
            <img src="${featured.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${featured.title}">
            <div style="position: absolute; bottom: 0; left: 0; padding: 40px; background: linear-gradient(transparent, rgba(0,0,0,0.9)); color: white; width: 100%;">
                <span class="category-tag">${featured.category}</span>
                <h2 style="font-size: 40px; margin-bottom: 10px;">${featured.title}</h2>
                <p>${featured.excerpt}</p>
            </div>
        </div>
    `;
};

// Navigation to Single Story
window.goToSingle = function(id) {
    const story = window.NEWS_DATA.find(n => n.id == id);
    if (!story) return;
    
    localStorage.setItem('tv3_selected_story', JSON.stringify(story));
    
    let stats = JSON.parse(localStorage.getItem('tv3_stats') || '{}');
    stats[id] = (stats[id] || 0) + 1;
    localStorage.setItem('tv3_stats', JSON.stringify(stats));
    
    window.location.href = 'single.html';
};

// Auto-init ticker on all pages if element exists
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ticker-text')) {
        window.initTicker();
    }
});
