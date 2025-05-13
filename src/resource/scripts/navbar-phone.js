function showNavbarPhone() {
  const phoneMenu = document.querySelector(".navbar-phone");

  if (phoneMenu.style.display === "flex") {
    phoneMenu.style.display = "none";
  } else {
    phoneMenu.style.display = "flex";
  }
}
