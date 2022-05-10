
export const contadorCarrito = document.getElementById('contador-carrito');
export const precioTotal = document.getElementById('precioTotal');

export const actualizarCarrito = (carritoDeCompras) => {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.stock, 0);
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.stock), 0);
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
};  


