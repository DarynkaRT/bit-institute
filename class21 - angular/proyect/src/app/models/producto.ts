export class Producto{
    _id?: any;
    nombre: string;
    precio: string;
    proveedor: string;
    cantidad_stock: number;

    constructor(nombre: string, precio:string, proveedor: string, cantidad_stock: number){
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
        this.cantidad_stock = cantidad_stock;
    }
}
