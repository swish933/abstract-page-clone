const mobileMenu = document.querySelector('.mobile_menu');
const hamburgerBtn = document.querySelector('.nav_icon');

const toggleMenu = () => {
    hamburgerBtn.classList.toggle('nav_open');
    mobileMenu.classList.toggle('menu');
}

hamburgerBtn.addEventListener('click',toggleMenu);