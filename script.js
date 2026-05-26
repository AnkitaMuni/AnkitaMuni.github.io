/* ==========================================================================
   PORTFOLIO INTERACTIVE LOGIC - ANKITA MUNI
   ========================================================================== */

// 1. DATA DEFINITIONS: 18 COMPREHENSIVE PROJECTS WITH PRECISE DATE STAMPS
const projectsData = [
    {
        id: "verify-ai",
        title: "VerifyAI",
        category: "ai-ml",
        tags: ["Autonomous Agents", "LLMs", "Research", "Vector DB"],
        desc: "Autonomous AI agents that audit research papers, repositories, and reproducibility claims with scientific transparency and real-time intelligence.",
        fullDesc: "VerifyAI is designed to address the reproducibility crisis in scientific research. By leveraging autonomous agent frameworks, it scans papers, pulls corresponding code repositories, attempts to set up dependencies, runs evaluation tests, and flags discrepancies. It generates dynamic, transparent credibility scores with verifiable citations.",
        highlights: [
            "Orchestrates cooperative multi-agent workflows using Python-based agent architectures.",
            "Integrates real-time validation layers by building sandboxed code compilation engines.",
            "Engineered semantic retrieval mechanisms to audit paper assertions against repository code.",
            "Outputs dynamic credibility reports in Markdown/PDF formats for academic auditing."
        ],
        date: "May 2026"
    },
    {
        id: "resort-management",
        title: "Resort Management System",
        category: "web-fullstack",
        tags: ["HTML5", "CSS3", "JavaScript", "Database"],
        desc: "A complete web application designed to manage resort bookings, guest check-ins, room availability, and billing processes.",
        fullDesc: "Resort Management System offers a clean user interface for resort administration and guest interactions. Built using vanilla frontend technology coupled with database management scripts, it automates room reservations, tracks active stays, and generates automated checkout receipts.",
        highlights: [
            "Designed a modular dashboard for booking management and room assignment configurations.",
            "Implemented dynamic forms with real-time room availability status validation.",
            "Optimized layout configurations for multiple screen sizes using responsive CSS custom grids.",
            "Coded frontend calculators handling complex taxation rules and customizable tour packages."
        ],
        date: "May 2026"
    },
    {
        id: "raft-drawing-board",
        title: "Distributed Real-Time Drawing Board",
        category: "systems",
        tags: ["Raft Consensus", "WebSockets", "Go/Python", "Distributed"],
        desc: "Raft board is a distributed real-time collaborative drawing application built using the Raft Consensus algorithm for high availability and consistency.",
        fullDesc: "Raft Board provides an immersive canvas for multiple users to co-draw in real time. Unlike centralized tools, it achieves fault tolerance by running a localized cluster of server nodes synchronizing canvas strokes. If the leader node drops, a new leader is seamlessly elected via the Raft algorithm.",
        highlights: [
            "Implemented the core Raft consensus states: Leader, Follower, and Candidate.",
            "Managed replicated state machine logs storing vector drawing nodes and stroke shapes.",
            "Engineered low-latency canvas sync using WebSockets over Python socket nodes.",
            "Successfully validated fault-tolerance against network partitions and active node crashes."
        ],
        date: "April 2026"
    },
    {
        id: "disaster-tweet-classifier",
        title: "Disaster Tweet Classifier",
        category: "ai-ml",
        tags: ["NLP", "Machine Learning", "Python", "Data Science"],
        desc: "Built a robust Natural Language Processing model to accurately classify tweets related to disasters, helping emergency responders parse real emergencies.",
        fullDesc: "In critical situations, social media holds massive real-time data. This NLP framework cleans, tokenizes, and processes social feeds to distinguish between metaphorical language ('My house is on fire with these deals!') and actual emergencies. Highly optimized for high recall.",
        highlights: [
            "Processed Twitter datasets using NLTK: tokenization, stop-word removal, and TF-IDF vectors.",
            "Trained and cross-validated Logistic Regression, SVM, and Random Forest estimators.",
            "Incorporated XGBoost to boost macro F1-score to 82.5% under unbalanced label spreads.",
            "Built an interactive visual dashboard displaying live predictions on mock inputs."
        ],
        date: "January 2026"
    },
    {
        id: "bioacoustic-ai",
        title: "Bioacoustic AI for Sustainability",
        category: "ai-ml",
        tags: ["Apache Kafka", "Audio ML", "Deep Learning", "IoT"],
        desc: "Leverages a real-time Apache Kafka data pipeline to monitor and analyze forest audio streams for immediate detection of illegal logging activities.",
        fullDesc: "An eco-centric IoT and Machine Learning venture. This system monitors microphone streams from remote forest nodes, pipes audio chunks in real-time through Apache Kafka, and analyzes the telemetry using a custom trained Audio Spectrogram Transformer to detect Chainsaws, Gunshots, or heavy trucks instantly.",
        highlights: [
            "Designed a highly scalable Apache Kafka data ingestion layer for sound chunk streaming.",
            "Implemented audio spectrogram conversion and feature extraction on edge devices.",
            "Trained a convolutional deep learning model (94.2% accuracy) to classify acoustic events.",
            "Integrated real-time Slack/Telegram alert triggers for rapid response forest security."
        ],
        date: "December 2025"
    },
    {
        id: "api-rate-limiter",
        title: "API Rate Limiter Middleware",
        category: "systems",
        tags: ["Middleware", "Systems", "Security", "Python"],
        desc: "A robust middleware service that enforces rate limits on API endpoints to prevent server abuse and guarantee high resource availability.",
        fullDesc: "A secure, developer-focused API gatekeeper. This middleware applies rate limiting policies (Token Bucket & Sliding Window Log algorithms) to control request streams dynamically. Built to integrate natively as a decorator or standalone proxy gateway.",
        highlights: [
            "Implemented custom Redis-backed token bucket structures to enable distributed, horizontal scaling.",
            "Designed clean sliding-window metrics with microsecond accuracy to combat burst attacks.",
            "Tested against thousands of parallel synthetic client requests with near-zero performance overhead.",
            "Structured configurable endpoint decorators to allow distinct limits per API tier."
        ],
        date: "November 2025"
    },
    {
        id: "her-health",
        title: "Her Health Web App",
        category: "web-fullstack",
        tags: ["Flask", "Data Visualization", "Machine Learning", "Health"],
        desc: "A comprehensive, data-driven Flask web application designed to help users track menstrual cycles, log symptoms, and gain predictive health insights.",
        fullDesc: "Her Health integrates tracking features with predictive ML engines. Users input physiological signals, which a light gradient boosting model processes to forecast next cycle dates, fertile windows, and potential hormonal trends. Features beautiful, custom visual graphs plotting historical statistics.",
        highlights: [
            "Built a responsive Flask backend utilizing SQLAlchemy for secure user telemetry storage.",
            "Developed predictive algorithms using scikit-learn to customize predictions based on cycle history.",
            "Created responsive data charts using Chart.js to map symptom frequencies and durations.",
            "Implemented end-to-end user authentication and clean, accessible glassmorphic UI panels."
        ],
        date: "November 2025"
    },
    {
        id: "dynamic-kafka-stream",
        title: "Dynamic Content Stream with Kafka",
        category: "systems",
        tags: ["Kafka", "Control Plane", "Systems", "Database"],
        desc: "A real-time, adaptive streaming platform that utilizes a database control plane to enable dynamic Kafka topic lifecycle management without manual reconfiguration.",
        fullDesc: "This system enables zero-downtime, automated Kafka topic creation, tuning, and decommissioning driven by database events. By embedding a control plane on top of Postgres, the platform auto-discovers metadata shifts and commands a custom Kafka Admin client to execute hot-swapping configurations.",
        highlights: [
            "Eliminated manual administrator operations for topic lifecycles via Postgres trigger nodes.",
            "Coded a custom Python-based Kafka Admin listener with state-machine fallback controls.",
            "Supported zero-downtime reconfiguration during heavy ingestion bursts.",
            "Reduced microservice reconnection lags by over 60% compared to traditional static bindings."
        ],
        date: "November 2025"
    },
    {
        id: "secure-messaging-app",
        title: "Secure Encryption Messaging App",
        category: "systems",
        tags: ["AES Encryption", "Sockets", "Cryptography", "Python"],
        desc: "A secure Python chat application using robust AES-256 encryption over sockets for private, fully encrypted peer-to-peer text communication.",
        fullDesc: "Designed to secure private conversations without middleman loggers. Uses raw socket connections paired with Cryptodome libraries. Includes a secure Diffie-Hellman dynamic key exchange layer before starting the chatting thread, ensuring true end-to-end security.",
        highlights: [
            "Programmed multithreaded socket servers in Python handling multiple concurrent chats.",
            "Applied AES-GCM 256-bit encryption ensuring confidentiality and integrity verification.",
            "Constructed a lightweight terminal and Tkinter UI showcasing secure dynamic key handshakes.",
            "Protected chats against active man-in-the-middle eavesdropping scenarios."
        ],
        date: "June 2025"
    },
    {
        id: "billing-solidity",
        title: "Billing using Solidity Smart Contract",
        category: "systems",
        tags: ["Solidity", "Smart Contracts", "Ethereum", "Web3"],
        desc: "A secure, decentralized billing and payment smart contract written in Solidity for transparent transactions on Ethereum.",
        fullDesc: "An experimental blockchain framework to settle business invoices securely. By writing decentralized logic in Solidity, this project executes trustless transactions, records proof-of-payment, and enforces billing parameters directly on-chain.",
        highlights: [
            "Programmed self-executing smart contracts handling escrow deposits and multi-signature approvals.",
            "Enforced strict security protocols guarding against reentrancy and integer overflow vulnerabilities.",
            "Deployed and verified contracts on Ethereum testnets using Remix, Hardhat, and MetaMask.",
            "Integrated dynamic gas optimization routines to reduce transaction settlement fees by 15%."
        ],
        date: "June 2025"
    },
    {
        id: "space-research-center",
        title: "Space Research Center Cisco Simulation",
        category: "systems",
        tags: ["Cisco Packet Tracer", "Routing", "Subnetting", "Security"],
        desc: "A complex Cisco Packet Tracer simulation of a Space Research Center network layout, integrating secure VLANs, OSPF, and ACLs.",
        fullDesc: "This project builds a multi-department infrastructure simulation for a high-security research site. Features logical and physical network designs, including redundant links, dynamic routing, access control lists (ACLs), and secure client-to-server paths.",
        highlights: [
            "Structured departmental segmentation utilizing secure Virtual Local Area Networks (VLANs).",
            "Configured OSPF routing protocols for dynamic, lowest-cost packet transmission.",
            "Enforced strict firewall Access Control Lists (ACLs) blocking external trespass vectors.",
            "Simulated physical disaster recovery situations with link aggregation (EtherChannel)."
        ],
        date: "June 2025"
    },
    {
        id: "cracking-captcha",
        title: "Cracking CAPTCHA and ReCAPTCHA",
        category: "ai-ml",
        tags: ["Computer Vision", "Deep Learning", "Algorithms", "Security"],
        desc: "Developed machine learning algorithms and computer vision pipelines to parse and solve visual CAPTCHA and token challenges for automated auditing.",
        fullDesc: "An educational research project examining vulnerabilities in legacy visual validation prompts. Using OpenCV, this project segments warped characters, resolves overlapping noisy gridlines, and trains a CNN model to read alphanumeric tokens accurately.",
        highlights: [
            "Engineered noise-reduction contours and thresholding templates in OpenCV.",
            "Trained a convolutional neural network (CNN) on a synthetic CAPTCHA corpus with 98% accuracy.",
            "Analyzed audio CAPTCHA channels utilizing speech-to-text algorithms and spectrogram models.",
            "Proposed defensive countermeasures like dynamic vector warp shifts for CAPTCHA generators."
        ],
        date: "June 2025"
    },
    {
        id: "safar-travel-guide",
        title: "Safar Travel Guide",
        category: "web-fullstack",
        tags: ["HTML/CSS", "JavaScript", "Interactivity", "Design"],
        desc: "Designed a clean, highly interactive travel guide platform for exploring cultural destinations, itineraries, and geographic highlights.",
        fullDesc: "Safar is a premium web guide tailored for travelers searching for immersive cultural locations. Features interactive map layers, custom itinerary selectors, dynamic packing checklists, and localized weather metrics populated through live weather APIs.",
        highlights: [
            "Constructed a fully responsive front-end layout utilizing advanced CSS custom grids.",
            "Coded modular JavaScript panels managing weather queries, travel estimators, and itineraries.",
            "Integrated Leaflet.js to serve fully interactive geographic map nodes.",
            "Highly praised for visual styling, clean layouts, and rich hover mechanics."
        ],
        date: "April 2025"
    },
    {
        id: "hand-gesture-control",
        title: "Hand Gesture Control System",
        category: "hardware",
        tags: ["Computer Vision", "OpenCV", "MediaPipe", "Python"],
        desc: "A real-time computer vision application using MediaPipe hand tracking to control desktop features and play virtual synthesizer keys.",
        fullDesc: "An innovative human-computer interface (HCI). This Python application tracks hand landmarks through a standard webcam and translates finger motions or pinch gestures into keyboard inputs, desktop adjustments, or synthesized musical frequencies.",
        highlights: [
            "Integrated MediaPipe Hands framework to capture 21 distinct coordinate points per hand in real-time.",
            "Engineered gesture smoothing filters in OpenCV to eliminate coordinate tracking jitter.",
            "Mapped custom swipe and tap gestures to operating system volume and page scroll controls.",
            "Integrated with the virtual piano system to trigger audio synthesizers with finger taps."
        ],
        date: "April 2025"
    },
    {
        id: "metro-network",
        title: "Metro Network Route Management",
        category: "systems",
        tags: ["C Language", "Data Structures", "Graphs", "Algorithms"],
        desc: "A high-performance C project representing a city metro network as a graph structure to calculate shortest paths using Dijkstra's algorithm.",
        fullDesc: "A routing and scheduling system written in pure C. Metro networks are represented as directed, weighted graphs where vertices are stations and weights are transit times. Employs advanced graph algorithms to find optimal, low-cost pathways.",
        highlights: [
            "Constructed custom memory-efficient graph structures in C utilizing adjacency lists.",
            "Coded a high-speed, custom-heap implementation of Dijkstra's shortest-path algorithm.",
            "Developed vertex ranking algorithms to detect high-traffic bottleneck transit hubs.",
            "Designed a clean CLI showing detailed route descriptions and cumulative travel times."
        ],
        date: "November 2024"
    },
    {
        id: "grammar-constraints",
        title: "Grammar Constraints Parser Engine",
        category: "systems",
        tags: ["Python", "Compilers", "Parsers", "Algorithms"],
        desc: "A compiler engineering project that parses syntax structures and enforces context-free grammar constraints.",
        fullDesc: "A syntax validation engine that checks lexical tokens against structured context-free grammars (CFGs). Built to parse input equations or custom script languages, verifying semantic and syntactic soundness.",
        highlights: [
            "Programmed regular-expression-based lexical analyzers (lexers) producing clean token streams.",
            "Developed recursive-descent syntax parsers validating statements against strict compiler rules.",
            "Constructed Abstract Syntax Trees (ASTs) in memory to represent parsed command flows.",
            "Employed custom error recovery algorithms to point out syntax line failures to the user."
        ],
        date: "November 2024"
    },
    {
        id: "datathon-2024",
        title: "Datathon 2024 Analytics Solution",
        category: "ai-ml",
        tags: ["Data Analysis", "Jupyter", "Pandas", "Scikit-Learn"],
        desc: "A collaborative Data Analytics project developed for Datathon 2024, analyzing complex datasets to extract predictive metrics.",
        fullDesc: "A competitive data science solution. By cleaning massive, noisy datasets, this Jupyter project conducts feature engineering, exploratory data analysis (EDA), and fits classification models to solve real-world industry forecasting prompts.",
        highlights: [
            "Processed large-scale messy data by handling outliers, imputing null values, and scaling features.",
            "Conducted comprehensive visual data analytics using Seaborn and Matplotlib dashboards.",
            "Engineered predictive ensembles (Gradient Boosting, Random Forests) achieving top F1 scores.",
            "Designed interactive Power BI visualizations to communicate data stories clearly."
        ],
        date: "November 2024"
    },
    {
        id: "stock-forecasting",
        title: "Stock Price Forecasting Platform",
        category: "ai-ml",
        tags: ["Machine Learning", "Time Series", "LSTM", "Predictive ML"],
        desc: "A machine learning system employing LSTM recurrent neural networks and time-series models to forecast future asset price trends.",
        fullDesc: "A forecasting platform targeting volatile financial streams. Integrates traditional stats models (ARIMA) with deep learning networks (LSTMs) to capture both linear dependencies and complex non-linear sequence trends in historical stock prices.",
        highlights: [
            "Configured data ingestion modules utilizing Yahoo Finance APIs for historical data.",
            "Built and trained Long Short-Term Memory (LSTM) recurrent neural network configurations.",
            "Compared predictive power of deep learning models against baseline ARIMA models.",
            "Developed backtesting simulations showing potential portfolio yields based on forecast signals."
        ],
        date: "September 2024"
    }
];

