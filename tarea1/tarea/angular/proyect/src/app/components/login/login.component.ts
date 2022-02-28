import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
      this.loginForm = this.fb.group({
          // usuario: ['', [Validators.required, Validators.email]],
          usuario: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
          pass: ['', Validators.required]
      })
  }

  ngOnInit(): void {
      console.log("esta instruccion se ejecuta al cargar el componente");
  }

  accesoUsuario(){
      console.log(this.loginForm);
      console.log(this.loginForm.get('usuario')?.value);

      const data_usuario: Login = {
          correo: this.loginForm.get('usuario')?.value,
          password: this.loginForm.get('pass')?.value
      }

      this.usuarioService.getProductos(data_usuario).subscribe(data => {
        console.log(data)
        if(data != null){
            this.router.navigate(['/sistema/'+data._id]);
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: data.nombre
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No existe Usuario',
                text: 'Validar Informacion'
            })
        }
        
      }, error => {
        Swal.fire({
            icon: 'error',
            title: 'Algo esta pasando',
            text: 'Comuniquese con el administrador'
        })
        console.log(error)
    })

      console.log(data_usuario);

  }
}
