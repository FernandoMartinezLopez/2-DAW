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

function eliminarTabla(hijo) {
  while (hijo.length != 0) d.getElementById("tabla").removeChild(hijo[0]);
}
async function filtrar(lista, valor) {
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
function ordenarTabla(elemento) {
  let nuevaTabla = elemento.docs.sort();
  return nuevaTabla;
}
export { eliminarTabla, filtrar, ordenarTabla };
