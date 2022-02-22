'use strict';

const navbar = document.querySelector('.navbar'); // Select the HTML element
const navbarbgcolor = document.querySelector('.bgdvnav'); // Select the CSS property to change in the HTML

window.onscroll = function () {
    changeOpacity()
};

function changeOpacity() {
    let opacity = 1; // set opacity to less opaque;
    let scrolled = document.documentElement.scrollTop; // set scrolled to how many pixel is scrolled
    // change the value of opacity variable by the scrolled value
    if (scrolled <= 99) {
        opacity = 1 - (scrolled / 100);
    } else {
        opacity = 0.01
    }
    // console.log(`scrolled: ${scrolled}, opacity: ${opacity}`);
    navbar.style.background = `rgba(10,10,125,${opacity})`; // change the background opacity of the selected HTML element

    // toggle navber-dark and navbar-light theme
    if (scrolled >= 50) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light')
    } else {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark')
    }
    // console.log(navbar.classList);
}