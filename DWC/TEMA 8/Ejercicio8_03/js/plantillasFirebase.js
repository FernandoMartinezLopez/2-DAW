"use strict";
var d = document;
var semaforo = true;
var rol;
import * as funcion from "./funciones.js";
/**
 * Sé que no es el mejor diseño, pero hice la tabla sin tables y asi es como se me quedó.
 * La primera función creo todos los divs para las columnas y filas.
 */
function pintarTabla(nombre, peso, precio, imagen, descripcion) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let foto = d.createElement("img");
  let divImagen = d.createElement("div");
  let div5 = d.createElement("div");
  let divFila = d.createElement("div");
  let divInput = d.createElement("div");
  let input = d.createElement("input");
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  divImagen.setAttribute("class", "columna");
  foto.setAttribute("src", imagen);
  divImagen.appendChild(foto);
  div5.setAttribute("class", "columna");
  divInput.setAttribute("class", "columna");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Añadir");
  input.addEventListener(
    "click",
    () => {
      funcion.almacenar(nombre, peso, precio, imagen, descripcion);
      d.getElementById("info").innerHTML += `${nombre} añadido a la lista.`;
    },
    false
  );
  divInput.appendChild(input);
  div.innerHTML = `${nombre}`;
  div2.innerHTML = `${peso}`;
  div3.innerHTML = `${precio}`;
  div5.innerHTML = `${descripcion}`;
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(divImagen);
  divFila.appendChild(div5);
  divFila.appendChild(divInput);
  d.getElementById("tabla").appendChild(divFila);
}

/**
 * Función para pintar en pantalla todas las tablas.
 */
function pintarListas(
  nombreProp,
  nombreLista,
  fecha,
  productos,
  coleccion,
  id,
  articulos
) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let div4 = d.createElement("div");
  let botonAnadir = d.createElement("input");
  let div5 = d.createElement("div");
  div.setAttribute("class", "columna");
  div.setAttribute("style", "color: white; font-size: 30px;");
  div2.setAttribute("class", "columna");
  div2.setAttribute("style", "color: white; font-size: 30px;");
  div3.setAttribute("class", "columna");
  div3.setAttribute("style", "color: white; font-size: 30px;");
  div4.setAttribute("class", "columna");
  div4.setAttribute("style", "color: white; font-size: 30px;");
  botonAnadir.setAttribute("type", "button");
  botonAnadir.setAttribute("value", "Añadir productos");
  div5.setAttribute("class", "columna");
  div5.setAttribute("style", "color: white; font-size: 30px;");
  div.innerHTML = `${nombreProp}`;
  div2.innerHTML = `${nombreLista}`;
  div3.innerHTML = `${fecha}`;
  div4.innerHTML = ``;
  div5.innerHTML = ``;
  let divFila = d.createElement("div");
  div4.appendChild(botonAnadir);
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(div4);
  divFila.appendChild(div5);
  d.getElementById("tabla").appendChild(divFila);
  for (let i = 0; i < productos.length; i++) {
    let productosParseados = JSON.parse(productos[i]);
    productosParseados.map((objeto) => {
      pintarTablaNueva(
        objeto.nombre,
        objeto.peso,
        objeto.precio,
        objeto.imagen,
        objeto.descripcion,
        coleccion,
        id,
        nombreProp,
        nombreLista,
        fecha
      );
    });
  }
  botonAnadir.addEventListener(
    "click",
    () => {
      d.getElementById("titulo").innerHTML = "Añadir";
      funcion.eliminarTabla(d.getElementsByTagName("div"));
      funcion.eliminarInput(d.getElementById("form"));
      funcion.listaProductos(articulos);
      let nuevoBoton = d.createElement("input");
      nuevoBoton.setAttribute("type", "button");
      nuevoBoton.setAttribute("value", "Añadir a la lista");
      d.body.appendChild(nuevoBoton);
      nuevoBoton.addEventListener(
        "click",
        () => {
          funcion.anadirLista(coleccion, id);
        },
        false
      );
    },
    false
  );
}

/**
 * Función para pintar los productos de las tablas.
 */
