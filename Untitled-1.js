
const paragraph = document.createElement("p");
const header = document.createElement("h1");

const div = document.createElement("div");
const header2 = document.createElement("h1");
const paragraph2 = document.createElement("p");

const containerReference = document.querySelector(".container");




paragraph.style.color = "red";
paragraph.textContent = "Hey, I'm red!"

header.style.color = "blue";
header.textContent = "I'm a blue H3!";

div.style.backgroundColor = "pink";
div.style.border = "solid 1px";
div.style.borderColor = "black";
const divReference = document.querySelector(".nested-div");
div.classList.add ="nested-div";



// NOT BEING ABLE TO PUT IT INSIDE
header2.textContent = "I'm in a div!";
paragraph2.textContent = "ME TOO!";


containerReference.appendChild(paragraph);
containerReference.appendChild(header);
containerReference.appendChild(div);
divReference.appendChild(header2);
divReference.appendChild(paragraph2);






