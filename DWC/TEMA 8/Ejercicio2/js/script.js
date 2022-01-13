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
  const db = getFirestore(app);
  const lista = collection(db, "Compras");

  const listaProductos = async () => {
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
  };
  listaProductos();
  d.getElementById("filtrarMenor").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div"));
      pintar.pintarTitulo();
      funcion.filtrarMenor(lista, d.getElementById("precio").value);
    },
    false
  );
  d.getElementById("filtrarMayor").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div"));
      pintar.pintarTitulo();
      funcion.filtrarMayor(lista, d.getElementById("precio").value);
    },
    false
  );

  d.getElementById("ordenar").addEventListener(
    "click",
    (e) => {
      funcion.eliminarTabla(d.getElementsByTagName("div"));
      pintar.pintarTitulo();
      funcion.ordenar(lista);
    },
    false
  );
};
