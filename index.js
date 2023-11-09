var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
