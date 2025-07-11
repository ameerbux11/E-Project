  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("filterForm");
    const resetBtn = document.getElementById("resetFilter");
    const cards = document.querySelectorAll(".card");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const size = document.querySelector('input[name="size"]:checked')?.value?.toLowerCase();
      const character = document.querySelector('input[name="character"]:checked')?.value?.toLowerCase();
      const color = document.querySelector('input[name="color"]:checked')?.value?.toLowerCase();
      const geo = document.querySelector('input[name="geo"]:checked')?.value?.toLowerCase();

      cards.forEach(card => {
        const cardSize = card.dataset.size?.toLowerCase();
        const cardCharacter = card.dataset.character?.toLowerCase();
        const cardColor = card.dataset.color?.toLowerCase();
        const cardGeo = card.dataset.geo?.toLowerCase();

        const matchSize = !size || cardSize === size;
        const matchCharacter = !character || cardCharacter === character;
        const matchColor = !color || cardColor === color;
        const matchGeo = !geo || cardGeo === geo;

        if (matchSize && matchCharacter && matchColor && matchGeo) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    resetBtn.addEventListener("click", function () {
      // Show all cards again
      cards.forEach(card => card.style.display = "block");
    });
  });  
  // document.getElementById('filterForm').addEventListener('submit', function(e) {
  //   e.preventDefault();

  //   const formData = new FormData(this);
  //   const filters = {
  //     size: formData.get('size'),
  //     character: formData.get('character'),
  //     color: formData.get('color'),
  //     geo: formData.get('geo')
  //   };

  //   const cards = document.querySelectorAll('.gallery .card');

  //   cards.forEach(card => {
  //     const matchSize = !filters.size || card.dataset.size === filters.size;
  //     const matchChar = !filters.character || card.dataset.character === filters.character;
  //     const matchColor = !filters.color || card.dataset.color === filters.color;
  //     const matchGeo = !filters.geo || card.dataset.geo === filters.geo;

  //     if (matchSize && matchChar && matchColor && matchGeo) {
  //       card.style.display = 'block';
  //     } else {
  //       card.style.display = 'none';
  //     }
  //   });
  // });

  // document.getElementById('resetFilter').addEventListener('click', () => {
  //   const cards = document.querySelectorAll('.gallery .card');
  //   cards.forEach(card => card.style.display = 'block');
  // });

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
