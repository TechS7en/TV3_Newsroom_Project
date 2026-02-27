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
        title: "African economies should prioritize gold reserves over dollar assets – Dr. Frank Bannor",
        category: "Business",
        author: "Publishing Desk",
        date: "February 26, 2026",
        image: "images/news1.png",
        content: "Speaking in an interview with *Sputnik Africa* News, Dr. Bannor noted that even the larger Western economies are gradually moving away from dollar-based assets toward gold. “If the so-called bigger economies, those in the northern hemisphere, are diversifying, moving away from the dollar to gold-denominated assets, then how much more African countries, who are highly susceptible not just to sanctions, but also to visa restrictions and other financial constraints?” he asked.\n\nDr Bannor, who is also a lecturer at the School of Public Service and Governance (SPSG), GIMPA, emphasized that dollar-denominated investments are increasingly risky amid current global geopolitical uncertainties. “It clearly points to the picture that diversifying into a dollar-denominated investment or asset is not the right way to go,” he said.\n\nAccording to him, building up gold reserves offers African nations a highly liquid and reliable financial resource. “Once you have your gold reserves, and in times of crisis, given the fact that the demand for gold has always been there, people are ready to use it. You can even undertake barter trade. Ghana, for instance, has in the past engaged in what we call gold-for-oil transactions, whereby gold could be used to purchase oil,” Dr. Bannor explained.\n\nThe development economist stressed that gold’s liquidity and universal acceptance make it the most practical option for African economies. “In terms of liquidity, gold is highly liquid in all senses because people are ready to accept it as a form of payment. It is clearly the right option to go,” he opined.\n\nDr. Bannor further urged African governments to rethink their foreign reserve strategies. “My position is that I would advise countries, in particular African countries, to diversify their reserves into gold rather than keeping US dollar-denominated assets,” he stated.",
        excerpt: "Bannor argues for gold reserves over dollar assets."
    },
    {
        id: 2,
        title: "Prosper Nartey Ogum pens two-year contract as Black Starlets head coach",
        category: "Sports",
        author: "Rabbi Adu Gyamfi",
        date: "February 23, 2026",
        image: "images/news2.png",
        content: "Dr. Ogum, who took over from Frimpong Manso, has already made an immediate impact by guiding the team to qualification for the CAF U-17 Africa Cup of Nations, scheduled for April 2026. His permanent appointment is intended to provide the time, structural backing and institutional support necessary to build a competitive squad capable of restoring Ghana’s dominance at youth level on the continent.\n\nExpressing his appreciation for the opportunity, Dr. Ogum outlined a clear long-term vision for the team.\n\n“I am grateful to the Ghana Football Association for the trust and stability this contract provides. Our focus is clear, to build a technically sound, tactically disciplined and mentally strong team that can compete at the highest level in Africa. We are not just preparing for a tournament, we are building a foundation for the future of Ghana football,” Prosper Nartey Ogum told GFA Communications.\n\nBeyond his national team responsibilities, Dr. Ogum also serves as the GFA’s Head of Education, a dual role that highlights his expertise in player development, technical instruction and structured growth pathways. His track record in domestic football further strengthens his credentials. He famously led Asante Kotoko SC to the Ghana Premier League title in 2022 and previously guided WAFA to an impressive second-place finish. His coaching résumé also includes spells at Ebusua Dwarfs and as assistant coach of the Black Galaxies.\n\nWith preparations for the continental showpiece already underway, the GFA has pledged full technical and logistical support, signaling a new era of stability and strategic focus for Ghana’s youth football development.",
        excerpt: "Ogum’s vision sparks new era for U-17 football."
    },
    {
        id: 3,
        title: "The Minority in Parliament is demanding an immediate briefing in Parliament following reports of the killing of Ghanaians in Burkina Faso",
        category: "Politics",
        author: "Raphael Ghartey",
        date: "February 17, 2026",
        image: "images/news3.png",
        content: "Speaking on the matter in an interview on TV3 NewsCentral, Tuesday, Ranking Member on Parliament’s Defence and Interior Committee, John Ntim Fordjour said 72 hours after news of the incident broke, it was imperative for the Ministers for Defence, Foreign Affairs, and National Security to appear before the House to provide detailed explanations.\n\nHe argued that beyond the statement already issued by the Interior Ministry, there should be a high-level government delegation to Burkina Faso to ascertain the full facts surrounding the incident.\n\n“Our expectation is that they ought to pay a high-level visit, particularly between the Defence Minister in Ghana and Burkina Faso to ascertain the actual circumstances that led to the killing and further to those certain arrangements,” he stated.\n\nThe legislator insisted that the Minority expects the three sector ministers; Defence, Interior and National Security Ministers to urgently brief Parliament at plenary and respond to questions on the steps being taken to address the situation and safeguard national security.\n\n“So, today, this afternoon. The Minority, it is our urgent expectation that the joint Ministers, Minister responsible for Defence and the Foreign Affairs Minister and the Minister responsible for National Security should appear in the House as a matter of urgency to brief the House. We have a lot of questions to ask them at plenary and in the Chamber for them to be able to assure Ghanaians what steps and measures they are taking,” he stated.\n\nRev. Ntim Fordjour described the development as a “major Defence leadership failure,” arguing that Ghana’s security architecture possesses sufficient intelligence capabilities that should help prevent such incidents.\n\nHe further raised concerns over the absence of a substantive Defence Minister for the past seven months, noting that the Acting Minister is concurrently handling responsibilities related to cocoa financing.\n\nAccording to him, the dual responsibilities may limit the coordination and leadership required at the Defence Ministry, particularly in matters involving intelligence collaboration with Burkina Faso.\n\n“It is for a reason that constitutionally Minister for Defence is expected to be appointed. For seven months, we have not had a substantive Minister for Defence and so for seven months there is an Acting Minister who is engaged in cocoa financing and its challenges. So, he would have very little time to coordinate leadership for the Ministry of Defence to coordinate intelligence between the counterparts in Burkina Faso and those who are here,” Ntim Fordjour noted.\n\nHis comments follow the death of seven Ghanaians who were killed by terrorists at Titao, a town in northern Burkina Faso, on Saturday, February 14, 2026.\n\nThe victims, tomato traders from Ghana, were travelling in a truck when the attack occurred.\n\nThe Interior Minister, Mohammed Muntaka Mubarak, said the traders were in Titao when jihadists launched an attack, specifically targeting the men. Among those travelling on one truck were ten men, including the driver, and eight women. Seven men were killed, and three others sustained serious injuries. Some of the women were affected but not seriously injured.",
        excerpt: "Minority demands briefing after Burkina Faso attack."
    },
    {
        id: 4,
        title: "President Mahama applauds China for $30m to construct new Science and Technology University in Damongo",
        category: "Technology",
        author: "Komla Klutsey",
        date: "January 27, 2026",
        image: "images/news4.png",
        content: "The President lauded Mr Tong for strengthening the existing relations between Ghana and China during his tenure.\n\n“You haven’t just been an ambassador or diplomat, you have been a friend, and I’m sad to see you go. Of course, our relations with China are excellent,” the President remarked. Mr Mahama also thanked Chinese President Xi Jinping for his country’s involvement in negotiating Ghana’s debt restructuring and for providing significant support for Ghana’s development.\n\nHe cited a $30 million grant for the Aflao Market Project and another $30 million allocated for the construction of a new Science and Technology University in Damongo. “We want to see a greater cooperation with China in terms of logistics, in terms of training to move on anti-terrorism, in terms of building surveillance of our borders to make sure that we don’t have any infiltration of these areas”, he added. President Mahama suggested a payment and settlement system between the two countries.\n\nAmbassador Tong congratulated President Mahama on the successes chalked in the first year of his tenure, especially in turning the fortunes of Ghana’s economy. He called for strengthening cooperation between the two countries in industry, trade, mining, and science and technology.\n\nAmbassador Tong noted that the China zero-tariff arrangement for Ghana’s exports would soon be operationalised. He appealed to President Mahama for Ghana’s support for China’s bid to host the Secretariat of the new United Nations treaty on Biodiversity Beyond National Jurisdiction.",
        excerpt: "Mahama thanks Tong, seeks deeper ties with China." 
    },
    {
        id: 5,
        title: "Media General launches ‘Ghana Month’ to celebrate independence and cultural heritage",
        category: "Entertainment",
        author: "Malise Kofi Omoloye",
        date: "March 3, 2026",
        image: "images/news5.png",
        content: "Ghana gained independence from colonial rule on March 6, 1957, and March has since been designated as a time to reflect on the nation’s history, traditions, and achievements.\n\nThe theme for this year’s celebration is “Promoting National Cohesion Through Culture.” Throughout the month, Media General will host a series of radio, television, and online programs aimed at commemorating the occasion and engaging Ghanaians in discussions about unity, heritage, and national identity. The launch event, held on Monday, March 3, at the New Ghana Village, was attended by key figures from government, media, and traditional leadership. Speaking at the event, Nuamah Eshun-Famiyeh, Group Chief Operating Officer of Media General, encouraged the public to actively participate in promoting and preserving Ghana’s heritage throughout the month. Guests were treated to a variety of traditional Ghanaian dishes and beverages, including Brukina, Lamugin, Sobolo, Asana, Gobɛ (rice and beans), and Kosua ne Meko (boiled egg with pepper sauce).\n\nThe event also featured captivating cultural performances by the NutefeWorla Cultural Troupe and the Efadzinam Borborbor Band, creating a vibrant and immersive experience that highlighted Ghana’s rich artistic traditions.\n\nThe Ghana Month celebration aims to foster national unity and pride by highlighting Ghana’s diverse cultural traditions and historical legacy. Media General’s platforms will continue to showcase special programs, documentaries, and cultural events throughout the month to engage the public and promote a deeper appreciation of Ghana’s heritage.",
        excerpt: "Launch of Ghana Month focuses on unity and cultural pride."
    },

    {
        id: 6,
        title: "The quality of Ghana’s cocoa has long been the envy of many countries – Dep Finance Minister",
        category: "Business",
        author: "Laud Nartey",
        date: "August 14, 2025",
        image: "images/news6.png",
        content: "Chairperson of the Board, Dr. Ransford Anertey Abbey, in his remarks, pledged to safeguard the premium status of Ghana’s cocoa. He assured stakeholders that Ghana will continue to comply with all international best practices and maintain the highest quality standards in the industry.\n\nMembers of the Quality Control Company Limited Board\n\n1. Dr. Ransford Anertey Abbey – Chairperson\n2. Mr. Wisdom K. Dogbey – Member\n3. Mr. Frank Asante – Member\n4. Dr. Kofi Owusu Domfeh, Ph.D. – Member\n5. Nana Osei Adusah – Member\n6. Attipoe Prudence Tonator – Member\n7. Mr. Phillip Gyasi-Afful – Member\n\nThe swearing in of the board comes at a time when the Minister of Finance, Dr. Cassiel Ato Forson, recently announced that the government has increased the producer price of cocoa from US$3,100 per tonne to US$5,040 per tonne. The new price takes effect from Thursday, 7th August 2025.\n\nIn a Facebook post, the finance minister said it is instructive to note that the government has, by this decision, increased the producer price significantly by 62.58% in US dollar terms. He also said this increase in the producer price represents 70% of the gross Free-On-Board (FOB) value of US$7,200 per tonne and aligns with President Mahama’s promise to pay cocoa farmers 70% of the FOB price.\n\nPresident John Dramani Mahama earlier announced that, beginning with the next cocoa season, Ghanaian cocoa farmers will receive no less than 70 per cent of the prevailing world market price for their produce. Addressing a grand durbar of chiefs and residents in Juaboso on Tuesday, July 17, 2025, the President declared: “Let me be clear: we will honour our promise to pay our hardworking farmers 70 per cent of the world market price of cocoa. The sweat of our cocoa farmers deserves dignity and a fair reward.”\n\nPresident Mahama described cocoa as “the lifeblood of our rural economy” and emphasised that sustaining farmers’ livelihoods is central to Ghana’s growth agenda.\n\nThe announcement of the increment in the prices came after the Producer Price Review Committee (PPRC) on Cocoa, under the Minister’s chairmanship, met and agreed on the producer price of cocoa for the 2025/2026 season, which opens on Thursday, 7th August 2025.\n\nThe Minister’s statement further said that it is significant to note that for the 2024/25 cocoa season, the previous New Patriotic Party (NPP) administration set an FOB value of US$4,850 per tonne of cocoa and the producer price at US$3,100, representing 63.9% of FOB, even though the world market price at the time was much better. The gross FOB value was arrived at using outstanding cocoa contracts of about 100,000 tonnes sold at US$2,600 per tonne in the 2023/2024 crop season and the average forecast for the 2025/2026 crop season.\n\nAt an average exchange rate of GHS10.25 to the US dollar for the 2025/2026 crop season, the government is pleased to announce an increase in the producer price of cocoa from GHS49,600 per tonne to GHS51,660 per tonne. “This further translates to an amount of GHS3,228.75 per bag of 64-kilogram gross weight of cocoa. Government further announces that this new price takes effect from Thursday, 7th August 2025,” he said.",
        excerpt: "Board vows to protect cocoa premium as producer price leaps to US$5,040."
    },
    {
        id: 7,
        title: "ISSER Report Warns Ghana Losing Billions from Poor Sanitation",
        category: "News",
        author: "Coffie Mawuedem Noel",
        date: "February 26, 2026",
        image: "images/news7.png",
        content: "The report, titled \"An Economic Analysis of the Benefits of Adequate Investment in Waste Management and Sanitation in Ghana,\" was launched in Accra on February 25 2026.\n\nThe release noted, Ghana could unlock nearly GHS 48 billion in annual economic benefits by 2032 if it significantly increases investment in waste management and sanitation.\n\nThe new economic study is urging government to rethink how Ghana manages waste, warning that the country is losing more than six billion cedis every year due to poor sanitation systems.\n\nThe report by the Institute of Statistical, Social and Economic Research says waste should no longer be treated as mere refuse, but as a high-value economic resource.\n\nISSER Director, Peter Quartey, explains that strategic investment in modern waste management could improve public health, boost productivity, create jobs and even generate energy.\n\nIt further added that, currently, Ghana loses about 5.5 billion cedis in healthcare costs linked to sanitation-related diseases, and another 650 million cedis in lost productivity. Poor sanitation is also blamed for more than 107 thousand premature deaths annually and nearly 32 million lost work and school days. But under what researchers describe as a best-case scenario with increased spending of about 1028 cedis per tonne of waste, Ghana could generate up to 47.9 billion cedis in annual benefits by 2032.\n\nThe study also points to the potential for compost production, recycling, and up to 1,484 megawatts of electricity from waste-to-energy initiatives.\n\nDespite this, all 261 local assemblies together spend only about 180 million cedis annually on waste management.\n\nISSER is now calling for urgent policy reforms and stronger public-private partnerships, insisting Ghana faces a critical choice, continue losing billions, or transform waste into a multi-billion-cedi engine of growth.",
        excerpt: "Study urges stronger investment as Ghana loses billions due to poor sanitation."
    },
    {
        id: 8,
        title: "IShowSpeed to receive Ghanaian Passport following confirmation of ties – Ablakwa",
        category: "Entertainment",
        author: "Lois Dogbe",
        date: "January 27, 2026",
        image: "images/news8.png",
        content: "The Deputy Minister of Information, Hon. Mavis Hawa Koomson, has confirmed that popular YouTuber, IShowSpeed, will be receiving a Ghanaian passport following the confirmation of his ties to Ghana. This announcement was made during a press briefing held at the Ministry of Information in Accra. Ablakwa also highlighted the recognition of Ghana’s digital ambassadors, adding:\n\"Ghana celebrates you both, you remain our worthy ambassadors, and we are ever so delighted to have granted you a diplomatic passport last year. For God, Country & Continent \"\nThe announcement comes after IShowSpeed revealed on his live stream that his mother is Ghanaian, further solidifying his connection to the country. The announcement has been met with excitement across social media platforms, with fans praising Ghana’s efforts to formally recognize international figures who have contributed to raising the nation’s profile globally. This move further underscores Ghana’s commitment to engaging with the African diaspora and leveraging cultural diplomacy to strengthen national pride and international visibility.",
        excerpt: "Week-long festival showcases best of African cinema."
    }
];

// ===== BREAKING NEWS TICKER =====
function initBreakingTicker() {
    const tickerContent = document.querySelector('.ticker-content');
    if (!tickerContent) return;
    
    const headlines = [
        "African economies should prioritize gold reserves over dollar assets",
        "Prosper Nartey Ogum pens two-year contract as Black Starlets head coach",
        "The Minority in Parliament is demanding an immediate briefing in Parliament following reports of the killing of Ghanaians in Burkina Faso",
        "President Mahama applauds China for $30m to construct new Science and Technology University in Damongo",
        "Media General launches ‘Ghana Month’ to celebrate independence and cultural heritage"
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