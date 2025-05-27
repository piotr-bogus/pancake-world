function showNavPhone() {
  const navPhone = document.querySelector(".container-nav-phone");
  const overlay = document.querySelector(".overlay-nav");

  if (navPhone.style.display === "flex") {
    navPhone.style.display = "none";
    overlay.style.display = "none";
  } else {
    navPhone.style.display = "flex";
    overlay.style.display = "block";
  }
}

function hideNavPhone() {
  const navPhone = document.querySelector(".container-nav-phone");
  const overlay = document.querySelector(".overlay-nav");

  navPhone.style.display = "none";
  overlay.style.display = "none";
}
