"use strict";
var d = document;
var semaforo = true;

import * as funcion from "./funciones.js";
/**
 * Sé que no es el mejor diseño, pero hice la tabla sin tables y asi es como se me quedó.
 * La primera función creo todos los divs para las columnas y filas.
 */
function pintarTabla(nombre, peso, precio, imagen, descripcion) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let foto = d.createElement("img");
  let divImagen = d.createElement("div");
  let div5 = d.createElement("div");
  let divFila = d.createElement("div");
  let divInput = d.createElement("div");
  let input = d.createElement("input");
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  divImagen.setAttribute("class", "columna");
  foto.setAttribute("src", imagen);
  divImagen.appendChild(foto);
  div5.setAttribute("class", "columna");
  divInput.setAttribute("class", "columna");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Añadir");
  input.addEventListener(
    "click",
    () => {
      funcion.almacenar(nombre, peso, precio, imagen, descripcion);
    },
    false
  );
  divInput.appendChild(input);
  div.innerHTML = `${nombre}`;
  div2.innerHTML = `${peso}`;
  div3.innerHTML = `${precio}`;
  div5.innerHTML = `${descripcion}`;
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(divImagen);
  divFila.appendChild(div5);
  divFila.appendChild(divInput);
  d.getElementById("tabla").appendChild(divFila);
}
function pintarListas(nombreProp, nombreLista, fecha, productos) {
  console.log(productos);
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  div.innerHTML = `${nombreProp}`;
  div2.innerHTML = `${nombreLista}`;
  div3.innerHTML = `${productos}`;
  let divFila = d.createElement("div");
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  d.getElementById("tabla").appendChild(divFila);
}
function pintarTablaNueva(nombre, peso, precio, imagen, descripcion) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let foto = d.createElement("img");
  let divImagen = d.createElement("div");
  let div5 = d.createElement("div");
  let divFila = d.createElement("div");
  let divInput = d.createElement("div");
  let input = d.createElement("input");
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  divImagen.setAttribute("class", "columna");
  foto.setAttribute("src", imagen);
  divImagen.appendChild(foto);
  div5.setAttribute("class", "columna");
  divInput.setAttribute("class", "columna");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Editar");
  /*input.addEventListener(
    "click",
    () => {
      funcion.almacenar(nombre, peso, precio, imagen, descripcion);
    },
    false
  );
  */
  divInput.appendChild(input);
  div.innerHTML = `${nombre}`;
  div2.innerHTML = `${peso}`;
  div3.innerHTML = `${precio}`;
  div5.innerHTML = `${descripcion}`;
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(divImagen);
  divFila.appendChild(div5);
  divFila.appendChild(divInput);
  d.getElementById("tabla").appendChild(divFila);
}
export { pintarTabla, pintarListas };
