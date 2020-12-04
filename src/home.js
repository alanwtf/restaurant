import {contact} from './contact.js';

const home = function() {
    const main = document.createElement("main");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    const content = document.querySelector(".content");
    const homeBtn = document.querySelector("#homeBtn");
    const liItems = document.querySelectorAll("li");
    liItems.forEach(li => {
        li.classList.remove("active");
    });
    homeBtn.classList.add("active");


    h1.innerHTML = "EAT FOOD GOOD";
    button.innerHTML = "NOW";
    button.addEventListener('click', contact);
    main.classList.add("home-main");

    main.appendChild(h1);
    main.appendChild(button);
    
    content.innerHTML = "";
    content.appendChild(main);
}

export {home};