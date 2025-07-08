

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