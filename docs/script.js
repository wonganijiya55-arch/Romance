// Smooth scroll behavior for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to buttons
  const ctaButton = document.querySelector('.cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      // Always redirect to WhatsApp
      window.open('https://wa.me/0222809920', '_blank');
    });
  }

  // Add hover effects to interactive elements
  const reasonCards = document.querySelectorAll('.reason-card');
  reasonCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });

  const memoryCards = document.querySelectorAll('.memory-card');
  memoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });

  // Handle button hover animation
  ctaButton.addEventListener('mouseenter', function() {
    const heart = this.querySelector('.button-heart');
    if (heart) {
      heart.style.animation = 'heartbeat 2s ease-in-out infinite';
    }
  });

  ctaButton.addEventListener('mouseleave', function() {
    const heart = this.querySelector('.button-heart');
    if (heart) {
      heart.style.animation = 'pulse 1s ease-in-out infinite';
    }
  });
});

/**
 * Show contact prompt when CTA button is clicked
 * Customize this function based on your needs (e.g., open modal, redirect, etc.)
 */
function showContactPrompt() {
  // Option 1: Simple alert (customize with your preferred method)
  alert('💌 Let\'s talk! Send me a message or reach out on social media.');
  
  // Option 2: You can customize this to:
  // - Open an email (uncomment below and set your email)
  // window.location.href = 'mailto:your-email@example.com';
  
  // - Open WhatsApp (uncomment below and set your phone number)
  // window.open('https://wa.me/1234567890');
  
  // - Open a contact form in a modal
  // openContactModal();
}

/**
 * Intersection Observer for lazy loading animations
 * This will trigger animations when elements come into view
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation classes when elements come into view
      if (entry.target.classList.contains('reason-card')) {
        entry.target.style.animation = 'fade-in 0.6s ease-out forwards';
      }
      if (entry.target.classList.contains('memory-card')) {
        entry.target.style.animation = 'fade-in 0.6s ease-out forwards';
      }
      
      // Stop observing once animation is triggered
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.reason-card, .memory-card').forEach(el => {
  observer.observe(el);
});

/**
 * Add parallax effect to background blobs (optional)
 * This creates a subtle depth effect
 */
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero && window.innerHeight > 0) {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
      // Apply parallax at different speeds
      const speed = 0.5 + (index * 0.1);
      blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
});

/**
 * Add keyboard accessibility
 * Allow Enter key to activate buttons
 */
document.querySelectorAll('.reason-card, .memory-card, .cta-button').forEach(element => {
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (this.classList.contains('cta-button')) {
        this.click();
      }
    }
  });
});

/**
 * Optional: Add confetti effect on button click
 * Uncomment to add celebratory confetti
 */
function triggerConfetti() {
  // Simple confetti simulation (you can integrate a library for more effects)
  const colors = ['#f43f5e', '#f97316', '#fb7185', '#fda4af'];
  
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.fontSize = Math.random() * 10 + 10 + 'px';
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.zIndex = '9999';
    confetti.textContent = '❤️';
    confetti.style.animation = 'fall 3s linear forwards';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Add the fall animation for confetti
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
