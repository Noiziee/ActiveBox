let swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.querySelector('#menu__toggle').addEventListener('change', function (e) {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});