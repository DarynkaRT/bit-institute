import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() titulo_navbar : any;

  constructor() { }

  ngOnInit(): void {
  }

  en_contruccion() {
      Swal.fire({
          title: 'En contrucción',
          text: 'Pronto esta sección estara disponible!',
          imageUrl: 'assets/img/construccion.png',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Custom image',
          confirmButtonColor: '#1d1d1d',
      })
  }

}
