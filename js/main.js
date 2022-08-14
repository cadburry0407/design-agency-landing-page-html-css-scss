const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
}; // grab elements from dom

//Nav styles on scroll
const scrollHeader = () => {
  const navbarElement = selectElement('#header');
  if (this.scrollY >= 15) {
    navbarElement.classList.add('activated');
  } else {
    navbarElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader);

// open menu

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

// Buttons Testimonial Control

const leftBtn = selectElement('#btn-testi-left');
const rightBtn = selectElement('#btn-testi-right');

const slider = selectElement('.testimonials__wrapper');
const sliderItem = selectElement('.testimonials__wrapper-item');

const style = window.getComputedStyle(sliderItem);
let marginRight = style.getPropertyValue('margin-right');

const marginRightNum = parseInt(marginRight.replace(/[^0-9]/g, ''));

leftBtn.addEventListener('click', () => {
  slider.scrollLeft += sliderItem.offsetWidth + marginRightNum;
});

rightBtn.addEventListener('click', () => {
  console.log('right');
  slider.scrollLeft -= sliderItem.offsetWidth + marginRightNum;
});
