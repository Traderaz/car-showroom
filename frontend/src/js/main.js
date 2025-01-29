// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const ctaButton = document.querySelector('.cta-button');
const carGrid = document.querySelector('.car-grid');

// Car Inventory Data with Official Images
const carInventory = {
    porsche: {
        name: 'Porsche',
        models: [
            {
                id: 'p1',
                name: '911 GT3 RS (992)',
                variants: ['Standard', 'Weissach Package'],
                price: '£178,500',
                images: {
                    main: 'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-GT3-RS/992-GT3-RS-Exterior/992-GT3-RS-Exterior-01.jpg',
                    gallery: [
                        'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-GT3-RS/992-GT3-RS-Exterior/992-GT3-RS-Exterior-02.jpg',
                        'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-GT3-RS/992-GT3-RS-Interior/992-GT3-RS-Interior-01.jpg',
                        'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-GT3-RS/992-GT3-RS-Design/992-GT3-RS-Design-01.jpg'
                    ]
                },
                specs: {
                    year: '2024',
                    engine: '4.0L Naturally Aspirated Flat-Six',
                    power: '518 HP',
                    acceleration: '0-60 mph: 3.2s',
                    topSpeed: '184 mph',
                    transmission: '7-speed PDK'
                }
            },
            {
                id: 'p2',
                name: '911 Turbo S',
                variants: ['Coupe', 'Cabriolet'],
                price: '£165,800',
                images: {
                    main: 'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-Turbo-S/992-Turbo-S-Exterior/992-Turbo-S-Exterior-01.jpg',
                    gallery: [
                        'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-Turbo-S/992-Turbo-S-Exterior/992-Turbo-S-Exterior-02.jpg',
                        'https://assets.porsche.com/uk/-/media/Project/PCGB/PorscheWebsite/Models/911/992-Turbo-S/992-Turbo-S-Interior/992-Turbo-S-Interior-01.jpg'
                    ]
                },
                specs: {
                    year: '2024',
                    engine: '3.8L Twin-Turbo Flat-Six',
                    power: '640 HP',
                    acceleration: '0-60 mph: 2.6s',
                    topSpeed: '205 mph',
                    transmission: '8-speed PDK'
                }
            }
        ]
    },
    mclaren: {
        name: 'McLaren',
        models: [
            {
                id: 'm1',
                name: '750S',
                variants: ['Coupe', 'Spider'],
                price: '£242,000',
                images: {
                    main: 'https://cars.mclaren.com/content/dam/mclaren-automotive/models/750S/750S-coupe/Specification%20and%20Performance/750S-specification-and-performance-hero.jpg',
                    gallery: [
                        'https://cars.mclaren.com/content/dam/mclaren-automotive/models/750S/750S-coupe/Design/750S-design-hero.jpg',
                        'https://cars.mclaren.com/content/dam/mclaren-automotive/models/750S/750S-coupe/Interior/750S-interior-hero.jpg'
                    ]
                },
                specs: {
                    year: '2024',
                    engine: '4.0L Twin-Turbo V8',
                    power: '750 HP',
                    acceleration: '0-60 mph: 2.7s',
                    topSpeed: '206 mph',
                    transmission: '8-speed SSG'
                }
            },
            {
                id: 'm2',
                name: 'Artura',
                variants: ['Standard', 'Performance'],
                price: '£189,200',
                image: 'https://cdn.pixabay.com/photo/2021/09/08/16/50/mclaren-artura-6607398_1280.jpg',
                specs: {
                    year: '2024',
                    engine: '3.0L Twin-Turbo V6 Hybrid',
                    power: '671 HP',
                    acceleration: '0-60 mph: 3.0s',
                    topSpeed: '205 mph',
                    transmission: '8-speed SSG'
                }
            }
        ]
    },
    ferrari: {
        name: 'Ferrari',
        models: [
            {
                id: 'f1',
                name: 'SF90 Stradale',
                variants: ['Standard', 'Assetto Fiorano'],
                price: '£376,000',
                image: 'https://cdn.pixabay.com/photo/2021/01/21/11/09/ferrari-5937363_1280.jpg',
                specs: {
                    Year: '2024',
                    Engine: '4.0L Twin-Turbo V8 Hybrid',
                    Power: '986 HP',
                    Acceleration: '0-60 mph: 2.5s',
                    'Top Speed': '211 mph',
                    Transmission: '8-speed F1 DCT'
                }
            },
            {
                id: 'f2',
                name: '296 GTB',
                variants: ['Standard', 'Assetto Fiorano'],
                price: '£241,560',
                images: {
                    main: 'https://mediaservice.ferrari.com/image/high/car-assets/Models/296%20GTB/296%20GTB_01.jpg',
                    gallery: [
                        'https://mediaservice.ferrari.com/image/high/car-assets/Models/296%20GTB/296%20GTB_02.jpg',
                        'https://mediaservice.ferrari.com/image/high/car-assets/Models/296%20GTB/296%20GTB_03.jpg',
                        'https://mediaservice.ferrari.com/image/high/car-assets/Models/296%20GTB/296%20GTB_04.jpg'
                    ]
                },
                specs: {
                    year: '2024',
                    engine: '3.0L Twin-Turbo V6 Hybrid',
                    power: '819 HP Combined',
                    acceleration: '0-60 mph: 2.9s',
                    topSpeed: '205 mph',
                    transmission: '8-speed F1 DCT'
                }
            }
        ]
    }
};