// 2. DOCUMENT READY ENTRYPOINT
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileMenu();
    initTypewriter();
    initScrollReveal();
    renderProjects("all");
    initFiltersAndSearch();
    initTerminal();
    initContactForm();
    initModalControls();
    initDashboardChart();
});

// ==========================================================================
// THEME & LIGHT-DARK LOGIC
// ==========================================================================
function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlNode = document.documentElement;
    
    // Retrieve cached theme or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    htmlNode.setAttribute("data-theme", savedTheme);
    
    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlNode.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlNode.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    });
}

// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================
function initMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuBtn.innerHTML = navLinks.classList.contains("active") ? "&#10006;" : "&#9776;";
    });
    
    // Auto-close menu on clicking nav link
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.innerHTML = "&#9776;";
        });
    });
}

// ==========================================================================
// TYPEWRITER EFFECT IN HERO
// ==========================================================================
function initTypewriter() {
    const targetElement = document.getElementById("typewriter-text");
    if (!targetElement) return;
    
    const words = [
        "B.Tech CSE Student @ PES University",
        "AI/ML Engineering Enthusiast",
        "Distributed Systems Specialist",
        "Apache Kafka Streaming Dev"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            targetElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typewriterSpeed = 50; // Deletes faster
        } else {
            targetElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typewriterSpeed = 100; // Normal typing speed
        }
        
        // Handle word completion
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typewriterSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typewriterSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typewriterSpeed);
    }
    
    // Start typewriter
    type();
}

