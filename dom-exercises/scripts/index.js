const divContainer = document.querySelector("div#container");

const newPara = document.createElement("p");
newPara.style.color = "red";
newPara.textContent = "Hey I'm red!";
divContainer.appendChild(newPara);

const newHeader3 = document.createElement("h3");
newHeader3.style.color = "blue";
newHeader3.textContent = "I'm a blue h3!";
divContainer.appendChild(newHeader3);

const newDiv = document.createElement("div");
newDiv.style.border = "4px solid black";
newDiv.style.backgroundColor = "pink";

const newHeader1 = document.createElement("h1");
newHeader1.textContent = "I'm in a div!";
newDiv.appendChild(newHeader1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
newDiv.appendChild(para2);

divContainer.appendChild(newDiv);