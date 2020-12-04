export {app}
import {home} from "./home.js";

const nav = function(){
    const navElement = document.createElement("nav");
    const foodBrand = document.createElement("div");
    const unorderedList = document.createElement("ul");
    const homeListItem = document.createElement("li");
    homeListItem.setAttribute("id", "homeBtn");
    const menuListItem = document.createElement("li");
    menuListItem.setAttribute("id", "menuBtn");
    const contactListItem = document.createElement("li");
    contactListItem.setAttribute("id", "contactBtn");
    const ulItems = [];
    const spanHome = document.createElement("span");
    spanHome.innerHTML = "HOME";
    homeListItem.appendChild(spanHome)
    const spanMenu = document.createElement("span");
    spanMenu.innerHTML = "MENU";
    menuListItem.appendChild(spanMenu);
    const spanContact = document.createElement("span");
    spanContact.innerHTML = "CONTACT";
    contactListItem.appendChild(spanContact);
    ulItems.push(homeListItem); 
    ulItems.push(menuListItem)
    ulItems.push(contactListItem);
    
    unorderedList.appendChild(homeListItem);

    console.log(ulItems.length);
    navElement.classList.add("navbar");
    foodBrand.classList.add("food-brand");
    foodBrand.innerHTML = "FOOOOOOOOD";
    unorderedList.classList.add("nav-list");

    for(let i = 0; i < ulItems.length; i++){
        unorderedList.appendChild(ulItems[i]);
    }

    navElement.appendChild(foodBrand);
    navElement.appendChild(unorderedList);

    return navElement;
}

const footer = function() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = "MADE WITH NOT MUCH LOVE";
    return footer;
}

const app = function(){
    const body = document.querySelector("body");
    body.appendChild(nav());
    const divContent = document.createElement("div");
    divContent.classList.add("content");
    body.appendChild(divContent);
    body.appendChild(footer());

};