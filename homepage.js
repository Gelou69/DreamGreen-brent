document.addEventListener('DOMContentLoaded', () => {
  // Carousel Functionality
  const carouselSlide = document.getElementById('carouselSlide');
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  let counter = 0;
  let size = images[0].clientWidth;

  function updateSlide() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
      counter = images.length - 1;
    } else {
      counter--;
    }
    updateSlide();
  });

  window.addEventListener('resize', () => {
    size = images[0].clientWidth;
    updateSlide();
  });

  // Modal and 3D Effect Functionality
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.querySelector('.close-btn');
  const categoryImages = document.querySelectorAll('.category-img img');
  const modalImageContainer = document.getElementById('modal-image-container');

  // Open the modal with the clicked image
  categoryImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modalTitle.textContent = img.alt;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      
      // Reset transform on modal open
      modalImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });

  // Close the modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // 3D effect on mouse move
  modalImageContainer.addEventListener('mousemove', (e) => {
    const {
      offsetX,
      offsetY,
      target
    } = e;
    const {
      clientWidth: width,
      clientHeight: height
    } = target;

    const rotY = (offsetX / width - 0.5) * 40; // Adjust multiplier for effect intensity
    const rotX = (offsetY / height - 0.5) * -40; // Adjust multiplier for effect intensity

    modalImage.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
  });

  modalImageContainer.addEventListener('mouseleave', () => {
    modalImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});
 // Placeholder script for carousel functionality
    document.addEventListener('DOMContentLoaded', () => {
      const carouselSlide = document.getElementById('carouselSlide');
      const images = document.querySelectorAll('.carousel-image');
      const prevBtn = document.getElementById('carouselPrevBtn');
      const nextBtn = document.getElementById('carouselNextBtn');
      let counter = 0;
      let size = images[0].clientWidth;
      function updateSlide() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
      nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) {
          counter = 0; // Loop to start
        } else {
          counter++;
        }
        updateSlide();
      });
      prevBtn.addEventListener('click', () => {
        if (counter <= 0) {
          counter = images.length - 1; // Loop to end
        } else {
          counter--;
        }
        updateSlide();
      });
      // Recalculate size on window resize
      window.addEventListener('resize', () => {
        size = images[0].clientWidth;
        updateSlide();
      });
    });