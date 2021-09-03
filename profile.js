function justClick1(evt) {
  evt.preventDefault();
  alert("Favourite Color is RED!");
}

let youClick1 = document.querySelector("#color");
youClick1.addEventListener("click", justClick1);

function justClick2(evt) {
  evt.preventDefault();
  alert("Favourite place is PARIS!");
}

let youClick2 = document.querySelector("#place");
youClick2.addEventListener("click", justClick2);

function justClick3(evt) {
  evt.preventDefault();
  alert("Favourite ritual is SLEEPING!");
}

let youClick3 = document.querySelector("#ritual");
youClick3.addEventListener("click", justClick3);
