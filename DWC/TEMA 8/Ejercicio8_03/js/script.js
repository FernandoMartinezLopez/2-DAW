"use strict";

import { app } from "./datosFirebase.js";
//import * as pintar from "./plantillasFirebase.js";
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
  const db = getFirestore(app);
  const lista = collection(db, "CrearListas");

  funcion.listaProductos(lista);
};
