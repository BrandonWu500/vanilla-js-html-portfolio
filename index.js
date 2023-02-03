const hamburger = document.querySelector('#hamburger');
const bars = document.querySelectorAll('#hamburger div');
const menu = document.querySelector('#menu');
const hlinks = document.querySelectorAll('.hLink');
const moon = document.querySelector('#moon');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('-translate-y-full');
});

moon.addEventListener('click', () => {
  body.classList.toggle('dark');
});

hlinks.forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.toggle('-translate-y-full');
  })
);
