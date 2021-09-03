function justClick(evt) {
  evt.preventDefault();
  alert("Are You Hungry?");

  const restaurant = [
    "Burger King",
    "McDonalds",
    "Whataburger",
    "Chille's",
    "Wing Stop",
  ];

  const random = Math.floor(Math.random() * restaurant.length);
  console.log(random, restaurant[random]);
  alert(restaurant[random]);
}

let uClick = document.querySelector("#rest");
uClick.addEventListener("click", justClick);
