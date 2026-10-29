document.addEventListener("DOMContentLoaded", function () {
  // Actualizar automáticamente el año del sitio web.
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Navegación entre las secciones de la página.
  const menuLinks = document.querySelectorAll('nav a[href^="#"]');

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      }
    });
  });
});
