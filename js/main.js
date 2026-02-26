// ===== GLOBAL VARIABLES =====
// Initialize localStorage data if not exists
if (!localStorage.getItem('newsTips')) {
    localStorage.setItem('newsTips', JSON.stringify([]));
}
if (!localStorage.getItem('comments')) {
    localStorage.setItem('comments', JSON.stringify([]));
}
if (!localStorage.getItem('storyClicks')) {
    localStorage.setItem('storyClicks', JSON.stringify({}));
}

// Sample news data (in a real app, this would come from an API)
const newsData = [
    {
        id: 1,
        title: "Ghana's Economy Shows Strong Growth in Q1 2024",
        category: "Business",
        author: "John Doe",
        date: "2024-03-15",
        image: "https://via.placeholder.com/600x400",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        excerpt: "The economy has shown remarkable resilience with GDP growth exceeding expectations."
    },
    {
        id: 2,
        title: "Black Stars Announce Squad for World Cup Qualifiers",
        category: "Sports",
        author: "Jane Smith",
        date: "2024-03-14",
        image: "https://via.placeholder.com/600x400",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        excerpt: "Coach announces 23-man squad for crucial World Cup qualifiers."
    },
    {
        id: 3,
        title: "Parliament Passes New Digital Economy Bill",
        category: "Politics",
        author: "Kwame Addo",
        date: "2024-03-13",
        image: "https://via.placeholder.com/600x400",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        excerpt: "New bill aims to boost digital transformation across all sectors."
    },
    {
        id: 4,
        title: "Tech Startup Hub Launches in Accra",
        category: "Technology",
        author: "Abena Osei",
        date: "2024-03-12",
        image: "https://via.placeholder.com/600x400",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        excerpt: "New innovation hub promises to create 1000+ jobs for youth."
    },
    {
        id: 5,
        title: "Stonebwoy Releases New Album",
        category: "Entertainment",
        author: "Esi Thompson",
        date: "2024-03-11",
        image: "https://via.placeholder.com/600x400",
        content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        excerpt: "Grammy-winning artist drops highly anticipated fifth studio album."
    },
    {
        id: 6,
        title: "Cocoa Farmers Get Price Increase",
        category: "Business",
        author: "Yaw Mensah",
        date: "2024-03-10",
        image: "https://via.placeholder.com/600x400",
        content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        excerpt: "Government announces 30% increase in cocoa producer price."
    },
    {
        id: 7,
        title: "Heavy Rains Cause Flooding in Accra",
        category: "News",
        author: "Adjoa Asare",
        date: "2024-03-09",
        image: "https://via.placeholder.com/600x400",
        content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        excerpt: "NDMO advises residents in flood-prone areas to relocate."
    },
    {
        id: 8,
        title: "Ghana Hosts African Film Festival",
        category: "Entertainment",
        author: "Nana Ama",
        date: "2024-03-08",
        image: "https://via.placeholder.com/600x400",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        excerpt: "Week-long festival showcases best of African cinema."
    }
];

// ===== BREAKING NEWS TICKER =====
function initBreakingTicker() {
    const tickerContent = document.querySelector('.ticker-content');
    if (!tickerContent) return;
    
    const headlines = [
        "Breaking: Parliament passes new budget",
        "BREAKING: Black Stars secure World Cup qualification",
        "Breaking: Major cabinet reshuffle expected",
        "BREAKING: Gold prices hit all-time high",
        "Breaking: New COVID-19 variant detected"
    ];
    
    let index = 0;
    
    function rotateHeadline() {
        tickerContent.textContent = headlines[index];
        index = (index + 1) % headlines.length;
    }
    
    rotateHeadline(); // Set initial headline
    setInterval(rotateHeadline, 3000);
}

// ===== NEWS FILTERING (Category Page) =====
function filterNewsByCategory() {
    const categoryFilter = document.getElementById('categoryFilter');
    const newsCards = document.querySelectorAll('.news-card');
    const categoryTitle = document.getElementById('categoryTitle');
    
    if (!categoryFilter) return;
    
    function filterNews() {
        const selectedCategory = categoryFilter.value;
        
        newsCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update page title
        if (categoryTitle) {
            categoryTitle.textContent = selectedCategory === 'all' 
                ? 'All News' 
                : `${selectedCategory} News`;
        }
    }
    
    categoryFilter.addEventListener('change', filterNews);
    filterNews(); // Initial filter
}