function pintarTablaNueva(
  nombre,
  peso,
  precio,
  imagen,
  descripcion,
  coleccion,
  id,
  nombreProp,
  nombreLista,
  fecha
) {
  let div = d.createElement("div");
  let div2 = d.createElement("div");
  let div3 = d.createElement("div");
  let foto = d.createElement("img");
  let divImagen = d.createElement("div");
  let div5 = d.createElement("div");
  let divFila = d.createElement("div");
  let divInput = d.createElement("div");
  let input = d.createElement("input");
  div.setAttribute("class", "columna");
  div2.setAttribute("class", "columna");
  div3.setAttribute("class", "columna");
  divImagen.setAttribute("class", "columna");
  foto.setAttribute("src", imagen);
  divImagen.appendChild(foto);
  div5.setAttribute("class", "columna");
  divInput.setAttribute("class", "columna");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Editar");
  input.addEventListener(
    "click",
    () => {
      funcion.editar(
        coleccion,
        id,
        nombre,
        peso,
        precio,
        descripcion,
        nombreProp,
        nombreLista,
        fecha
      );
    },
    false
  );
  divInput.appendChild(input);
  div.innerHTML = `${nombre}`;
  div2.innerHTML = `${peso}`;
  div3.innerHTML = `${precio}`;
  div5.innerHTML = `${descripcion}`;
  divFila.appendChild(div);
  divFila.appendChild(div2);
  divFila.appendChild(div3);
  divFila.appendChild(divImagen);
  divFila.appendChild(div5);
  divFila.appendChild(divInput);
  d.getElementById("tabla").appendChild(divFila);
}
//Función para añadir los input para editar.
function anyadirInputEditar() {
  let nuevoFormulario = d.createElement("form");
  nuevoFormulario.setAttribute("id", "form");
  d.getElementById("titulo").innerHTML = "Editar";
  nuevoFormulario.innerHTML =
    "<input type='text' id='nuevoNombre' placeholder='Nombre'/><input type='text' id='nuevoPeso' placeholder='Peso'/><input type='text' id='nuevoPrecio' placeholder='Precio'/><input type='text' id='nuevaImagen' placeholder='Imagen'/><input type='text' id='nuevaDescripcion' placeholder='Descripción'/>";
  d.getElementById("texto").appendChild(nuevoFormulario);
}
//Función para añadir los input de crear tabla.
function insertarInputInicio() {
  let nuevoFormulario = d.createElement("form");
  nuevoFormulario.setAttribute("class", "form");
  nuevoFormulario.setAttribute("id", "form");
  d.getElementById("titulo").innerHTML = "Crear Lista";
  d.getElementById("tabla").setAttribute("class", "tabla");
  nuevoFormulario.innerHTML =
    "<input type='text' id='nombreLista' placeholder='Nombre de la lista'/><input type='text' id='nombrePropietario' placeholder='Nombre propietario'/><input type='date' id='fecha' placeholder='Fecha'/><input type='button' id='crear' value='Crear'/><input type='button' id='listar' value='Mostrar listas'/>";
  d.getElementById("texto").appendChild(nuevoFormulario);
}
function pintarInputLogin(lista, listaClientes, listaLogin) {
  let titulo = d.createElement("h1");
  titulo.innerHTML = "Login";
  let inputNombre = d.createElement("input");
  let inputContrasenya = d.createElement("input");
  let rolAdmin = d.createElement("input");
  let rolUsuario = d.createElement("input");
  let labelAdmin = d.createElement("label");
  let labelUsuario = d.createElement("label");
  labelAdmin.innerHTML = "Admin";
  labelUsuario.innerHTML = "Usuario";
  rolAdmin.setAttribute("type", "radio");
  rolUsuario.setAttribute("type", "radio");
  rolAdmin.setAttribute("id", "admin");
  rolUsuario.setAttribute("id", "usuario");
  rolAdmin.setAttribute("name", "rol");
  rolUsuario.setAttribute("name", "rol");
  rolAdmin.setAttribute("value", "Admin");
  rolUsuario.setAttribute("value", "Usuario");
  inputNombre.setAttribute("id", "nombre");
  inputNombre.setAttribute("placeholder", "Correo");
  inputContrasenya.setAttribute("placeholder", "Contraseña");
  inputNombre.setAttribute("class", "login");
  inputContrasenya.setAttribute("id", "contrasenya");
  inputContrasenya.setAttribute("type", "password");
  inputContrasenya.setAttribute("class", "login");
  let botonCrear = d.createElement("input");
  let botonLogin = d.createElement("input");
  botonCrear.setAttribute("type", "button");
  botonCrear.setAttribute("class", "login");
  botonLogin.setAttribute("type", "button");
  botonLogin.setAttribute("class", "login");
  botonCrear.setAttribute("value", "Crear cuenta");
  botonLogin.setAttribute("value", "Login");
  botonCrear.addEventListener(
    "click",
    () => {
      funcion.eliminarInputLogin();
      funcion.crearUsuario(inputNombre.value, inputContrasenya.value);
      funcion.anadirClientes(inputNombre.value);
      funcion.mostrarTodo(lista, listaClientes);
    },
    false
  );
  botonLogin.addEventListener(
    "click",
    () => {
      funcion.iniciarSesion(inputNombre.value, inputContrasenya.value);
      if (funcion.filtrarNombre(inputNombre.value, listaClientes)) {
        funcion.eliminarInputLogin();
        funcion.mostrarTodo(
          lista,
          listaClientes,
          listaLogin,
          inputNombre.value
        );
      } else {
        console.log("Error");
      }
    },
    false
  );
  let divContenedor = d.createElement("div");
  divContenedor.setAttribute("id", "divLogin");
  divContenedor.appendChild(titulo);
  divContenedor.appendChild(inputNombre);
  divContenedor.appendChild(inputContrasenya);
  divContenedor.appendChild(botonCrear);
  divContenedor.appendChild(botonLogin);
  divContenedor.appendChild(rolAdmin);
  divContenedor.appendChild(labelAdmin);
  divContenedor.appendChild(rolUsuario);
  divContenedor.appendChild(labelUsuario);
  d.body.appendChild(divContenedor);
}
export {
  pintarTabla,
  pintarListas,
  anyadirInputEditar,
  insertarInputInicio,
  pintarInputLogin,
};
