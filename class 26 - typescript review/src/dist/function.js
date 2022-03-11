"use strict";
function sum(number1, number2) {
    const sumarizedNumber = number1 + number2;
    return String(sumarizedNumber);
}
;
//console.log(sum(1,3));
let globalName = "";
function assignment(arg1) {
    globalName = arg1;
}
;
assignment("hola a todos");
console.log(globalName);