// ==========================================================================
// SCROLL REVEAL (INTERSECTION OBSERVER) & SKILLS LOAD
// ==========================================================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                
                // If it's the skills section, animate the progress bars
                if (entry.target.id === "skills" || entry.target.querySelector(".skill-bar")) {
                    animateSkillsBars(entry.target);
                }
                
                // Keep observing or unobserve? Let's unobserve to prevent repeated triggers
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => observer.observe(el));
    
    // Add scroll listener to update active navbar link
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}

// Animate the progress bars to target data levels
function animateSkillsBars(container) {
    const bars = container.querySelectorAll(".skill-bar");
    bars.forEach(bar => {
        const targetLevel = bar.getAttribute("data-level");
        bar.style.width = targetLevel;
    });
}

// ==========================================================================
// RENDER & FILTER PROJECTS
// ==========================================================================
function renderProjects(categoryFilter = "all", searchText = "") {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    // Filter logic
    const filtered = projectsData.filter(proj => {
        const matchesCategory = categoryFilter === "all" || proj.category === categoryFilter;
        
        const cleanSearch = searchText.toLowerCase().trim();
        const matchesSearch = cleanSearch === "" || 
            proj.title.toLowerCase().includes(cleanSearch) || 
            proj.desc.toLowerCase().includes(cleanSearch) || 
            proj.tags.some(tag => tag.toLowerCase().includes(cleanSearch));
            
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass reveal visible" style="grid-column: 1/-1; padding: 3rem; text-align: center; color: var(--text-muted);">
                <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 No projects found</p>
                <p style="font-size: 0.95rem;">Try adjusting your filters or search query.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach((proj, idx) => {
        const card = document.createElement("article");
        card.className = "project-card glass glass-hover reveal visible";
        card.setAttribute("data-id", proj.id);
        
        // Tags markup
        const tagsHtml = proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
        
        card.innerHTML = `
            <div class="project-card-header"></div>
            <div class="project-card-content">
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.desc}</p>
                <div class="project-footer">
                    <span class="project-link-text">
                        Learn More 
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                    <span class="project-index">PROJ_${String(idx + 1).padStart(2, '0')}</span>
                </div>
            </div>
        `;
        
        // Click listener to trigger rich detail modal
        card.addEventListener("click", () => openProjectModal(proj.id));
        grid.appendChild(card);
    });
}

function initFiltersAndSearch() {
    const tabContainer = document.getElementById("filter-tabs");
    const searchInput = document.getElementById("search-input");
    
    if (!tabContainer || !searchInput) return;
    
    const tabs = tabContainer.querySelectorAll(".filter-tab");
    
    // Category tabs click listener
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const category = tab.getAttribute("data-category");
            renderProjects(category, searchInput.value);
        });
    });
    
    // Search input dynamic matching
    searchInput.addEventListener("input", () => {
        const activeTab = tabContainer.querySelector(".filter-tab.active");
        const category = activeTab ? activeTab.getAttribute("data-category") : "all";
        renderProjects(category, searchInput.value);
    });
}

