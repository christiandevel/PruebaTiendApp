export class Producto {
  id?: number;
  descripcion: string;
  talla: string;
  observaciones: string;
  cantidad_inventario: number;
  precio: number;
  Marca: Marca;

  constructor(
    descripcion: string,
    marca: Marca,
    talla: string,
    observaciones: string,
    cantidad_inventario: number,
    precio: number
  ) {
    this.descripcion = descripcion;
    this.Marca = marca;
    this.talla = talla;
    this.observaciones = observaciones;
    this.cantidad_inventario = cantidad_inventario;
    this.precio = precio;
  }
}

export class Marca {
  id?: number;
  nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}
