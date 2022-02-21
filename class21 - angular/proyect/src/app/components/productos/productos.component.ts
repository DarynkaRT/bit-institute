import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    listaProductos: Producto[] = [];

    constructor(private _productoService: ProductoService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }

    obtenerProductos(){
        this._productoService.getProductos().subscribe(data => {
            console.log(data);
            this.listaProductos = data
        }, error => {
            console.log(error)
        })
    }

}
