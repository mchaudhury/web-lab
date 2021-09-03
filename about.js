console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form has been submitted successfully");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

function compliment(evt) {
  evt.preventDefault();
  alert("You are Cool!");
}

let mouseOver = document.querySelector("img");
mouseOver.addEventListener("mouseover", compliment);

document.querySelector("#rest").addEventListener("click", justClick);

function justClick(evt) {
  evt.preventDefault();
  alert("Are You Hungary");
}


document.querySelector("#rest").addEventListener("click", justClick);
/*
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

*/
