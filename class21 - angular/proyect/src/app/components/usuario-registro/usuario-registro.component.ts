import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.component.html',
  styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {
  
  usuarioForm: FormGroup;
  titulo_formulario = 'Crear usuario';
  soloNumeros = /^([0-9])*$/;
  
  genero:any = [];
  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private idProductoPath: ActivatedRoute) {

    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      genero: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(this.soloNumeros)]],
      edad: ['', Validators.pattern(this.soloNumeros)],
      correo: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
      password: ['', [Validators.required]],

    });
    
    this.genero = this.getGenero()
    

   }

  getGenero() {
    return [
      { id: 'M', name: 'Masculino' },
      { id: 'F', name: 'Femenino' },
    ];
  }

  ngOnInit(): void {
  }

  crearUsuario() {
    const data_producto_form: Usuario = {
        nombre: this.usuarioForm.get('nombre')?.value,
        primer_apellido: this.usuarioForm.get('primer_apellido')?.value,
        segundo_apellido: this.usuarioForm.get('segundo_apellido')?.value,
        genero: this.usuarioForm.get('genero')?.value,
        cedula: this.usuarioForm.get('cedula')?.value,
        edad: this.usuarioForm.get('edad')?.value,
        correo: this.usuarioForm.get('correo')?.value,
        password: this.usuarioForm.get('password')?.value
    }
    this.usuarioService.postProductos(data_producto_form).subscribe(data => {
      this.router.navigate(['/ingreso']);
      Swal.fire({
          icon: 'success',
          title: 'Dato guardado',
          text: 'El producto se creo correctamente'
      })
    }, error => {
      Swal.fire({
          icon: 'error',
          title: 'Algo esta pasando',
          text: 'Comuniquese con el administrador'
      })
      console.log(error)
  })

}

}
