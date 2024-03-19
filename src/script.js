const menu = document.querySelector('.nav-2');
const links = document.querySelectorAll('.menu-nav-links');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const bars = document.querySelector('.fa-bars');

const showMenu = () => {
    menu.classList.toggle('show');
}

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove('show');
    });
});

window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.classList.toggle('nav-only');
        logo.classList.toggle('text-nav');
        bars.classList.toggle('text-nav');
    } else {
        nav.classList.remove('bg-white');
        logo.classList.remove('text-[#1d9f94]');
    }
}