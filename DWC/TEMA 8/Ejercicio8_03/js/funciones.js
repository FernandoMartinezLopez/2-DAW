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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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
 * Función para listar las listas creadas
 */
async function listarListas(coleccion, articulos, nombre) {
  let consulta = query(
    coleccion,
    where("nombrePropietario", "==", `${nombre}`)
  );
  let productos = await getDocs(consulta);
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
 * Esta función no funciona y no entiendo el porque. Se que debería hacer otra cosa esta función pero no tengo tiempo ni sabria como hacerlo.
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
function mostrarTodo(lista, listaClientes, listaLogin, nombre) {
  pintar.insertarInputInicio(); //Funcion para añadir los inputs.
  listaProductos(lista); //Función para listar los productos.

  //Evento para el boton crear, que sirve para crear una nueva lista.

  d.getElementById("crear").addEventListener(
    "click",
    () => {
      d.getElementById("info").innerHTML = "";

      let array = mostrarArray();
      crearDocumento(
        d.getElementById("nombreLista").value,
        d.getElementById("nombrePropietario").value,
        d.getElementById("fecha").value,
        array,
        listaClientes
      );
    },
    false
  );

  //Envento para el boton mostar listas,para que enseñe todas las listas.
  d.getElementById("listar").addEventListener(
    "click",
    () => {
      d.getElementById("info").innerHTML = "";
      eliminarTabla(d.getElementsByTagName("div"));
      eliminarInput(d.getElementById("form"));
      pintar.anyadirInputEditar();
      listarListas(listaClientes, lista, nombre);
    },
    false
  );
}

function login(lista, listaClientes, listaLogin) {
  pintar.pintarInputLogin(lista, listaClientes, listaLogin);
}

function eliminarInputLogin() {
  let padre = d.getElementById("divLogin").parentNode;
  padre.removeChild(d.getElementById("divLogin"));
}
function crearUsuario(usuario, contra) {
  createUserWithEmailAndPassword(getAuth(), usuario, contra)
    .then((credenciales) => {
      console.log("Usuario creado");
      console.log(credenciales); // Credenciales del usuario creado.
    })
    .catch((error) => {
      console.log(error);
    });
}

function iniciarSesion(usuario, contra) {
  signInWithEmailAndPassword(getAuth(), usuario, contra)
    .then((credenciales) => {
      console.log("Sesión Iniciada");
      const actual = credenciales.user;
      console.log(actual.email);
      console.log(actual.displayName);
      console.log(actual.emailVerified);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function filtrarNombre(nombre, listaClientes) {
  let consulta = query(
    listaClientes,
    where("nombrePropietario", "==", `${nombre}`)
  );
  let confirmarConsulta = await getDocs(consulta);
  if (confirmarConsulta.docs.length != 0) {
    return true;
  } else {
    return false;
  }
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
async function anadirClientes(nombre, rol) {
  let objetoAnyadir = await addDoc();
}

function eliminarInputSesion() {
  d.body.removeChild(d.getElementById("CrearSesion"));
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
  mostrarTodo,
  login,
  eliminarInputLogin,
  crearUsuario,
  iniciarSesion,
  filtrarNombre,
  anadirClientes,
  eliminarInputSesion,
};
