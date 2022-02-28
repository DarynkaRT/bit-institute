import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_api = 'http://127.0.0.1:3000/api/usuarios';
  url_api_validate = 'http://127.0.0.1:3000/api/usuarioV';
  constructor(private http:HttpClient) { }

  getProductos(usuarios: Login): Observable<any>{
      return this.http.post(this.url_api_validate, usuarios);
  }

  postProductos( usuario: Usuario): Observable<any>{
      return this.http.post(this.url_api, usuario);
  }


}
