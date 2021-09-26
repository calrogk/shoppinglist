"use strict"

/**
 Created by:     Marc Meierhof
 date:           17.09.2021
 project-name:   shoppinglist
 file:           /main
 **/


window.addEventListener("load", () => {
    const mainNavOpener = document.getElementById("mainnavopener");
    const mainNav = document.getElementById("mainnav");

    const mainnavOpenerOne = document.getElementById("mainnavopener-one");
    const mainnavOpenerTwo = document.getElementById("mainnavopener-two");
    const mainnavOpenerThree = document.getElementById("mainnavopener-three");

    /**
     * mainNavOpener EventListener "click"
     */
    mainNavOpener.addEventListener("click", () => {
        mainnavOpenerOne.classList.toggle("mainnavopener-one-rotate");
        mainnavOpenerTwo.classList.toggle("mainnavopener-two-rotate");
        mainnavOpenerThree.classList.toggle("mainnavopener-three-rotate");
        mainNav.classList.toggle("mainnav-visible");
    });
});