// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollIndicator && window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
            scrollIndicator.style.display = 'none';
            scrollIndicator.remove();
        }
    });
    
    // Filter functionality
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

    // Image expansion functionality
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.modal-close');
    const images = document.querySelectorAll('.model-image img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
