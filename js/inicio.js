let ubicacionprincipal = window.pageYOffset;
const nav = document.querySelector("#nav");

window.alert("Esta pagina es solo de uso academico");

window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (ubicacionprincipal >= desplazamiento_actual) {
    nav.classList.remove("noheader");
  } else {
    nav.classList.add("noheader");
  }
  ubicacionprincipal = desplazamiento_actual;
};
