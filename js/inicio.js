let ubicacionprincipal = window.pageYOffset;

window.alert("Esta pagina es solo de uso academico");

window.onscroll = function () {
  let desplazamiento_actual = window.pageYOffset;
  if (ubicacionprincipal >= desplazamiento_actual) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  ubicacionprincipal = desplazamiento_actual;
};
