import { actualizarCarrito, contadorCarrito, precioTotal, } from "./actualizarCarrito.js";
import { contenedorCarrito } from "./app.js";
import { arrayProductos } from "./productos.js";



let carritoDeCompras = [];

//Se almacenan productos en carrito

export const carritoIndex = (productoId, productoNombre) => {
  localStorage.getItem("carrito") ? carritoDeCompras = (JSON.parse(localStorage.getItem("carrito"))) : null; //Aplico operador ternario

  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
  contarProductosRepetidos(productoRepetido, productoId);
  eliminarProductoCarrito(productoId, productoNombre);
}



function limpiarHTML (){
  contenedorCarrito.innerHTML=""; 
  while (contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

export const vaciarCarrito = () =>{

  let botonVaciar = document.getElementById ("vaciarCarrito");
  botonVaciar.addEventListener("click", () => {
    localStorage.clear();  
    carritoDeCompras = []; 
    contadorCarrito.innerHTML = 0; 
    precioTotal.innerHTML="";
    limpiarHTML(); 
   
  }); 
}


export const eliminarProductoCarrito = (productoId) => {
 
  localStorage.getItem("carrito") ? carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) : null; //Aplico operador ternario

  let botonEliminar = document.getElementById(`eliminar${productoId}`);
  botonEliminar.addEventListener('click', () => {
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Estas a punto de eliminar este producto de tu carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          `El producto ha sido eliminado exitosamente`,
          'success'
        )
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
      actualizarCarrito(carritoDeCompras);  
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          `El producto sigue almacenado en tu carrito de compras`,
          'error'
        )
      }
    })
  });
}

const contarProductosRepetidos = (prodRepetido, productoId) => {
  if (prodRepetido) {
    prodRepetido.stock++
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.stock}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    renderProductosCarrito(productoId);
  }
}

const renderProductosCarrito = (productoId) => {
  let producto = arrayProductos.find(producto => producto.id == productoId);
  carritoDeCompras.push(producto);
  producto.stock = 1;
  let div = document.createElement('div');
  div.classList.add('productoEnCarrito');
  div.innerHTML = ` <p>${producto.nombre}</p>
                    <p class="precioCarrito">Precio:${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.stock}</p>
                    <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                  `
  contenedorCarrito.appendChild(div);
  actualizarCarrito(carritoDeCompras);
  vaciarCarrito(carritoDeCompras); 

}



let botonFinalizar = document.getElementById("confirmarCompra") 
botonFinalizar.addEventListener("click", () =>{
  Swal.fire(
    'Muchas gracias por tu compra!',
    'Nos estaremos poniendo en contacto contigo para gestionar el envio de tu compra',
    'success'
  )
  localStorage.clear();  
  carritoDeCompras = []; 
  contadorCarrito.innerHTML = 0; 
  precioTotal.innerHTML="";
  limpiarHTML(); 


})



  