// ===== SINGLE PAGE FUNCTIONS =====
function loadStoryToSingle() {
    // Get story ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = parseInt(urlParams.get('id'));
    
    if (!storyId) return;
    
    // Find story
    const story = newsData.find(s => s.id === storyId);
    if (!story) return;
    
    // Update page
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('storyAuthor').textContent = `By ${story.author}`;
    document.getElementById('storyDate').textContent = story.date;
    document.getElementById('storyImage').src = story.image;
    document.getElementById('storyImage').alt = story.title;
    document.getElementById('storyContent').innerHTML = `<p>${story.content}</p>`;
    
    // Track click
    trackStoryClick(storyId);
    
    // Load related stories
    loadRelatedStories(story);
}

function loadRelatedStories(currentStory) {
    const relatedContainer = document.getElementById('relatedStories');
    if (!relatedContainer) return;
    
    const related = newsData
        .filter(s => s.id !== currentStory.id && s.category === currentStory.category)
        .slice(0, 3);
    
    relatedContainer.innerHTML = related.map(story => `
        <div class="news-card" onclick="window.location.href='single.html?id=${story.id}'">
            <img src="${story.image}" alt="${story.title}">
            <div class="news-card-content">
                <span class="news-category">${story.category}</span>
                <h3>${story.title}</h3>
                <p>${story.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// ===== COMMENT SYSTEM =====
function initCommentSystem() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
    
    if (!commentForm || !commentsList) return;
    
    // Load existing comments for this story
    const storyId = parseInt(new URLSearchParams(window.location.search).get('id'));
    loadComments(storyId);
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('commentName');
        const contentInput = document.getElementById('commentContent');
        
        // Validate
        if (!nameInput.value.trim() || !contentInput.value.trim()) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create comment
        const comment = {
            id: Date.now(),
            storyId: storyId,
            author: nameInput.value.trim(),
            content: contentInput.value.trim(),
            date: new Date().toLocaleString()
        };
        
        // Save to localStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        
        // Clear form
        nameInput.value = '';
        contentInput.value = '';
        
        // Reload comments
        loadComments(storyId);
    });
}

function loadComments(storyId) {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const storyComments = comments.filter(c => c.storyId === storyId);
    
    if (storyComments.length === 0) {
        commentsList.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
        return;
    }
    
    commentsList.innerHTML = storyComments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span>${comment.date}</span>
            </div>
            <p>${comment.content}</p>
        </div>
    `).join('');
}

// ===== STORY CLICK TRACKING =====
function trackStoryClick(storyId) {
    const clicks = JSON.parse(localStorage.getItem('storyClicks')) || {};
    clicks[storyId] = (clicks[storyId] || 0) + 1;
    localStorage.setItem('storyClicks', JSON.stringify(clicks));
}

// ===== CONTACT FORM VALIDATION =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }
        
        // Validate category
        const category = document.getElementById('tipCategory');
        if (!category.value) {
            showError(category, 'Please select a category');
            isValid = false;
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            // Save tip to localStorage
            const tip = {
                id: Date.now(),
                name: name.value.trim(),
                email: email.value.trim(),
                category: category.value,
                message: message.value.trim(),
                date: new Date().toLocaleString()
            };
            
            const tips = JSON.parse(localStorage.getItem('newsTips')) || [];
            tips.push(tip);
            localStorage.setItem('newsTips', JSON.stringify(tips));
            
            // Show success message
            alert('Thank you! Your tip has been sent successfully.');
            contactForm.reset();
            
            // Simulate file upload
            const fileInput = document.getElementById('attachment');
            if (fileInput.files.length > 0) {
                console.log('File selected:', fileInput.files[0].name);
            }
        }
    });
}

function showError(element, message) {
    element.classList.add('error');
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    element.parentNode.appendChild(error);
}

