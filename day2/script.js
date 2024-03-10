// script.js
const nav = document.querySelector('.nav');

function toggleMenu() {
  nav.classList.toggle('open');
}

// Assuming you have a button to trigger the toggle
const container = document.querySelector('.container');
container.addEventListener('click', toggleMenu);
