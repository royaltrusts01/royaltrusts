document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let isScrolling = false;

// SHOW FIRST SLIDE INITIALLY
  slides[currentSlide].classList.add('active');

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 700);
  }

// SCROLL WITH MOUSE WHEEL
  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    if (e.deltaY > 0) showSlide(currentSlide + 1);
    else if (e.deltaY < 0) showSlide(currentSlide - 1);
  });

// SCROLL WITH TOUCH SWIPE (#MOBILE)
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; });
  window.addEventListener('touchend', (e) => {
    let touchEndY = e.changedTouches[0].clientY;
    if (isScrolling) return;
    if (touchStartY - touchEndY > 50) showSlide(currentSlide + 1); // SWIPE up
    else if (touchEndY - touchStartY > 50) showSlide(currentSlide - 1); // SWIPE DOWN
  });

// CONTACT POPUP
  const contactBtns = document.querySelectorAll('.contactBtn');
  const popup = document.getElementById('contactFormPopup');
  const closeBtn = document.getElementById('closeForm');

  contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target === popup) popup.style.display = 'none';
  });
});
 
// FOOTER SECTION
const footerContactBtn = document.getElementById('footerContactBtn');
const contactFormPopup = document.getElementById('contactFormPopup');
const closeForm = document.getElementById('closeForm');

footerContactBtn.addEventListener('click', function(e) {
  e.preventDefault();
  contactFormPopup.style.display = 'flex';
});

closeForm.addEventListener('click', function() {
  contactFormPopup.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === contactFormPopup) {
    contactFormPopup.style.display = 'none';
  }
});