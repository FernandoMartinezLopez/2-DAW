"use strict";
var d = document;
var semaforo = true;
function pintarTabla(nombre, peso, precio, imagen, descripcion) {
  let div = d.createElement("div");
  let titulo = d.createElement("div");
  titulo.innerHTML = `<td> Nombre </td><td> Peso </td><td> Precio </td><td> Imagen </td><td> Descripción </td>`;
  div.innerHTML += `<tr><td>${nombre} </td><td>${peso} kg</td><td>${precio} €</td><td>${imagen}</td><td>${descripcion}</td></tr>`;
  if (semaforo) {
    d.body.appendChild(titulo);
    semaforo = false;
  }
  d.body.appendChild(div);
}

export { pintarTabla };
