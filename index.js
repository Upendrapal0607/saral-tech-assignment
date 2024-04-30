let toggle = true;
const menuOptions = document.querySelector(".hamburger");
let menuBox = document.querySelector(".nav-icons-hidden-menu");

menuOptions.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    menuOptions.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    menuBox.style.display = "none";
  } else {
    menuOptions.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    menuBox.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    menuBox.style.display = "none";
    menuOptions.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
