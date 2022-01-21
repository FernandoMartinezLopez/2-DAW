"use strict";

window.onload = function () {
  var d = document;
  d.getElementById("filas").onchange = function () {
    d.getElementById("spangridRowGap").innerHTML =
      d.getElementById("filas").value;
    d.getElementById("valorRow").innerHTML = d.getElementById("filas").value;
  };

  d.getElementById("columnas").onchange = function () {
    d.getElementById("spangridColumnGap").innerHTML =
      d.getElementById("columnas").value;
    d.getElementById("valorColumn").innerHTML =
      d.getElementById("columnas").value;
  };

  function modificarGap(gridRow, gridColumn) {
    d.get;
  }
};
