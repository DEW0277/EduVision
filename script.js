document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  // Smooth scrolling for specific anchor links on the same page (optional)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length === 1) return;

      // Only scroll if the target exists on THIS page
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Text appears once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach((el) => observer.observe(el));

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      heroBg.style.transform = `translateY(${scrollValue * 0.3}px)`;
    });
  }
});

function toggleNode(element) {
  // Boshqa barcha ochilgan bloklarni yopish (ixtiyoriy)
  const allNodes = document.querySelectorAll('.node');
  allNodes.forEach(node => {
    if (node !== element) {
      node.classList.remove('active');
    }
  });

  // Tanlangan blokni ochish yoki yopish
  element.classList.toggle('active');
}