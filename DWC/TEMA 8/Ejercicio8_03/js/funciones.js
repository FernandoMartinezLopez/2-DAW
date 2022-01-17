"use strict";

var d = document;
var arrayObjetos = [];
const tamanyo = 2;
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import * as pintar from "./plantillasFirebase.js";
/**
 * Función que elimina la tabla para poder reescribirla con los datos modificados.
 * hijo = El hijo del elemento que queremos eliminar.
 */
function eliminarTabla(hijo) {
  while (hijo.length != 0) d.getElementById("tabla").removeChild(hijo[0]);
}
/**
 * Función que se ejecuta al principio y pinta la tabla.
 */
async function listaProductos(lista) {
  let productos = await getDocs(lista);
  productos.docs.map((objeto) => {
    pintar.pintarTabla(
      objeto.data().nombre,
      objeto.data().peso,
      objeto.data().precio,
      objeto.data().imagen,
      objeto.data().descripcion
    );
  });
}
function almacenar(nombre1, precio1, peso1, imagen1, descripcion1) {
  let objeto = {
    nombre: nombre1,
    precio: precio1,
    peso: peso1,
    imagen: imagen1,
    descripcion: descripcion1,
  };
  arrayObjetos.push(objeto);
}

function mostrarArray() {
  return arrayObjetos;
}
function limpiarArray() {
  arrayObjetos = [];
}
async function crearDocumento(
  listaNombre,
  nombreProp,
  fechaLista,
  array,
  coleccion
) {
  d.getElementById("info").innerHTML = "";
  let objetoAnyadir = {
    nombreLista: listaNombre,
    nombrePropietario: nombreProp,
    fecha: fechaLista,
    productos: array,
  };
  let prueba = await addDoc(coleccion, objetoAnyadir);
  d.getElementById("info").innerHTML = `Objeto añadido con la id ${prueba.id}`;
  limpiarArray();
}
async function listarListas(coleccion) {
  let productos = await getDocs(coleccion);
  productos.docs.map((objeto) => {
    pintar.pintarListas(
      objeto.data().nombrePropietario,
      objeto.data().nombreLista,
      objeto.data().fecha,
      objeto.data().productos
    );
  });
}
export {
  eliminarTabla,
  listaProductos,
  almacenar,
  mostrarArray,
  limpiarArray,
  crearDocumento,
  listarListas,
};
