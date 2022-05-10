/****Carrito storage ****/

import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./opcionesDeProductos.js";
import { carritoIndex, eliminarProductoCarrito, vaciarCarrito } from "./carritoIndex.js";
//import { arrayProductos } from "./productos.js";


export const contenedorCarrito = document.getElementById('carrito-contenedor');
let carritoStorage = [];

document.addEventListener("DOMContentLoaded", () => {

  mostrarProductos();


  if (localStorage.getItem("carrito")) {
    carritoStorage = JSON.parse(localStorage.getItem("carrito"))
    carritoStorage.map((producto) => {
      let div = document.createElement('div');
      div.classList.add('productoEnCarrito');
      div.innerHTML = ` <p>${producto.nombre}</p>
                        <p class="precioCarrito">Precio:${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad:${producto.stock}</p>
                        <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                      `
      contenedorCarrito.appendChild(div);
      
      actualizarCarrito(carritoStorage);
      eliminarProductoCarrito(producto.id, producto.nombre)
      vaciarCarrito(carritoStorage);
    })
  }
})


