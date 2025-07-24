document.addEventListener('DOMContentLoaded', () => {
  // Intro animation removal
  setTimeout(() => {
    document.querySelector('.intro-animation').style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 2000);

  // Typed.js initialization
  const typed = new Typed('#element', {
    strings: ['Full Stack Web Developer', 'frontend Developer', 'Backend Developer', 'In one word Web Developer', 'UI Designer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    startDelay: 3500
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Back to top functionality
  document.getElementById('backToTop').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hamburger menu toggle
  // const hamburger = document.getElementById('hamburger');
  // const navLinks = document.getElementById('nav-links');
  // const navCta = document.getElementById('nav-cta');

  // hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle('active');
  //   navLinks.classList.toggle('active');
  // });

  // // Close mobile menu when clicking a link
  // document.querySelectorAll('.nav-links a, nav-cta a').forEach(link => {
  //   link.addEventListener('click', () => {
  //     hamburger.classList.remove('active');
  //     navLinks.classList.remove('active');
  //     navCta.classList.remove('active');
  //   });
  // });


  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Show loading spinner
      document.getElementById('loadingSpinner').style.display = 'block';
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          contactForm.reset();
          document.getElementById('successMessage').style.display = 'block';
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        document.getElementById('loadingSpinner').style.display = 'none';
      }
    });
  }

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
// Animate progress bars when section comes into view
document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-level');
      bar.style.width = targetWidth;
    });
  };

  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(document.querySelector('.skills-section'));
});
// Add this to your main script
async function checkAdminStatus() {
  try {
    const res = await fetch('/api/login', { credentials: 'include' });
    if (res.ok) {
      document.getElementById('adminLink').style.display = 'block';
    }
  } catch (err) {
    // Not logged in
  }
}

document.addEventListener('DOMContentLoaded', checkAdminStatus);
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navCta = document.getElementById('nav-cta');

  // Debugging: Check if elements exist
  console.log('Hamburger:', hamburger);
  console.log('NavLinks:', navLinks);
  console.log('NavCTA:', navCta);

  // Toggle menu function
  const toggleMenu = () => {
    const isOpen = navLinks.classList.contains('active');
    navLinks.classList.toggle('active', !isOpen);
    hamburger.classList.toggle('active', !isOpen);
    navCta.classList.toggle('active', !isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    
    // Debugging
    console.log('Menu toggled:', !isOpen ? 'OPEN' : 'CLOSED');
  };

  // Hamburger click event
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking on links
  document.querySelectorAll('.nav-links a, .nav-cta a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('#navbar') && 
        !e.target.closest('.nav-cta')) {
      toggleMenu();
    }
  });