// ==========================================================================
// MODAL CONTROLS (PROJECT DETAILS PORTAL)
// ==========================================================================
function initModalControls() {
    const overlay = document.getElementById("modal-overlay");
    if (!overlay) return;
    
    // Close modal on overlay click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeProjectModal();
        }
    });
    
    // Close on Escape key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("active")) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const overlay = document.getElementById("modal-overlay");
    const card = document.getElementById("modal-card");
    
    // Format dynamic items
    const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
    const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join("");
    
    card.innerHTML = `
        <div class="modal-header">
            <h3 class="modal-title gradient-text">${project.title}</h3>
            <button class="modal-close" id="modal-close-btn" aria-label="Close details dialog">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
        <div class="modal-body">
            <div class="modal-tags">
                ${tagsHtml}
            </div>
            
            <h4 class="modal-desc-title">Project Summary</h4>
            <p class="modal-desc-text">${project.fullDesc}</p>
            
            <div class="modal-highlights">
                <h4 class="modal-highlights-title">Key Accomplishments</h4>
                <ul class="modal-highlights-list">
                    ${highlightsHtml}
                </ul>
            </div>
            
            <div class="modal-meta-grid" style="grid-template-columns: 1fr; text-align: center;">
                <div class="modal-meta-item">
                    <strong>Project Period</strong>
                    <span style="font-size: 1.15rem; color: var(--accent-1); font-weight: 700;">${project.date}</span>
                </div>
            </div>
        </div>
    `;
    
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
    
    // Register dynamic close button click listener
    document.getElementById("modal-close-btn").addEventListener("click", closeProjectModal);
}

