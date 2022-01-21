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
      d.getElementById("info").innerHTML += `${nombre} añadido a la lista.`;
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

/**
 * Función para pintar en pantalla todas las tablas.
 */
function pintarListas(
  nombreProp,
  nombreLista,
  fecha,
  productos,
  coleccion,
  id
) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let div4 = d.createElement("div");
  let div5 = d.createElement("div");
  div.setAttribute("class", "columna");
  div.setAttribute("style", "color: white; font-size: 30px;");
  div2.setAttribute("class", "columna");
  div2.setAttribute("style", "color: white; font-size: 30px;");
  div3.setAttribute("class", "columna");
  div3.setAttribute("style", "color: white; font-size: 30px;");
  div4.setAttribute("class", "columna");
  div4.setAttribute("style", "color: white; font-size: 30px;");
  div5.setAttribute("class", "columna");
  div5.setAttribute("style", "color: white; font-size: 30px;");
  div.innerHTML = `${nombreProp}`;
  div2.innerHTML = `${nombreLista}`;
  div3.innerHTML = `${fecha}`;
  div4.innerHTML = ``;
  div5.innerHTML = ``;
  let divFila = d.createElement("div");
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(div4);
  divFila.appendChild(div5);
  d.getElementById("tabla").appendChild(divFila);
  let productosParseados = JSON.parse(productos);
  productosParseados.map((objeto) => {
    pintarTablaNueva(
      objeto.nombre,
      objeto.peso,
      objeto.precio,
      objeto.imagen,
      objeto.descripcion,
      coleccion,
      id,
      nombreProp,
      nombreLista,
      fecha
    );
  });
}

/**
 * Función para pintar los productos de las tablas.
 */
function pintarTablaNueva(
  nombre,
  peso,
  precio,
  imagen,
  descripcion,
  coleccion,
  id,
  nombreProp,
  nombreLista,
  fecha
) {
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
  input.addEventListener(
    "click",
    () => {
      funcion.editar(
        coleccion,
        id,
        nombre,
        peso,
        precio,
        descripcion,
        nombreProp,
        nombreLista,
        fecha
      );
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
//Función para añadir los input para editar.
function anyadirInputEditar() {
  let nuevoFormulario = d.createElement("form");
  nuevoFormulario.setAttribute("id", "form");
  d.getElementById("titulo").innerHTML = "Editar";
  nuevoFormulario.innerHTML =
    "<input type='text' id='nuevoNombre' placeholder='Nombre'/><input type='text' id='nuevoPeso' placeholder='Peso'/><input type='text' id='nuevoPrecio' placeholder='Precio'/><input type='text' id='nuevaImagen' placeholder='Imagen'/><input type='text' id='nuevaDescripcion' placeholder='Descripción'/>";
  d.getElementById("texto").appendChild(nuevoFormulario);
}
//Función para añadir los input de crear tabla.
function insertarInputInicio() {
  let nuevoFormulario = d.createElement("form");
  nuevoFormulario.setAttribute("id", "form");
  d.getElementById("titulo").innerHTML = "Crear Lista";
  nuevoFormulario.innerHTML =
    "<input type='text' id='nombreLista' placeholder='Nombre de la lista'/><input type='text' id='nombrePropietario' placeholder='Nombre propietario'/><input type='date' id='fecha' placeholder='Fecha'/><input type='button' id='crear' value='Crear'/><input type='button' id='listar' value='Mostrar listas'/>";
  d.getElementById("texto").appendChild(nuevoFormulario);
}
export { pintarTabla, pintarListas, anyadirInputEditar, insertarInputInicio };
