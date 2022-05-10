class Producto {
    constructor(id, nombre, precio, stock, tipo, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = Number(precio);
      this.stock = stock;
      this.tipo = tipo;
      this.imagen = imagen; 
    }

}
  
const arrayProductos = []
  
arrayProductos.push(new Producto(1, "Picado grueso", 400, 10, "salamin", "./imagenes/salame1.jpg"));
arrayProductos.push(new Producto(2, "Picado fino", 400, 10, "salamin", "./imagenes/salamin-picado-fino2.jpg"));
arrayProductos.push(new Producto(3, "Picado grueso a la pimienta", 1500, 6, "salamin", "./imagenes/picado-grueso-pimienta.jpg"));
arrayProductos.push(new Producto(4, "Picado fino al aji", 1500, 7, "salamin", "./imagenes/picado-fino-al-aji-jpg.jpg"));
arrayProductos.push(new Producto(5, "Fuet tradicional", 500, 8, "salamin", "./imagenes/fuet-tandil.jpg"));
arrayProductos.push(new Producto(6, "Fuet con jamon crudo", 650, 5, "salamin", "./imagenes/fuet-serrano.jpg"));
arrayProductos.push(new Producto(7, "Spianatta", 2400, 7, "salamin", "./imagenes/spianatta-al-aji.jpg"));
arrayProductos.push(new Producto(8, "Queso Ahumado", 1320, 10, "queso", "./imagenes/don-atilio-ahumado.jpg"));
arrayProductos.push(new Producto(9, "Queso al oregano", 1320, 10, "queso", "./imagenes/don-atilio-oregano.jpg"));
arrayProductos.push(new Producto(10, "Queso Reggianito", 1280, 4, "queso", "./imagenes/Reggianito.jpg"));
arrayProductos.push(new Producto(11, "Queso Petato", 1320, 10, "queso", "./imagenes/Petato.jpg"));
arrayProductos.push(new Producto(12, "Cerveza Ipa", 500, 35, "cerveza", "./imagenes/tandilia-ipa2.jpg"));
arrayProductos.push(new Producto(13, "Cerveza Red", 450, 20, "cerveza", "./imagenes/tandilia-red1.jpg"));
arrayProductos.push(new Producto(14, "Cerveza Honey", 450, 20, "cerveza", "./imagenes/tandilia-honey1.jpg"));
arrayProductos.push(new Producto(15, "Cerveza Blondie", 450, 20, "cerveza", "./imagenes/tandilia-blondie.jpg"));
arrayProductos.push(new Producto(16, "Cerveza Rockaway", 450, 20, "cerveza", "./imagenes/tandilia-rockaway.jpg"));

export {arrayProductos};