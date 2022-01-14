"use strict";

import { app } from "./datosFirebase.js";
import * as pintar from "./plantillasFirebase.js";
import * as funcion from "./funciones.js";
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

window.onload = function () {
  const d = document;
  const db = getFirestore(app); //Conectamos con la base de datos.
  const lista = collection(db, "Compras"); //Obtenemos los datos de la colección.

  funcion.listaProductos(lista); //Función para listar los productos.

  // Evento para filtrar los productos.
  d.getElementById("filtrarMenor").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      pintar.pintarTitulo(); //Función que pinta el titulo de la tabla.
      funcion.filtrarMenorPrecio(lista, d.getElementById("precio").value); //Función que pinta la tabla con los datos filtrados.
    },
    false
  );
  // Evento para filtrar los productos.
  d.getElementById("filtrarMenorPeso").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      pintar.pintarTitulo(); //Función que pinta el titulo de la tabla.
      funcion.filtrarMenorPeso(lista, d.getElementById("precio").value); //Función que pinta la tabla con los datos filtrados.
    },
    false
  );

  d.getElementById("ordenar").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      pintar.pintarTitulo(); //Función que pinta el titulo de la tabla.
      funcion.ordenar(lista, "nombre"); //Función que pinta la tabla con los datos ordenados.
    },
    false
  );
  d.getElementById("ordenarPrecio").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      pintar.pintarTitulo(); //Función que pinta el titulo de la tabla.
      funcion.ordenar(lista, "precio"); //Función que pinta la tabla con los datos ordenados.
    },
    false
  );
  d.getElementById("ordenarPeso").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      pintar.pintarTitulo(); //Función que pinta el titulo de la tabla.
      funcion.ordenar(lista, "peso"); //Función que pinta la tabla con los datos ordenados.
    },
    false
  );
};
