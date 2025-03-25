// Theme Toggle Functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL without page reload
            history.pushState(null, null, targetId);
        }
    });
});

// Stats Popup Functionality
const statsBtn = document.getElementById('stats-btn');
const statsPopup = document.getElementById('stats-popup');
const closePopup = document.querySelector('.close-popup');

statsBtn.addEventListener('click', () => {
    statsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate stats counters
    animateValue('.stat-value');
    
    // Initialize chart
    initGrowthChart();
});

closePopup.addEventListener('click', () => {
    statsPopup.classList.remove('active');
    document.body.style.overflow = '';
});

// Close popup when clicking outside
statsPopup.addEventListener('click', (e) => {
    if (e.target === statsPopup) {
        statsPopup.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Animate counter values
function animateValue(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 1500;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    });
}

// Initialize Growth Chart
function initGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
            datasets: [{
                label: 'Marché de l\'IA Générative (en milliards $)',
                data: [1.2, 2.5, 4.8, 11.3, 18.7, 28.4, 39.2, 46.5, 51.8],
                borderColor: '#6e48aa',
                backgroundColor: 'rgba(110, 72, 170, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + 'B$';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + 'B$';
                        }
                    }
                }
            }
        }
    });
}

// Carousel Functionality
const carouselContainer = document.querySelector('.carousel-container');
const toolCards = document.querySelectorAll('.tool-card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;

// Create dots
toolCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Update carousel
function updateCarousel() {
    const cardWidth = toolCards[0].offsetWidth + 24; // Include gap
    carouselContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
    });
    
    // Update active classes
    toolCards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Navigation functions
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % toolCards.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + toolCards.length) % toolCards.length;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance carousel
let carouselInterval = setInterval(nextSlide, 5000);

// Pause on hover
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 5000);
});

// Accordion Functionality
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const isActive = btn.classList.contains('active');
        
        // Close all accordions first
        accordionBtns.forEach(otherBtn => {
            otherBtn.classList.remove('active');
            const otherContent = otherBtn.nextElementSibling;
            otherContent.style.maxHeight = null;
        });
        
        // Open current one if it wasn't active
        if (!isActive) {
            btn.classList.add('active');
            const content = btn.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Code Tabs Functionality
const codeTabs = document.querySelectorAll('.code-tab');

codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        const tabsContainer = tab.closest('.code-tabs');
        const contentContainer = tab.closest('.code-example').querySelector('.code-content');
        
        // Update active tab
        tabsContainer.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        contentContainer.querySelectorAll('.code-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(`${tabId}-pane`).classList.add('active');
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    // Simple validation
    if (emailInput.value && emailInput.value.includes('@')) {
        alert('Merci pour votre inscription ! Vous recevrez bientôt nos actualités.');
        emailInput.value = '';
    } else {
        alert('Veuillez entrer une adresse email valide.');
    }
});

// Initialize Future Chart
document.addEventListener('DOMContentLoaded', function() {
    const futureCtx = document.getElementById('futureChart').getContext('2d');
    
    new Chart(futureCtx, {
        type: 'bar',
        data: {
            labels: ['Productivité', 'Prototypage', 'Debugging', 'Documentation'],
            datasets: [{
                label: 'Impact actuel',
                data: [55, 70, 40, 65],
                backgroundColor: 'rgba(110, 72, 170, 0.7)',
                borderColor: 'rgba(110, 72, 170, 1)',
                borderWidth: 1
            }, {
                label: 'Impact prévu (2026)',
                data: [80, 90, 75, 85],
                backgroundColor: 'rgba(157, 80, 187, 0.7)',
                borderColor: 'rgba(157, 80, 187, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.impact-card, .timeline-item, .tool-card').forEach(el => {
    observer.observe(el);
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});