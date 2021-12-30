
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey, I'm red!"

const header = document.createElement("h1");
header.style.color = "blue";
header.textContent = "I'm a blue H3!";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "solid 1px";
div.style.borderColor = "black";
div.classList.add("nested-div");

const header2 = document.createElement("h1");
header2.textContent = "I'm in a div!";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";


const containerReference = document.querySelector(".container");
containerReference.appendChild(paragraph);
containerReference.appendChild(header);
containerReference.appendChild(div);

const divReference = document.querySelector(".nested-div");
divReference.appendChild(header2);
divReference.appendChild(paragraph2);

const btnReference = document.querySelector("#btn");
btnReference.onclick = () => alert("Hello World");

const btn2Reference = document.querySelectorAll("#btn2");

btn2Reference.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        alert(button.id);
    });
});




