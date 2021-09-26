"use strict"

/**
 Created by:     Marc Meierhof
 date:           24.09.2021
 project-name:   shoppinglist
 file:           /shoppinglist
 **/

window.addEventListener("load", () => {
    const textfield = document.querySelector("#textfield");
    const shoppingform = document.querySelector("#shoppingform");
    const shoppinglist = document.querySelector("#shoppinglist");

    shoppingform.addEventListener("submit", (event) => {
        event.preventDefault();

        const liElement = document.createElement("li");
        const liButton = document.createElement("div");
        const liButtonSpan = document.createElement("span");
        const liText = document.createTextNode(textfield.value);

        if (textfield.value.trim() === "") {
            return
        }

        liButton.classList.add("delete-button");
        liButtonSpan.innerText = "+";

        liButton.appendChild(liButtonSpan);
        liElement.appendChild(liText);
        liElement.appendChild(liButton);
        shoppinglist.prepend(liElement);

        liButton.addEventListener("click", () => {
            liElement.remove();
        });
        liElement.addEventListener("click", () => {
            liElement.classList.toggle("done");
        });

        textfield.value = "";
    });
});