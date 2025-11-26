// ============================================
// Wi'Tech - Interactive JavaScript
// ============================================

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  
  // Animate hamburger icon
  const spans = navbarToggle.querySelectorAll('span');
  if (navbarMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    const spans = navbarToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ============================================
// SMOOTH SCROLL WITH OFFSET
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

// ============================================
// CARD HOVER EFFECTS ENHANCEMENT
// ============================================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    this.style.transition = 'all 0.3s ease-out';
  });
  
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ============================================
// ANIMATED COUNTER FOR STATS (if needed)
// ============================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// ============================================
// PORTFOLIO ITEM INTERACTIONS
// ============================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('click', function() {
    // Could add modal or lightbox functionality here
    console.log('Portfolio item clicked:', this.querySelector('.portfolio-title').textContent);
  });
});

// ============================================
// DYNAMIC BLOB ANIMATION
// ============================================
const blobs = document.querySelectorAll('.blob');

// Add random movement to blobs
blobs.forEach((blob, index) => {
  setInterval(() => {
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    const randomScale = 0.8 + Math.random() * 0.4;
    
    blob.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
  }, 3000 + index * 1000);
});

// ============================================
// FORM VALIDATION (if forms are added)
// ============================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('scroll', debounce(() => {
  const scrolled = window.pageYOffset;
  if (heroVisual && scrolled < window.innerHeight) {
    heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, 10));

// ============================================
// INITIALIZE ON DOM LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Wi\'Tech website loaded successfully!');
  
  // Add entrance animation to hero
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = '1';
    }, 100);
  }
  
  // Preload critical images
  const criticalImages = ['assets/hero-mockup.png'];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// ============================================
// WHATSAPP BUTTON PULSE ANIMATION
// ============================================
const whatsappButton = document.querySelector('.whatsapp-sticky');

if (whatsappButton) {
  setInterval(() => {
    whatsappButton.style.animation = 'none';
    setTimeout(() => {
      whatsappButton.style.animation = 'pulse 1s ease-in-out';
    }, 10);
  }, 5000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // ESC key closes mobile menu
  if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
    const spans = navbarToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// ============================================
// ANALYTICS TRACKING (placeholder)
// ============================================
function trackEvent(category, action, label) {
  // Placeholder for Google Analytics or other tracking
  console.log('Event tracked:', { category, action, label });
  
  // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('CTA', 'click', btn.textContent);
  });
});

// Track WhatsApp clicks
if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    trackEvent('Contact', 'WhatsApp', 'Sticky Button');
  });
}
