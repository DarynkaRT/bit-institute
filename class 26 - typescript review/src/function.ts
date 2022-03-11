function sum(number1: number, number2: number): string | number{
  const sumarizedNumber: number = number1 + number2;
  return String(sumarizedNumber);
};

//console.log(sum(1,3));

let globalName: string = "";

function assignment(arg1: string): void{
  globalName = arg1;
};

assignment("hola a todos");

console.log(globalName)