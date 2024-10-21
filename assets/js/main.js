// Mobile navbar
const mobileNavbar = document.querySelector('.mobile-navbar');
const navLinks = document.querySelector('.nav-links'); 

mobileNavbar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
