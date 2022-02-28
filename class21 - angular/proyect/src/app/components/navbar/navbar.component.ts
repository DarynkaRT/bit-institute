import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input() titulo_navbar: string = "";

    constructor() { }

    ngOnInit(): void {
        console.log(this.titulo_navbar)
    }

}