// ===== LIVE TV PAGE FUNCTIONS =====
function initLiveTV() {
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
    if (scheduleRows.length === 0) return;
    
    function updateNowPlaying() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();
        const currentTime = currentHour + (currentMinutes / 60);
        
        scheduleRows.forEach(row => {
            row.classList.remove('now-playing');
            const timeCell = row.cells[0];
            if (!timeCell) return;
            
            const timeRange = timeCell.textContent;
            const [start, end] = timeRange.split(' - ');
            
            const startHour = parseInt(start.split(':')[0]);
            const endHour = parseInt(end.split(':')[0]);
            
            if (currentTime >= startHour && currentTime < endHour) {
                row.classList.add('now-playing');
            }
        });
    }
    
    updateNowPlaying();
    setInterval(updateNowPlaying, 60000); // Update every minute
}

// ===== ADMIN DASHBOARD FUNCTIONS =====
function initAdminDashboard() {
    loadTips();
    loadComments();
    loadClickStats();
    
    // Clear all button
    const clearAllBtn = document.getElementById('clearAll');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear all data?')) {
                localStorage.setItem('newsTips', JSON.stringify([]));
                localStorage.setItem('comments', JSON.stringify([]));
                localStorage.setItem('storyClicks', JSON.stringify({}));
                loadTips();
                loadComments();
                loadClickStats();
            }
        });
    }
}

function loadTips() {
    const tipsList = document.getElementById('tipsList');
    if (!tipsList) return;
    
    const tips = JSON.parse(localStorage.getItem('newsTips')) || [];
    
    if (tips.length === 0) {
        tipsList.innerHTML = '<p>No tips submitted yet.</p>';
        return;
    }
    
    tipsList.innerHTML = tips.map(tip => `
        <div class="tip-item" data-id="${tip.id}">
            <div class="tip-content">
                <strong>${tip.name}</strong> (${tip.email}) - ${tip.category}
                <p>${tip.message}</p>
                <small>${tip.date}</small>
            </div>
            <button class="delete-btn" onclick="deleteTip(${tip.id})">Delete</button>
        </div>
    `).join('');
}

function loadComments() {
    const commentsList = document.getElementById('adminCommentsList');
    if (!commentsList) return;
    
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p>No comments yet.</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item" data-id="${comment.id}">
            <div class="comment-content">
                <strong>${comment.author}</strong> on Story #${comment.storyId}
                <p>${comment.content}</p>
                <small>${comment.date}</small>
            </div>
            <button class="delete-btn" onclick="deleteComment(${comment.id})">Delete</button>
        </div>
    `).join('');
}

function loadClickStats() {
    const statsList = document.getElementById('clickStats');
    if (!statsList) return;
    
    const clicks = JSON.parse(localStorage.getItem('storyClicks')) || {};
    
    if (Object.keys(clicks).length === 0) {
        statsList.innerHTML = '<p>No story clicks yet.</p>';
        return;
    }
    
    let html = '<ul>';
    for (const [storyId, count] of Object.entries(clicks)) {
        const story = newsData.find(s => s.id === parseInt(storyId));
        html += `<li>${story ? story.title : 'Unknown Story'}: ${count} clicks</li>`;
    }
    html += '</ul>';
    
    statsList.innerHTML = html;
}

// Global delete functions
window.deleteTip = function(id) {
    const tips = JSON.parse(localStorage.getItem('newsTips')) || [];
    const filtered = tips.filter(tip => tip.id !== id);
    localStorage.setItem('newsTips', JSON.stringify(filtered));
    loadTips();
};

window.deleteComment = function(id) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const filtered = comments.filter(comment => comment.id !== id);
    localStorage.setItem('comments', JSON.stringify(filtered));
    loadComments();
};

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    initBreakingTicker();
    filterNewsByCategory();
    
    // Check which page we're on
    if (window.location.pathname.includes('single.html')) {
        loadStoryToSingle();
        initCommentSystem();
    }
    
    if (window.location.pathname.includes('contact.html')) {
        initContactForm();
    }
    
    if (window.location.pathname.includes('live.html')) {
        initLiveTV();
    }
    
    if (window.location.pathname.includes('admin.html')) {
        initAdminDashboard();
    }
    
    // Make news cards clickable
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', function() {
            const storyId = this.dataset.id;
            if (storyId) {
                window.location.href = `single.html?id=${storyId}`;
            }
        });
    });
});