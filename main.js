document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".ul");

  burgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
