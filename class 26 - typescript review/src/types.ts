let myName: string = 'Max';
//myName = true; //Error

let age: number = 27;
//age = '27'; //Error

let isPresent: boolean = true;
let names: string[] = ['Max', 'Anna'];
let numbers: number[] = [1, 2, 3];

let nothing: null = null;
let notValid: undefined = undefined;

let number: number;

let somthingNothingHappen: never;

let person: Object ={
  name: 'Max',
  age: 27  
};

let variable: any = 'Max';
variable = 27;
variable = true;

let grade: number | string | string[]  = ["9"];
grade = 10;
//grade = true; //Error