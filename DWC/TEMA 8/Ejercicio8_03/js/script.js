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
  /**
   * No tengo boton para volver a mostar las lista, por lo que si quieres volver atras tienes que darle al f5.
   * Para crear una lista, tienes que rellenar los datos de arriba y luego darle a añadir a los productos de abajo(si es que quieres añadir productos).
   * Se que si tengo que dar explicaciones es que es un mal diseño, pero no tengo tiempo para modificar el diseño.
   */
  const d = document;
  const db = getFirestore(app); //Conectamos con la base de datos.
  const lista = collection(db, "Compras"); //Obtenemos los datos de la colección.
  const listaClientes = collection(db, "CrearListas");
  const clientesLogueados = collection(db, "datosUsuarios");
  funcion.login(lista, listaClientes, clientesLogueados);
};
