"use strict";

var d = document;

function eliminarTabla(hijo) {
  while (hijo.length != 0) d.body.removeChild(hijo[0]);
}
function filtrarTabla(elemento) {
  let filtradoFinal = elemento.docs.filter(filtrarProductos);
  return filtradoFinal;

  function filtrarProductos(valor) {
    return valor.data().precio < 5;
  }
}

function ordenarTabla(elemento) {
  let nuevaTabla = elemento.docs.sort();
  return nuevaTabla;
}
export { eliminarTabla, filtrarTabla, ordenarTabla };
