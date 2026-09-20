document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('.slide')];
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const dotsBox = carousel.querySelector('.dots');

  let index = 0;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Aller à l'image ${i + 1}`);
    dot.addEventListener('click', () => show(i));
    dotsBox.appendChild(dot);
    return dot;
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle('active', n === index));
    dots.forEach((dot, n) => dot.classList.toggle('active', n === index));
  }

  prev.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));

  let startX = null;
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      show(index + (diff < 0 ? 1 : -1));
    }
    startX = null;
  });

  show(0);
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.slide img').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.closest('figure').querySelector('figcaption')?.textContent || '';
    lightbox.showModal();
  });
});

lightboxClose.addEventListener('click', () => lightbox.close());

lightbox.addEventListener('click', (e) => {
  const rect = lightbox.getBoundingClientRect();
  const outside =
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top || e.clientY > rect.bottom;
  if (outside) lightbox.close();
});
