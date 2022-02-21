import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingreso', component: LoginComponent },
  { path: 'sistema', component: DashboardComponent },
  { path: 'inventario', component: ProductosComponent },
  { path: '404', component: Pagina404Component },
  { path: 'producto-formulario', component: RegistroProductoComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
