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
  pintar.insertarInputInicio(); //Funcion para añadir los inputs.
  funcion.listaProductos(lista); //Función para listar los productos.

  //Evento para el boton crear, que sirve para crear una nueva lista.
  d.getElementById("crear").addEventListener(
    "click",
    () => {
      d.getElementById("info").innerHTML = "";

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

  //Enevnto para el boton mostar listas,para que enseñe todas las listas.
  d.getElementById("listar").addEventListener(
    "click",
    () => {
      d.getElementById("info").innerHTML = "";
      funcion.eliminarTabla(d.getElementsByTagName("div"));
      funcion.eliminarInput(d.getElementById("form"));
      pintar.anyadirInputEditar();
      funcion.listarListas(listaClientes, lista);
    },
    false
  );
};