function closeProjectModal() {
    const overlay = document.getElementById("modal-overlay");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
}

// ==========================================================================
// RETRO DEVELOPER TERMINAL CONSOLE WIDGET
// ==========================================================================
function initTerminal() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");
    const historyContainer = document.getElementById("terminal-history");
    
    if (!terminalInput || !terminalBody || !historyContainer) return;
    
    // Command logs
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const commandText = terminalInput.value.trim();
            if (commandText === "") return;
            
            processCommand(commandText);
            terminalInput.value = "";
            
            // Auto scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
    
    function logCommand(cmd) {
        const line = document.createElement("div");
        line.className = "terminal-output-line command";
        line.textContent = `visitor@ankitamuni:~$ ${cmd}`;
        historyContainer.appendChild(line);
    }
    
    function logOutput(text, type = "system") {
        const line = document.createElement("div");
        line.className = `terminal-output-line ${type}`;
        line.innerHTML = text; // innerHTML allows formatting (breaks, highlights)
        historyContainer.appendChild(line);
    }
    
    function processCommand(cmdString) {
        logCommand(cmdString);
        
        const args = cmdString.toLowerCase().split(" ");
        const primaryCommand = args[0];
        
        switch (primaryCommand) {
            case "help":
                logOutput(`
Available Commands:<br>
  <span class="highlight">about</span>      - Print summary details about Ankita Muni.<br>
  <span class="highlight">skills</span>     - List core language and structural skills.<br>
  <span class="highlight">projects</span>   - Print names and details of all available projects.<br>
  <span class="highlight">contact</span>    - Show current email, phone, and address.<br>
  <span class="highlight">whoami</span>     - Displays user permission status.<br>
  <span class="highlight">clear</span>      - Clear terminal logs history.<br>
  <span class="highlight">help</span>       - Displays this helper list.
                `);
                break;
                
            case "about":
                logOutput(`
<span class="highlight">ANKITA MUNI</span> | B.Tech Computer Science student @ PES University (CGPA: 7.89)<br>
Dedicated engineer with expertises in programming, automation, and real-time streaming pipelines.<br>
Actively seeking internships and developer roles to scale innovative products!
                `);
                break;
                
            case "skills":
                logOutput(`
<span class="highlight">Core Technical Languages:</span> Python, C, C++, SQL, R (basic), MATLAB (basic)<br>
<span class="highlight">Web Engineering:</span> HTML5, CSS3, ES6+ Javascript, Flask (Python), Streamlit<br>
<span class="highlight">Frameworks & Tools:</span> Apache Kafka, Kafka Admin, Sockets, Jupyter, Tableau, Power BI, Cisco Packet Tracer
                `);
                break;
                
            case "projects":
                let projList = `Ankita Muni's Portfolio Projects (${projectsData.length} found):<br>`;
                projectsData.forEach((p, idx) => {
                    projList += `  [${idx+1}] <span class="highlight">${p.title}</span> - ${p.desc}<br>`;
                });
                projList += "<br>Click on card boxes in the gallery to inspect detailed architecture plans!";
                logOutput(projList);
                break;
                
            case "contact":
                logOutput(`
Email: <a href="mailto:ankitamuni2005@gmail.com" class="highlight">ankitamuni2005@gmail.com</a><br>
Phone: <span class="highlight">+91 8970900660</span><br>
LinkedIn: <a href="https://www.linkedin.com/in/ankita-muni-66512331a" target="_blank" class="highlight">ankita-muni-66512331a</a><br>
GitHub: <a href="https://github.com/AnkitaMuni" target="_blank" class="highlight">AnkitaMuni</a><br>
Current Base: Outer Ring Road, Banashankari 3rd Stage, Bengaluru
                `);
                break;
                
            case "whoami":
                logOutput("visitor@ankitamuni.net - Standard Read-Only Privileges (Auditor). Welcome!", "success");
                break;
                
            case "clear":
                historyContainer.innerHTML = "";
                break;
                
            default:
                logOutput(`bash: command not found: ${primaryCommand}. Type <span class="highlight">help</span> for assistance.`, "error");
        }
    }
}

