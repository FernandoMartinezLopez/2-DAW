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
  updateDoc,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import * as pintar from "./plantillasFirebase.js";
/**
 * Función que elimina la tabla para poder reescribirla con los datos modificados.
 * hijo = El hijo del elemento que queremos eliminar.
 */
function eliminarTabla(hijo) {
  while (hijo.length != 0) d.getElementById("tabla").removeChild(hijo[0]);
}
function eliminarInput(hijo) {
  d.getElementById("texto").removeChild(hijo);
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

/**
 * Función creada para almacenar los datos en un array.
 */
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
/**
 * Función para recoger el array
 */
function mostrarArray() {
  return arrayObjetos;
}
function limpiarArray() {
  arrayObjetos = [];
}
/**
 * Función para crear un nuevo documento en la firebase
 */
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
    productos: [JSON.stringify(array)],
  };
  let prueba = await addDoc(coleccion, objetoAnyadir);
  d.getElementById("info").innerHTML = `Objeto añadido con la id ${prueba.id}`;
  limpiarArray();
}

/**
 * Función para listar las listas creadas
 */
async function listarListas(coleccion, articulos) {
  let productos = await getDocs(coleccion);
  productos.docs.map((objeto) => {
    pintar.pintarListas(
      objeto.data().nombrePropietario,
      objeto.data().nombreLista,
      objeto.data().fecha,
      objeto.data().productos,
      coleccion,
      objeto.id,
      articulos
    );
  });
}
/**
 * Función que edita en la base de datos, pero los atributos del producto.
 * Esta función no y no entiendo el porque. Se que debería hacer otra cosa esta función pero no tengo tiempo ni sabria como hacerlo.
 */
async function editar(coleccion, id, nombre1, peso1, precio1, descripcion1) {
  let nuevoNombre;
  let nuevoPeso;
  let nuevoPrecio;
  let nuevaImagen;
  let nuevaDescripcion;
  if (d.getElementById("nuevoNombre").value == "") {
    nuevoNombre = nombre1;
  } else {
    nuevoNombre = d.getElementById("nuevoNombre").value;
  }
  if (d.getElementById("nuevoPeso").value == "") {
    nuevoPeso = peso1;
  } else {
    nuevoPeso = d.getElementById("nuevoPeso").value;
  }
  if (d.getElementById("nuevoPrecio").value == "") {
    nuevoPrecio = precio1;
  } else {
    nuevoPrecio = d.getElementById("nuevoPrecio").value;
  }
  if (d.getElementById("nuevaImagen").value == "") {
    nuevaImagen = "Sin imagen";
  } else {
    nuevaImagen = d.getElementById("nuevaImagen").value;
  }
  if (d.getElementById("nuevaDescripcion").value == "") {
    nuevaDescripcion = descripcion1;
  } else {
    nuevaDescripcion = d.getElementById("nuevaDescripcion").value;
  }
  let productosEditar = {
    nombre: nuevoNombre,
    peso: nuevoPeso,
    precio: nuevoPrecio,
    imagen: nuevaImagen,
    descripcion: nuevaDescripcion,
  };
  let productosString = JSON.stringify(productosEditar);
  let referencia = await doc(coleccion, id);
  await updateDoc(referencia, {
    productos: arrayUnion(productosString),
  });
}

async function anadirLista(coleccion, id) {
  let arrayParseado = JSON.stringify(arrayObjetos);
  console.log(arrayParseado);
  let referencia = await doc(coleccion, id);
  await updateDoc(referencia, {
    productos: arrayUnion(arrayParseado),
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
  editar,
  eliminarInput,
  anadirLista,
};
