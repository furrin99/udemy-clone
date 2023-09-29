truncateCardTitle();
window.addEventListener("load", function () {
  truncateCardTitle();
});
function truncateCardTitle() {
  const cardList = document.getElementsByClassName("card-title");
  for (let i = 0; i < cardList.length; i++) {
    const text = cardList[i].innerHTML;
    const newText = truncateString(text, 35);
    cardList[i].innerHTML = newText;
  }
}
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Sidebar Mini

let toggleBtn = document.querySelector(".sidebarMini__button");
let sidebarMini = document.querySelector(".sidebarMini");
let switchBtn = document.querySelector("#checkbox");
toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});
switchBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkMode");
});
