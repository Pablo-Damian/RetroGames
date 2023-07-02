/* SCRIPT DARK/LIGHT MODE */
function toggleDarkMode() {
  var body = document.body;
  var dmodeButton = document.getElementById("dmode-button");
  var darkModeText = document.querySelector(".dark-mode-text");
  var lightModeText = document.querySelector(".light-mode-text");
  body.classList.toggle("dark-mode");
  dmodeButton.classList.toggle("clicked");
  darkModeText.classList.toggle("hidden");
  lightModeText.classList.toggle("hidden");
}

/* SCRIPT BOTÓN "SUBIR" */
// Muestra el botón cuando se desplaza hacia abajo cierta cantidad de píxeles
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Sube al inicio cuando se hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// FIN del código ;)