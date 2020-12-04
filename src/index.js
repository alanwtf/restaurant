import { app } from "./page-load.js";
import { home } from "./home.js";
import { contact } from "./contact.js";

init();

function addEventsToNav(){
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contactBtn = document.querySelector("#contactBtn");

    homeBtn.addEventListener('click', home);
    contactBtn.addEventListener('click', contact);
}


function init(){
    app();
    home();
    addEventsToNav();
}