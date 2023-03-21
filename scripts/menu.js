const openMenuBtn = document.querySelector(".burger-btn");
const closeMenuBtn = document.querySelectorAll(".window__close-btn");
const openCalcBtn = document.querySelectorAll(".btn-toggle-calc");

const pageMenu = document.querySelector(".page-menu");
const calcWindow = document.querySelector(".calc-window");

function closeMenuByEsc(e, menu) {
  if (e.key === "Escape") {
    closeMenu(menu);
  }
}

function openMenu(menu) {
  menu.classList.remove("hidden");
  window.addEventListener("keydown", (e) => {
    closeMenuByEsc(e, menu);
  });
}

function closeMenu(menu) {
  menu.classList.add("hidden");
  window.removeEventListener("keydown", (e) => {
    closeMenuByEsc(e, menu);
  });
}

openMenuBtn.addEventListener("click", () => {
  openMenu(pageMenu);
});
closeMenuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closeMenu(e.target.closest(".window"));
  });
});

openCalcBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openMenu(calcWindow);
  });
});
