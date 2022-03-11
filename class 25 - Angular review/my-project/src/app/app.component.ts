import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Hello World!';
  number = 5;
  source = 'https://www.w3schools.com/howto/img_avatar.png';
  parrafo = "vgfgsgsdsdrrtbs";
  otraCosa = "esto es una entrada";
  elementType = "text";
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  sayHello(){
    alert("Hola mundo desde una función");
  }

  changeName(){
    this.person.name = "Juan";
  }

  changeNameByInput(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