// ==========================================================================
// INTERACTIVE CONTACT FORM SUBMISSION (WITH DETAILED SIMULATED ANIMATIONS)
// ==========================================================================
function initContactForm() {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("btn-submit");
    
    if (!form || !submitBtn) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const btnText = submitBtn.querySelector("span");
        const spinner = submitBtn.querySelector(".spinner");
        
        // Put form in sending state
        submitBtn.disabled = true;
        btnText.textContent = "Encrypting & Sending...";
        spinner.style.display = "inline-block";
        submitBtn.style.background = "linear-gradient(135deg, var(--accent-3) 0%, var(--accent-2) 100%)";
        
        // Prepare form data
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const subject = document.getElementById("form-subject").value;
        const message = document.getElementById("form-message").value;
        
        const formData = {
            access_key: "b97c45e9-ab66-4c01-bc0a-b098ee556f2d", // Integrated Web3Forms Access Key
            name: name,
            email: email,
            subject: subject,
            message: `Subject: ${subject}\n\n${message}`
        };
        
        // Active fetch request to Web3Forms API
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Success! Restore state with green glowing Success
                spinner.style.display = "none";
                btnText.textContent = "Message Dispatched! ✓";
                
                const alertBox = document.createElement("div");
                alertBox.className = "glass reveal visible";
                alertBox.style.padding = "1rem";
                alertBox.style.marginTop = "1rem";
                alertBox.style.borderColor = "var(--accent-3)";
                alertBox.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
                alertBox.innerHTML = `
                    <p style="color: var(--accent-3); font-weight: 600; font-size: 0.95rem;">
                        🚀 Active API Handshake Successful! Your message has been dispatched straight to Ankita's inbox.
                    </p>
                `;
                
                form.appendChild(alertBox);
                
                // Clean up and reset form after 4 seconds
                setTimeout(() => {
                    alertBox.remove();
                    form.reset();
                    submitBtn.disabled = false;
                    btnText.textContent = "Send Message";
                    submitBtn.style.background = "";
                }, 4000);
            } else {
                throw new Error(data.message || "Failed to dispatch message.");
            }
        })
        .catch(error => {
            // Error! Restore state with red warning
            spinner.style.display = "none";
            btnText.textContent = "Dispatch Failed ✗";
            submitBtn.style.background = "var(--accent-4)";
            
            const alertBox = document.createElement("div");
            alertBox.className = "glass reveal visible";
            alertBox.style.padding = "1rem";
            alertBox.style.marginTop = "1rem";
            alertBox.style.borderColor = "var(--accent-4)";
            alertBox.style.backgroundColor = "rgba(244, 63, 94, 0.1)";
            alertBox.innerHTML = `
                <p style="color: var(--accent-4); font-weight: 600; font-size: 0.95rem;">
                    ⚠️ Dispatch error: ${error.message}. Please email me directly instead.
                </p>
            `;
            
            form.appendChild(alertBox);
            
            // Clean up and reset button after 5 seconds
            setTimeout(() => {
                alertBox.remove();
                submitBtn.disabled = false;
                btnText.textContent = "Send Message";
                submitBtn.style.background = "";
            }, 5000);
        });
    });
}

