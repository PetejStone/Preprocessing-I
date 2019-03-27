const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('nav');
const heading = document.querySelector('#heading');
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  nav.classList.toggle("slide-down");
  heading.classList.toggle("slide-up");
});
