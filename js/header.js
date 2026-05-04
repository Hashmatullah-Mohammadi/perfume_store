// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== SCROLL EFFECT ==========
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ========== MOBILE MENU ==========
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileNavClose');
    const overlay = document.getElementById('overlay');
    
    function openMobileMenu() {
        if (mobileNav) mobileNav.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        if (mobileNav) mobileNav.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', openMobileMenu);
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // ========== SEARCH BAR ==========
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const searchClose = document.getElementById('searchClose');
    
    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            searchBar.classList.toggle('open');
        });
    }
    
    if (searchClose && searchBar) {
        searchClose.addEventListener('click', function() {
            searchBar.classList.remove('open');
        });
    }
    
    // Close search with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBar && searchBar.classList.contains('open')) {
            searchBar.classList.remove('open');
        }
    });
    
    // ========== CART COUNTER ==========
    let cartCount = 0;
    const cartBtn = document.querySelector('.cart-btn');
    const cartBadge = document.querySelector('.cart-badge');
    
    // Sample function to add to cart (call this from product buttons)
    window.addToCart = function() {
        cartCount++;
        if (cartBadge) {
            cartBadge.textContent = cartCount;
            cartBadge.style.display = 'flex';
            
            // Animation
            cartBadge.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);
        }
    };
    
    // Initialize badge
    if (cartBadge && cartCount === 0) {
        cartBadge.textContent = '0';
    }
    
    // ========== CLICK OUTSIDE TO CLOSE ==========
    document.addEventListener('click', function(e) {
        // Close mobile menu if clicking outside
        if (mobileNav && mobileNav.classList.contains('open')) {
            if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileMenu();
            }
        }
        
        // Close search if clicking outside
        if (searchBar && searchBar.classList.contains('open')) {
            if (!searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBar.classList.remove('open');
            }
        }
    });
    
    // ========== ACTIVE LINK ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
    console.log('Header.js loaded successfully');
});