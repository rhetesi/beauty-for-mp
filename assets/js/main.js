'use strict';

const navbar = document.querySelector('.navbar'); // Select the HTML element
const navbarbgcolor = document.querySelector('.bgdvnav'); // Select the CSS property to change in the HTML

window.onscroll = function () {
    changeOpacity()
};

function changeOpacity() {
    let opacity = 1;
    let scrolled = document.documentElement.scrollTop;
    if (scrolled <= 99) {
        opacity = 1 - (scrolled / 100);
    } else {
        opacity = 0.01
    }
    // console.log(`scrolled: ${scrolled}, opacity: ${opacity}`);
    navbar.style.background = `rgba(10,10,125,${opacity})`;
    if (scrolled >= 50) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light')
    } else {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark')
    }
    // console.log(navbar.classList);
}