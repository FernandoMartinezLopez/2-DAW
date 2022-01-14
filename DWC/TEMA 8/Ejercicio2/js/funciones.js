"use strict";

var d = document;
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
 * Función que filtra la tabla y devuelve una nueva tabla para que muestre los valores que sean menores a los que escribe el usuario.
 * lista = La colección.
 * valor = Dato que inserta el usuario.
 */
async function filtrarMenorPrecio(lista, valor) {
  let consulta = query(lista, where("precio", "<=", parseInt(valor)));
  let valoresFiltrados = await getDocs(consulta);
  valoresFiltrados.docs.map((objeto) => {
    pintar.pintarTabla(
      objeto.data().nombre,
      objeto.data().peso,
      objeto.data().precio,
      objeto.data().imagen,
      objeto.data().descripcion
    );
  });
}
/**
 * Función que filtra la tabla y devuelve una nueva tabla con los valores que sean menor al valor que pone el usuario.
 * lista = La colección.lista = La colección.
 */
async function filtrarMenorPeso(lista, valor) {
  let consulta = query(lista, where("peso", "<=", parseInt(valor)));
  let valoresFiltrados = await getDocs(consulta);
  valoresFiltrados.docs.map((objeto) => {
    pintar.pintarTabla(
      objeto.data().nombre,
      objeto.data().peso,
      objeto.data().precio,
      objeto.data().imagen,
      objeto.data().descripcion
    );
  });
}
/**
 * Función que reordena la tabla y la vuelve a pintar.
 * lista = La colección.
 * valor = Clave de la base de datos.
 */
async function ordenar(lista, valor) {
  let consulta = query(lista, orderBy(valor, "asc"));
  let tablaFiltrada = await getDocs(consulta);
  tablaFiltrada.docs.map((objeto) => {
    pintar.pintarTabla(
      objeto.data().nombre,
      objeto.data().peso,
      objeto.data().precio,
      objeto.data().imagen,
      objeto.data().descripcion
    );
  });
}
/**
 * Función que se ejecuta al principio y pinta la tabla.
 */
async function listaProductos(lista) {
  pintar.pintarTitulo();
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
export {
  eliminarTabla,
  filtrarMenorPeso,
  filtrarMenorPrecio,
  ordenar,
  listaProductos,
};
