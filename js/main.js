// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Mobile menu stub
  function toggleMenu() {
    // Could be expanded to show a mobile drawer
    const links = document.querySelector('.nav-links');
    if (links) {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '72px';
      links.style.left = '0'; links.style.right = '0';
      links.style.background = 'rgba(250,248,244,0.98)';
      links.style.padding = '20px clamp(24px,5vw,80px)';
      links.style.borderBottom = '1px solid rgba(61,53,48,0.12)';
      links.style.backdropFilter = 'blur(12px)';
      links.style.gap = '20px';
    }
  }

  // Smooth scroll + close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (links && window.innerWidth < 900) {
        links.style.display = 'none';
      }
    });
  });