"use strict";
var d = document;
var semaforo = true;
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
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  divImagen.setAttribute("class", "columna");
  foto.setAttribute("src", imagen);
  divImagen.appendChild(foto);
  div5.setAttribute("class", "columna");
  div.innerHTML = `${nombre}`;
  div2.innerHTML = `${peso}`;
  div3.innerHTML = `${precio}`;
  div5.innerHTML = `${descripcion}`;
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(divImagen);
  divFila.appendChild(div5);
  d.getElementById("tabla").appendChild(divFila);
}
/**
 * Función para pintar el titulo de arriba.
 */
function pintarTitulo() {
  let titulo = d.createElement("div");
  let titulo2 = d.createElement("div");
  let titulo3 = d.createElement("div");
  let titulo4 = d.createElement("div");
  let titulo5 = d.createElement("div");
  let tituloFila = d.createElement("div");
  titulo.setAttribute("class", "columna");
  titulo.innerHTML = `Nombre`;
  titulo2.setAttribute("class", "columna");
  titulo2.innerHTML = `Peso`;
  titulo3.setAttribute("class", "columna");
  titulo3.innerHTML = `Precio`;
  titulo4.setAttribute("class", "columna");
  titulo4.innerHTML = `Imagen`;
  titulo5.setAttribute("class", "columna");
  titulo5.innerHTML = `Descripción`;
  tituloFila.appendChild(titulo);
  tituloFila.appendChild(titulo2);
  tituloFila.appendChild(titulo3);
  tituloFila.appendChild(titulo4);
  tituloFila.appendChild(titulo5);
  d.getElementById("tabla").appendChild(tituloFila);
}

export { pintarTabla, pintarTitulo };
