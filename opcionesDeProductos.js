import { carritoIndex, vaciarCarrito } from "./carritoIndex.js";
import { getData } from "./getData.js";


export const mostrarProductos = async() => {

    const contenedorProductos = document.getElementById("menu-principal");
    const productos = await getData(); //Utilizo el await cuando la funcion es asincronica (async)

    productos.forEach(producto => {
      
      const div = document.createElement('div');
      div.classList.add('cardProducto');
      div.classList.add('card');
      div.innerHTML += `        
                <div>
                  <img class="card-img-top imagenProducto" src=${producto.imagen} alt="Producto">
                </div>
                <div class="card-body">
                  <div class ="text-center"><h5 class="nombreProducto">${producto.nombre}</h5></div>    
                  <div class="opcionBoton">
                    <p class ="precioProducto">$ ${producto.precio}</p>
                    <a class="btn fas fa-shopping-cart agregarProducto" id =boton${producto.id}></a>
                    <a class="btn fas fa-heart favorito"></a>
                  </div>
                </div>

    `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`); 
    boton.addEventListener("click", () =>{
      Toastify({
        text: `Has agregado 1 unidad de ${producto.nombre} al carrito`,
        duration: 2000,
        style:{
          background: "#003049",
          color: "#FFF",
          width: "200px",
          height: "auto",

        }

        
      }).showToast();
    carritoIndex(producto.id);
    });
  });
};



  