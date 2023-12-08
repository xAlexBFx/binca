"use strict";

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const navAboutUsA = document.getElementById("nav-about-us-a")

let preScrollPost = window.scrollY;

window.addEventListener("scroll", function () {
    let currentScrollPos = window.scrollY;
    if (preScrollPost > currentScrollPos) {
        nav.style.top = "0"
        header.style.top = "0"
    } else if (preScrollPost < currentScrollPos && currentScrollPos > 30) {
        nav.style.top = "-100vh"
        header.style.top = "-100vh"
    }
    preScrollPost = currentScrollPos;
});

    header.style.top = "0";

