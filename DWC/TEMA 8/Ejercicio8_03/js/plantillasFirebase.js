"use strict";
var d = document;
var semaforo = true;
/**
 * Sé que no es el mejor diseño, pero hice la tabla sin tables y asi es como se me quedó.
 * La primera función creo todos los divs para las columnas y filas.
 */
function pintarTabla(nombreProp, nombreLis, fecha, articulos) {
  d.getElementById(
    "tabla"
  ).innerHTML = `<th><td>${nombreProp}</td><td>${nombreLis}</td><td>${fecha}</td><td>${articulos}</td></th>`;
  d.body.appendChild(tabla);
}
/**
 * Función para pintar el titulo de arriba.
 */
function pintarTitulo() {}

export { pintarTabla, pintarTitulo };