// ==========================================================================
// PORTFOLIO ANALYTICS DASHBOARD DONUT CHART (C1)
// ==========================================================================
function initDashboardChart() {
    const donutSvg = document.getElementById("donut-svg");
    const legendList = document.getElementById("dashboard-legend");
    const centerCount = document.getElementById("chart-center-count");
    const centerText = document.getElementById("chart-center-text");
    
    if (!donutSvg || !legendList) return;
    
    // 1. Group projects by category
    const categoriesInfo = {
        "systems": { name: "Systems & Security", color: "var(--accent-1)", count: 0 },
        "ai-ml": { name: "AI & Data Science", color: "#fbbf24", count: 0 }, // Neon Yellow/Gold
        "web-fullstack": { name: "Web / Fullstack", color: "var(--accent-2)", count: 0 },
        "hardware": { name: "IoT & Hardware", color: "var(--accent-3)", count: 0 }
    };
    
    // Count items
    projectsData.forEach(p => {
        if (categoriesInfo[p.category]) {
            categoriesInfo[p.category].count++;
        }
    });
    
    const totalRepos = projectsData.length;
    centerCount.textContent = totalRepos;
    
    // 2. Calculate percentages and positions
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    let accumulatedOffset = 0;
    
    // Clear old elements (except the <defs> for filter glow)
    const defs = donutSvg.querySelector("defs");
    donutSvg.innerHTML = "";
    if (defs) {
        donutSvg.appendChild(defs);
    }
    
    // Render background circle
    const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bgCircle.setAttribute("cx", "100");
    bgCircle.setAttribute("cy", "100");
    bgCircle.setAttribute("r", radius.toString());
    bgCircle.setAttribute("class", "donut-slice-bg");
    donutSvg.appendChild(bgCircle);
    
    // Render legend and donut slices
    legendList.innerHTML = "";
    
    Object.keys(categoriesInfo).forEach(catKey => {
        const cat = categoriesInfo[catKey];
        if (cat.count === 0) return;
        
        const pct = cat.count / totalRepos;
        const strokeLength = pct * circumference;
        const strokeOffset = circumference - strokeLength + accumulatedOffset;
        
        // Render slice
        const slice = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        slice.setAttribute("cx", "100");
        slice.setAttribute("cy", "100");
        slice.setAttribute("r", radius.toString());
        slice.setAttribute("class", "donut-slice");
        slice.style.stroke = cat.color;
        slice.style.strokeDasharray = `${strokeLength} ${circumference - strokeLength}`;
        slice.style.strokeDashoffset = strokeOffset.toString();
        slice.setAttribute("data-category", catKey);
        
        // Animate on scroll or page entry
        slice.style.transition = "stroke-dashoffset 1s ease-out, stroke-width 0.2s, filter 0.2s, opacity 0.2s";
        slice.style.strokeDashoffset = circumference.toString(); // Start empty
        
        donutSvg.appendChild(slice);
        
        // Trigger animation
        setTimeout(() => {
            slice.style.strokeDashoffset = strokeOffset.toString();
        }, 100);
        
        accumulatedOffset -= strokeLength;
        
        // Render Legend Item
        const legendItem = document.createElement("li");
        legendItem.className = "legend-item";
        legendItem.setAttribute("data-category", catKey);
        legendItem.style.setProperty("--legend-color", cat.color);
        
        legendItem.innerHTML = `
            <span class="legend-color-dot"></span>
            <div class="legend-info">
                <span class="legend-name">${cat.name}</span>
                <span class="legend-stats">${cat.count} Repos (${Math.round(pct * 100)}%)</span>
            </div>
        `;
        
        legendList.appendChild(legendItem);
        
        // Interactivity: Hovering & Clicking Legend and Slices
        const elementsToBind = [slice, legendItem];
        
        elementsToBind.forEach(el => {
            el.addEventListener("mouseenter", () => {
                // Highlight current slice, fade others
                document.querySelectorAll(".donut-slice").forEach(s => {
                    if (s.getAttribute("data-category") === catKey) {
                        s.style.opacity = "1";
                        s.style.strokeWidth = "22";
                    } else {
                        s.style.opacity = "0.3";
                    }
                });
                
                // Highlight legend borders
                document.querySelectorAll(".legend-item").forEach(item => {
                    if (item.getAttribute("data-category") === catKey) {
                        item.style.borderColor = cat.color;
                        item.style.boxShadow = `0 0 12px ${cat.color}22`;
                    } else {
                        item.style.opacity = "0.5";
                    }
                });
                
                // Highlight corresponding project cards in the grid!
                document.querySelectorAll(".project-card").forEach(card => {
                    const projId = card.getAttribute("data-id");
                    const proj = projectsData.find(p => p.id === projId);
                    if (proj && proj.category === catKey) {
                        card.style.borderColor = cat.color;
                        card.style.boxShadow = `0 0 15px ${cat.color}44`;
                        card.style.transform = "translateY(-6px)";
                    } else {
                        card.style.opacity = "0.3";
                    }
                });
                
                // Change center labels
                centerCount.textContent = cat.count;
                centerCount.style.color = cat.color;
                centerText.textContent = cat.name;
                centerText.style.color = cat.color;
            });
            
            el.addEventListener("mouseleave", () => {
                // Reset slices
                document.querySelectorAll(".donut-slice").forEach(s => {
                    s.style.opacity = "1";
                    s.style.strokeWidth = "16";
                });
                
                // Reset legend items
                document.querySelectorAll(".legend-item").forEach(item => {
                    item.style.borderColor = "";
                    item.style.boxShadow = "";
                    item.style.opacity = "1";
                });
                
                // Reset project cards
                document.querySelectorAll(".project-card").forEach(card => {
                    card.style.borderColor = "";
                    card.style.boxShadow = "";
                    card.style.transform = "";
                    card.style.opacity = "1";
                });
                
                // Reset center label
                centerCount.textContent = totalRepos;
                centerCount.style.color = "";
                centerText.textContent = "Total Repos";
                centerText.style.color = "";
            });
            
            el.addEventListener("click", () => {
                // Click automatically filters the project gallery below!
                const filterBtn = document.querySelector(`.filter-tab[data-category="${catKey}"]`);
                if (filterBtn) {
                    filterBtn.click();
                    // Scroll to filters
                    document.getElementById("projects-dashboard").nextElementSibling.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    });
}
