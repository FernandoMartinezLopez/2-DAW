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
  const listaClientes = collection(db, "CrearListas");

  funcion.listaProductos(lista); //Función para listar los productos.
  d.getElementById("listar").addEventListener(
    "click",
    () => {
      funcion.eliminarTabla(d.getElementsByTagName("div")); //Función que borra la tabla.
      funcion.listarListas(listaClientes);
      funcion.listaProductos(lista);
    },
    false
  );

  d.getElementById("crear").addEventListener(
    "click",
    () => {
      let array = funcion.mostrarArray();
      funcion.crearDocumento(
        d.getElementById("nombreLista").value,
        d.getElementById("nombrePropietario").value,
        d.getElementById("fecha").value,
        array,
        listaClientes
      );
    },
    false
  );
};