// Navigation and Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Navigation smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link update on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the data to a server
            alert('Thank you for your message. We will contact you shortly.');
            contactForm.reset();
        });
    }

    // Floating Label Animation
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        // Add active class if input has value
        if (input.value) {
            input.classList.add('active');
        }

        input.addEventListener('focus', () => {
            input.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.classList.remove('active');
            }
        });
    });

    // CTA Buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href') && button.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(button.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Social Media Links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically open social media in new tab
            window.open(link.href, '_blank');
        });
    });

    // Footer Links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Contact Form Handler
function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message fade-in';
        successMessage.textContent = 'Thank you for your message! We will contact you soon.';
        e.target.appendChild(successMessage);
        
        // Reset form
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Remove success message after 5 seconds
        setTimeout(() => successMessage.remove(), 5000);
    }, 1500);
}

// Test Drive Booking Handler
function handleTestDriveSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Booking...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const modal = document.querySelector('.modal');
        modal.innerHTML = `
            <div class="modal-content slide-up">
                <span class="close-modal">&times;</span>
                <h2>Test Drive Scheduled!</h2>
                <p>Thank you for booking a test drive of the ${carInventory.find(car => car.id === parseInt(data.carId)).name}.</p>
                <p>Date: ${data.date}</p>
                <p>Time: ${data.time}</p>
                <p>We will contact you at ${data.email} to confirm your appointment.</p>
                <button class="cta-button" onclick="closeModal()">Close</button>
            </div>
        `;
        setupModalClose(modal);
    }, 1500);
}

// Show Test Drive Form
function showTestDriveForm(carId) {
    let car;
    // Find the car in the inventory
    Object.values(carInventory).forEach(brand => {
        brand.models.forEach(model => {
            if (model.id === carId) car = model;
        });
    });

    if (!car) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Schedule Test Drive</h2>
            <h3>${car.name}</h3>
            <form id="testDriveForm">
                <input type="hidden" name="carId" value="${car.id}">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <input type="tel" name="phone" placeholder="Your Phone" required>
                <input type="date" name="date" required min="${new Date().toISOString().split('T')[0]}">
                <select name="time" required>
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (1PM - 4PM)</option>
                    <option value="evening">Evening (5PM - 7PM)</option>
                </select>
                <button type="submit" class="cta-button">Book Test Drive</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Setup modal close functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    // Setup form submission
    const form = modal.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Test drive scheduled! We will contact you shortly to confirm.');
        modal.remove();
    };
}

