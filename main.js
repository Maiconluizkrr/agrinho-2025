const menu = document.getElementById("side-menu");
const openBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-menu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("closed");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("closed");
});
