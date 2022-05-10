const modalContenedor = document.querySelector(".modal-contenedor"); 
const abrirCarrito = document.getElementById("cart-btn"); 
const cerrarCarrito = document.getElementById("btn-cerrar-carrito"); 
const modalCarrito = document.querySelector (".modal-carrito");

const modalPagoContenedor = document.querySelector(".modal-pago-contenedor");
const abrirMetodoPago = document.getElementById("finalizarCompra");
const modalPago = document.querySelector(".modal-pago");
const cerrarMetodoPago = document.getElementById("btn-cerrar-pago");

const modalFinalizado = document.querySelector(".modal-compra-finalizada"); 
const abrirModalCompraFin = document.querySelector(".btn-enviar");
const modalFin = document.querySelector(".modal-fin");
const cerrarCompraFinalizada = document.getElementById("btn-cerrar-compra"); 

//Interaccion con carrito de compras
abrirCarrito.addEventListener("click", () =>{           //escucho el evento click para abrir el carrito
    modalContenedor.classList.toggle("modal-active");    //Toggle: Agrega la clase modal-active ya que no se encontaba definida anteriormente en la lista
})

cerrarCarrito.addEventListener("click", () =>{           //escucho el evento click para cerrar el carrito
    modalContenedor.classList.toggle("modal-active");    //Toggle: Quita la clase modal-active ya que ya se encontraba definida anteriormente en la lista, eso hace que le carrito se cierre
})

modalContenedor.addEventListener("click", () =>{        //Al clickear afuera del modal contenedor, el carrito se cierra
    cerrarCarrito.click()
})

modalCarrito.addEventListener ("click", (e) =>{
    e.stopPropagation();                                 //Evita que al clickear en el modal carrito se siga propagando el evento click que cierra el carrito 
})

//Interaccion con la tarjeta debito 

abrirMetodoPago.addEventListener("click", () =>{
    modalPagoContenedor.classList.toggle("modal-active-pago"); 
    modalContenedor.classList.toggle("modal-active");
})

cerrarMetodoPago.addEventListener("click", ()=>{
    modalPagoContenedor.classList.toggle("modal-active-pago"); 
})

modalPagoContenedor.addEventListener("click", () =>{        //Al clickear afuera del modal contenedor, el carrito se cierra
    cerrarMetodoPago.click()
})

modalPago.addEventListener("click", (e) =>{
    e.stopPropagation();                                 //Evita que al clickear en el modal pago se siga propagando el evento click que cierra el carrito 
})