// Show car details modal
function showCarDetails(carId) {
    const car = carInventory.find(car => car.id === carId);
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content slide-up">
            <span class="close-modal">&times;</span>
            <img src="${car.image}" alt="${car.name}" class="modal-car-image">
            <h2>${car.name}</h2>
            <p class="price">${car.price}</p>
            <div class="car-specs">
                ${Object.entries(car.specs).map(([key, value]) => `
                    <p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>
                `).join('')}
            </div>
            <button class="cta-button" onclick="showTestDriveForm(${car.id})">Schedule Test Drive</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    setupModalClose(modal);
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Setup modal close
function setupModalClose(modal) {
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

function initializeCarShowcase() {
    const carList = document.querySelector('.car-list');
    const carDisplay = document.querySelector('.car-display');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Initial load of all cars
    loadCarList('all');

    // Setup filter button listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Load filtered car list
            loadCarList(button.dataset.filter);
        });
    });

    function loadCarList(filter) {
        carList.innerHTML = ''; // Clear current list

        Object.entries(carInventory).forEach(([brand, data]) => {
            if (filter === 'all' || filter === brand) {
                data.models.forEach(car => {
                    const carElement = createCarListItem(car);
                    carList.appendChild(carElement);
                });
            }
        });
    }

    function createCarListItem(car) {
        const div = document.createElement('div');
        div.className = 'car-list-item';
        div.innerHTML = `
            <div class="car-list-image">
                <img src="${car.images.main}" alt="${car.name}">
            </div>
            <div class="car-list-details">
                <h3>${car.name}</h3>
                <p class="price">${car.price}</p>
                <small>${car.variants.join(' | ')}</small>
            </div>
        `;
        
        div.addEventListener('click', () => {
            displayCarDetails(car);
            // Add active class to clicked item
            document.querySelectorAll('.car-list-item').forEach(item => {
                item.classList.remove('active');
            });
            div.classList.add('active');
        });
        
        return div;
    }

    function displayCarDetails(car) {
        carDisplay.innerHTML = `
            <div class="car-gallery">
                <img src="${car.images.main}" alt="${car.name}" class="main-image">
                <div class="gallery-thumbs">
                    ${car.images.gallery.map(img => `
                        <img src="${img}" alt="${car.name}" onclick="updateMainImage(this.src)">
                    `).join('')}
                </div>
            </div>
            <div class="car-info">
                <h2>${car.name}</h2>
                <p class="price">${car.price}</p>
                
                <div class="variants">
                    <h3>Available Variants</h3>
                    <ul>
                        ${car.variants.map(variant => `
                            <li>${variant}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="specs">
                    <h3>Specifications</h3>
                    ${Object.entries(car.specs).map(([key, value]) => `
                        <p><strong>${key}:</strong> ${value}</p>
                    `).join('')}
                </div>
                
                <button class="cta-button" onclick="showTestDriveForm('${car.id}')">
                    Schedule Test Drive
                </button>
            </div>
        `;
    }
}

// Load cars into grid
function loadCars() {
    carGrid.innerHTML = carInventory.map(car => `
        <div class="car-card fade-in">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
            </div>
            <div class="car-details">
                <h3>${car.name}</h3>
                <p class="price">${car.price}</p>
                <button class="details-button" onclick="showCarDetails(${car.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

// Update main image in gallery
function updateMainImage(src) {
    document.querySelector('.main-image').src = src;
}

// Lightbox functionality
function openLightbox(img) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.src = img.src;
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    
    // Add elements to lightbox
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Show lightbox
    lightbox.style.display = 'block';
    
    // Close on click
    lightbox.onclick = function() {
        document.body.removeChild(lightbox);
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(lightbox);
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Prevent lightbox from closing when clicking the image
document.getElementById('lightbox-img').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Enhanced Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.model-image');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            images.forEach(img => {
                if (filter === 'all' || img.getAttribute('data-category') === filter) {
                    img.style.display = 'block';
                    setTimeout(() => {
                        img.classList.remove('hidden');
                    }, 10);
                } else {
                    img.classList.add('hidden');
                    setTimeout(() => {
                        img.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
});

// Enhanced scroll indicator behavior with forced hiding
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Hide scroll indicator on any scroll
    window.addEventListener('scroll', function() {
        if (scrollIndicator && window.scrollY > 100) { // Hide after 100px scroll
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
            scrollIndicator.style.display = 'none';
            scrollIndicator.remove(); // Completely remove from DOM
        }
    });
    
    // Existing filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.model-image');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            images.forEach(img => {
                if (filter === 'all' || img.getAttribute('data-category') === filter) {
                    img.style.display = 'block';
                    setTimeout(() => {
                        img.classList.remove('hidden');
                    }, 10);
                } else {
                    img.classList.add('hidden');
                    setTimeout(() => {
                        img.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
}); 