// Additional Portfolio Functionality
// This file demonstrates advanced JavaScript features for the portfolio

class PortfolioManager {
    constructor() {
        this.currentSection = 'home';
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupScrollSpy();
        this.initializeThemeToggle();
    }

    setupEventListeners() {
        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-section]')) {
                this.navigateToSection(e.target.dataset.section);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Form enhancements
        this.setupFormEnhancements();
    }

    navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            this.updateActiveNavItem(sectionId);
        }
    }

    updateActiveNavItem(sectionId) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.currentSection = entry.target.id;
                    this.updateActiveNavItem(entry.target.id);
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }

    initializeAnimations() {
        // Staggered animation for skill tags
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.05}s`;
        });

        // Parallax scrolling effect
        window.addEventListener('scroll', this.handleParallax.bind(this));

        // Mouse movement effects
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    handleMouseMove(e) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    }

    setupFormEnhancements() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            // Real-time validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('input', this.validateField.bind(this));
            });

            // Auto-resize textarea
            const textarea = contactForm.querySelector('textarea');
            if (textarea) {
                textarea.addEventListener('input', () => {
                    textarea.style.height = 'auto';
                    textarea.style.height = textarea.scrollHeight + 'px';
                });
            }
        }
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove existing validation classes
        field.classList.remove('valid', 'invalid');
        
        if (value === '') {
            field.classList.add('invalid');
            return false;
        }
        
        // Email validation
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) {
                field.classList.add('valid');
                return true;
            } else {
                field.classList.add('invalid');
                return false;
            }
        }
        
        field.classList.add('valid');
        return true;
    }

    initializeThemeToggle() {
        // Create theme toggle button
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            box-shadow: var(--shadow);
            transition: var(--transition);
        `;

        document.body.appendChild(themeToggle);

        // Theme toggle functionality
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            
            // Save theme preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    closeMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        const mobileBtn = document.getElementById('mobileMenuBtn');
        
        if (navMenu && mobileBtn) {
            navMenu.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
            this.isMenuOpen = false;
        }
    }
}

// Project Filter Functionality
class ProjectFilter {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadProjects();
        this.createFilterButtons();
        this.setupEventListeners();
    }

    loadProjects() {
        // This would typically load from an API or data source
        this.projects = [
            {
                id: 1,
                title: "E-Commerce Platform",
                category: "web",
                technologies: ["React", "Node.js", "MongoDB"]
            },
            {
                id: 2,
                title: "Mobile Banking App",
                category: "mobile",
                technologies: ["React Native", "Node.js"]
            },
            {
                id: 3,
                title: "AI Chatbot",
                category: "ai",
                technologies: ["Python", "TensorFlow", "Flask"]
            }
        ];
        this.filteredProjects = [...this.projects];
    }

    createFilterButtons() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'project-filters';
        filterContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        `;

        const filters = [
            { key: 'all', label: 'All Projects' },
            { key: 'web', label: 'Web Development' },
            { key: 'mobile', label: 'Mobile Apps' },
            { key: 'ai', label: 'AI/ML' }
        ];

        filters.forEach(filter => {
            const button = document.createElement('button');
            button.textContent = filter.label;
            button.className = `filter-btn ${filter.key === 'all' ? 'active' : ''}`;
            button.dataset.filter = filter.key;
            button.style.cssText = `
                padding: 0.5rem 1rem;
                border: 2px solid var(--primary-color);
                background: ${filter.key === 'all' ? 'var(--primary-color)' : 'transparent'};
                color: ${filter.key === 'all' ? 'white' : 'var(--primary-color)'};
                border-radius: 2rem;
                cursor: pointer;
                transition: var(--transition);
                font-weight: 500;
            `;
            filterContainer.appendChild(button);
        });

        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const container = projectsSection.querySelector('.container');
            container.insertBefore(filterContainer, container.querySelector('.projects-grid'));
        }
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                this.filterProjects(e.target.dataset.filter);
                this.updateActiveFilter(e.target);
            }
        });
    }

    filterProjects(category) {
        this.currentFilter = category;
        
        if (category === 'all') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(project => 
                project.category === category
            );
        }
        
        this.renderProjects();
    }

    updateActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.background = 'transparent';
            btn.style.color = 'var(--primary-color)';
        });
        
        activeButton.classList.add('active');
        activeButton.style.background = 'var(--primary-color)';
        activeButton.style.color = 'white';
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            projectsGrid.innerHTML = this.filteredProjects.map(project => `
                <div class="project-card fade-in">
                    <div class="project-image">
                        ${this.getProjectIcon(project.category)}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    getProjectIcon(category) {
        const icons = {
            web: '🌐',
            mobile: '📱',
            ai: '🤖'
        };
        return icons[category] || '💻';
    }
}

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }

    init() {
        this.measurePageLoad();
        this.measureScrollPerformance();
        this.setupResourceMonitoring();
    }

    measurePageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            this.metrics.pageLoadTime = loadTime;
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });
    }

    measureScrollPerformance() {
        let scrollStart = 0;
        let scrollEnd = 0;
        
        window.addEventListener('scrollstart', () => {
            scrollStart = performance.now();
        });
        
        window.addEventListener('scrollend', () => {
            scrollEnd = performance.now();
            const scrollDuration = scrollEnd - scrollStart;
            this.metrics.scrollDuration = scrollDuration;
        });
    }

    setupResourceMonitoring() {
        if ('performance' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'resource') {
                        console.log(`Resource loaded: ${entry.name} in ${entry.duration.toFixed(2)}ms`);
                    }
                }
            });
            observer.observe({ entryTypes: ['resource'] });
        }
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    new ProjectFilter();
    new PerformanceMonitor();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioManager, ProjectFilter, PerformanceMonitor };
}
