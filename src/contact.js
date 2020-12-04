const contact = function(){
    const content = document.querySelector(".content");
    const contactTitle = document.createElement("h2");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");
    const textLabel = document.createElement("label");
    const textInput = document.createElement("textarea");
    const form = document.createElement("form");
    const contactBtn = document.querySelector("#contactBtn");
    const liItems = document.querySelectorAll("li");
    liItems.forEach(li => {
        li.classList.remove("active");
    });
    contactBtn.classList.add("active");

    contactTitle.innerHTML = "CONTACT ME";

    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "EMAIL";
    emailLabel.setAttribute("name", "email")
    emailInput.setAttribute("type", "email");

    textLabel.setAttribute("for", "text");
    textLabel.innerHTML = "MESSAGE";
    textInput.setAttribute("name", "text");

    form.classList.add("contact");

    form.appendChild(contactTitle);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(textLabel);
    form.appendChild(textInput);
    

    content.innerHTML = "";
    content.appendChild(form);
    
}

export {contact}