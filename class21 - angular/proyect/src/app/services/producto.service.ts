import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    url_api = 'http://127.0.0.1:3000/api/productos';

    constructor(private http:HttpClient) { }

    getProductos(): Observable<any>{
        return this.http.get(this.url_api);
    }
}
