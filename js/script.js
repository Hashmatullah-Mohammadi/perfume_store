// ========== HERO ADVANCED INTERACTIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // 3D Mouse Move Effect
    const perfumeCard = document.querySelector('.perfume-card__inner');
    const heroSection = document.querySelector('.hero-advanced');
    
    if (perfumeCard && heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const rotateX = (y - 0.5) * 20;
            const rotateY = (x - 0.5) * -20;
            
            perfumeCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        heroSection.addEventListener('mouseleave', function() {
            perfumeCard.style.transform = 'rotateX(0) rotateY(0)';
        });
    }
    
    // Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 100;
    
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / speed;
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    }
    
    // Intersection Observer for counters
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
    
    // Button Actions
    const shopBtn = document.getElementById('shopNowBtn');
    const reelBtn = document.getElementById('showReelBtn');
    
    if (shopBtn) {
        shopBtn.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }
    
    if (reelBtn) {
        reelBtn.addEventListener('click', () => {
            alert('ریل محصولات به زودی...');
        });
    }
    
    // Smooth scroll to next section
    const scrollIndicator = document.querySelector('.hero-advanced__scroll');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});



// ========== HERO PARTICLE ANIMATION ==========
function createHeroParticles() {
    const heroSection = document.querySelector('.hero-advanced');
    if (!heroSection) return;
    
    // چک کن که قبلاً اضافه نشده باشد
    if (document.querySelector('.hero-particles-layer')) return;
    
    const particlesLayer = document.createElement('div');
    particlesLayer.className = 'hero-particles-layer';
    heroSection.style.position = 'relative';
    heroSection.insertBefore(particlesLayer, heroSection.firstChild);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        const size = Math.random() * 100 + 40;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesLayer.appendChild(particle);
    }
}

// بارگذاری وقتی صفحه کامل شد
document.addEventListener('DOMContentLoaded', function() {
    createHeroParticles();
});



//  brands slider js start
// ========== SWIPER BRANDS SLIDER ==========
document.addEventListener('DOMContentLoaded', function() {
    const brandSwiper = new Swiper('.brandSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 25,
        loop: true,
        centeredSlides: false,
        speed: 800,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        
        // Autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 2.2,
                spaceBetween: 18,
            },
            768: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4.5,
                spaceBetween: 25,
            },
            1280: {
                slidesPerView: 5.5,
                spaceBetween: 30,
            },
        },
        
        // Effects
        effect: 'slide',
        grabCursor: true,
        
        // RTL support
        rtl: true,
    });
    
    console.log('Brand Swiper initialized');
});
//  brands slider js end




// ========== BEST SELLERS INTERACTIONS ==========
// The addToCart function is already defined in header.js
// Add animation for cart button
document.querySelectorAll('.product-card__btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});




// ========== COUNTDOWN TIMER ==========
function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 0);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();





// ========== TESTIMONIALS SWIPER ==========
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.testimonialSwiper .swiper-button-next',
        prevEl: '.testimonialSwiper .swiper-button-prev',
    },
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    rtl: true,
});





// ========== NEWSLETTER FORM ==========
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            alert(`با تشکر از شما، ایمیل ${email} با موفقیت ثبت شد.`);
            emailInput.value = '';
        } else {
            alert('لطفا ایمیل خود را وارد کنید.');
        }
    });
}



// ========== PRODUCTS FILTER ==========
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card-page');
    const searchInput = document.getElementById('searchProduct');
    const sortSelect = document.getElementById('sortProducts');
    const productsGrid = document.getElementById('productsGridPage');

    // Filter function
    function filterProducts() {
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        const searchTerm = searchInput?.value.toLowerCase() || '';

        products.forEach(product => {
            const category = product.dataset.category;
            const productName = product.querySelector('.product-name')?.innerText.toLowerCase() || '';
            const productBrand = product.querySelector('.product-brand')?.innerText.toLowerCase() || '';

            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            const matchesSearch = productName.includes(searchTerm) || productBrand.includes(searchTerm);

            if (matchesFilter && matchesSearch) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Filter buttons click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    // Sort function
    function sortProducts() {
        const sortValue = sortSelect?.value;
        const productsArray = Array.from(products);

        if (sortValue === 'price-low') {
            productsArray.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.current')?.innerText.replace(/,/g, '') || 0);
                const priceB = parseInt(b.querySelector('.current')?.innerText.replace(/,/g, '') || 0);
                return priceA - priceB;
            });
        } else if (sortValue === 'price-high') {
            productsArray.sort((a, b) => {
                const priceA = parseInt(a.querySelector('.current')?.innerText.replace(/,/g, '') || 0);
                const priceB = parseInt(b.querySelector('.current')?.innerText.replace(/,/g, '') || 0);
                return priceB - priceA;
            });
        } else if (sortValue === 'popular') {
            productsArray.sort((a, b) => {
                const ratingA = parseInt(a.querySelector('.product-rating span:last-child')?.innerText.replace(/[()]/g, '') || 0);
                const ratingB = parseInt(b.querySelector('.product-rating span:last-child')?.innerText.replace(/[()]/g, '') || 0);
                return ratingB - ratingA;
            });
        }

        if (sortValue !== 'default' && productsGrid) {
            productsArray.forEach(product => productsGrid.appendChild(product));
        }
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }

    // Initialize
    filterProducts();
});




// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname')?.value;
        const email = document.getElementById('email')?.value;
        const subject = document.getElementById('subject')?.value;
        const message = document.getElementById('message')?.value;
        
        if (fullname && email && subject && message) {
            alert(`با تشکر ${fullname}، پیام شما با موفقیت ارسال شد.`);
            contactForm.reset();
        } else {
            alert('لطفا تمام فیلدها را پر کنید.');
        }
    });
}




// ========== PRODUCT DETAIL PAGE ==========
document.addEventListener('DOMContentLoaded', function() {
    // Gallery thumbnails
    const thumbs = document.querySelectorAll('.thumb');
    const mainImage = document.getElementById('mainImage');
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const imgSrc = this.dataset.img;
            mainImage.src = imgSrc;
            
            thumbs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Quantity selector
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const qtyInput = document.getElementById('productQty');
    
    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) {
                qtyInput.value = val - 1;
            }
        });
        
        qtyPlus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val < 10) {
                qtyInput.value = val + 1;
            }
        });
    }
    
    // Size buttons
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
    
    // Add to cart button
    const addToCartDetail = document.getElementById('addToCartDetail');
    if (addToCartDetail) {
        addToCartDetail.addEventListener('click', () => {
            const qty = qtyInput ? qtyInput.value : 1;
            if (window.addToCart) {
                for(let i = 0; i < parseInt(qty); i++) {
                    window.addToCart();
                }
            }
            alert(`${qty} عدد محصول به سبد خرید اضافه شد.`);
        });
    }
});





// ========== CART PAGE FUNCTIONS ==========
function updateCartTotal() {
    const totals = document.querySelectorAll('.cart-item__total');
    let subtotal = 0;
    totals.forEach(total => {
        const priceText = total.innerText.replace(/[^0-9]/g, '');
        subtotal += parseInt(priceText) || 0;
    });
    
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('totalAmount');
    
    if (subtotalEl) subtotalEl.innerText = subtotal.toLocaleString() + ' تومان';
    if (totalEl) totalEl.innerText = subtotal.toLocaleString() + ' تومان';
}

// Quantity buttons
document.querySelectorAll('.cart-item').forEach(item => {
    const decrBtn = item.querySelector('.qty-decr');
    const incrBtn = item.querySelector('.qty-incr');
    const qtyInput = item.querySelector('input');
    const priceEl = item.querySelector('.cart-item__price');
    const totalEl = item.querySelector('.cart-item__total');
    
    if (decrBtn && incrBtn && qtyInput && priceEl && totalEl) {
        const price = parseInt(priceEl.innerText.replace(/[^0-9]/g, ''));
        
        decrBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) {
                qtyInput.value = val - 1;
                const newTotal = price * (val - 1);
                totalEl.innerText = newTotal.toLocaleString() + ' تومان';
                updateCartTotal();
            }
        });
        
        incrBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val < 10) {
                qtyInput.value = val + 1;
                const newTotal = price * (val + 1);
                totalEl.innerText = newTotal.toLocaleString() + ' تومان';
                updateCartTotal();
            }
        });
    }
});

// Remove buttons
document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const cartItem = this.closest('.cart-item');
        cartItem.remove();
        updateCartTotal();
        
        // Show empty cart if no items
        const remainingItems = document.querySelectorAll('.cart-item').length;
        const cartContent = document.getElementById('cartContent');
        const cartEmpty = document.getElementById('cartEmpty');
        
        if (remainingItems === 0 && cartContent && cartEmpty) {
            cartContent.style.display = 'none';
            cartEmpty.style.display = 'block';
        }
    });
});

// Coupon code
const couponBtn = document.querySelector('.summary__coupon button');
if (couponBtn) {
    couponBtn.addEventListener('click', () => {
        const couponInput = document.querySelector('.summary__coupon input');
        if (couponInput.value === 'LUXE10') {
            alert('کد تخفیف با موفقیت اعمال شد. ۱۰٪ تخفیف دریافت کردید.');
            const totalEl = document.getElementById('totalAmount');
            if (totalEl) {
                const currentTotal = parseInt(totalEl.innerText.replace(/[^0-9]/g, ''));
                const newTotal = currentTotal * 0.9;
                totalEl.innerText = newTotal.toLocaleString() + ' تومان';
            }
        } else if (couponInput.value) {
            alert('کد تخفیف نامعتبر است.');
        } else {
            alert('لطفا کد تخفیف را وارد کنید.');
        }
        couponInput.value = '';
    });
}

// Checkout
const checkoutBtn = document.querySelector('.checkout-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        alert('در حال انتقال به درگاه پرداخت امن...');
    });
}

// Initialize
updateCartTotal();