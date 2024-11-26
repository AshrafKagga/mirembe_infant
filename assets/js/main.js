// Select the mobile menu icon and navigation menu
const mobileNavbar = document.querySelector('.mobile-navbar');
const nav = document.querySelector('nav');

// Add a click event listener to the mobile menu icon
mobileNavbar.addEventListener('click', () => {
  nav.classList.toggle('show');
});
