import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro-producto',
    templateUrl: './registro-producto.component.html',
    styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

    productoForm: FormGroup;
    soloNumeros = /^([0-9])*$/;

    constructor(private fb: FormBuilder) {
        this.productoForm = this.fb.group({
            nombre: ['', Validators.required],
            proveedor: ['', Validators.required],
            precio: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
            stock_productos: ['', Validators.pattern(this.soloNumeros)]
        })
    }

    ngOnInit(): void {
    }

    agregarProducto(){
        console.log(this.productoForm)
    }

}
