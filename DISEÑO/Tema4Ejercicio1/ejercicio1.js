"use strict";

window.onload = function () {
  var d = document;
  d.getElementById("filas").onchange = function () {
    d.getElementById("spangridRowGap").innerHTML =
      d.getElementById("filas").value;
    d.getElementById("valorRow").innerHTML = d.getElementById("filas").value;
    let gridGapFila = d.getElementById("filas").value;
    for (let i = 0; i < d.getElementById("cuadricula").children.length; i++) {
      d.getElementById("cuadricula").children[i].setAttribute(
        "style",
        `--valorFila: ${gridGapFila}`
      );
    }
  };

  d.getElementById("columnas").onchange = function () {
    d.getElementById("spangridColumnGap").innerHTML =
      d.getElementById("columnas").value;
    d.getElementById("valorColumn").innerHTML =
      d.getElementById("columnas").value;
    let gridGapColumn = d.getElementById("columnas").value;
    for (let i = 0; i < d.getElementById("cuadricula").children.length; i++) {
      d.getElementById("cuadricula").children[i].setAttribute(
        "style",
        `--valorColumna: ${gridGapColumn}`
      );
    }
  };
};
