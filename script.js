  
  document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const filters = {
      size: formData.get('size'),
      character: formData.get('character'),
      color: formData.get('color'),
      geo: formData.get('geo')
    };

    const cards = document.querySelectorAll('.gallery .card');

    cards.forEach(card => {
      const matchSize = !filters.size || card.dataset.size === filters.size;
      const matchChar = !filters.character || card.dataset.character === filters.character;
      const matchColor = !filters.color || card.dataset.color === filters.color;
      const matchGeo = !filters.geo || card.dataset.geo === filters.geo;

      if (matchSize && matchChar && matchColor && matchGeo) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  document.getElementById('resetFilter').addEventListener('click', () => {
    const cards = document.querySelectorAll('.gallery .card');
    cards.forEach(card => card.style.display = 'block');
  });

  // AOS.init({
  //   duration: 1000,
  //   once: true
  // });

  // // Accordion functionality
  // document.querySelectorAll('.accordion-header').forEach(header => {
  //   header.addEventListener('click', () => {
  //     const item = header.parentElement;
  //     item.classList.toggle('active');
  //   });
  // });

  // Accordion Toggle
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });

  AOS.init({
    duration: 2000,
    once: true
  });
const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });
