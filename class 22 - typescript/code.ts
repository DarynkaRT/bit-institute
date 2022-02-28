console.log("ola ke ase");

var varTexto: string = "texto";
varTexto = '2';

var varNumero: number = 23;
document.write(varNumero.toString());

var varBoleanos: boolean = true || false;

var varDinamica: any = "texto";
varDinamica = 90;
varDinamica = false;
varDinamica = ["texto1", 2, true];
varDinamica = { key1: "hola" };


var varArreglo: any[] = ["texto", 2, true, ["texto", 3]];
var varArregloN: number[] = [1, 2, 3, 4, 5];
var varArregloT: string[] = ["texto1", "texto2"];
var varArregloB: boolean[] = [true, true, false];


//tuple
let tupleArreglo1: [number, number, boolean, string];
tupleArreglo1 = [1, 2, true, "hola"];

let tupleArregloD: [number, object, boolean][];
tupleArregloD = [[2, { key1: "valor" }, true], [2, { key1: "valor" }, true], [2, { key1: "valor" }, true]];

//datos vacios
// let vacio1: void = undefined;
// let vacio2: null = null;
// let vacio3: undefined = undefined;

// console.log(typeof(vacio1));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));


//funciones y metodos
function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multiplicar(2, 3));

// let numero: string | number = 98;

function sumar(num1: number | string, num2: number | string): number {
    if (typeof (num1) === 'string')
        num1 = parseInt(num1);

    num2 = typeof (num2) === 'string' ? parseInt(num2) : num2;

    return num1 + num2;
}

console.log(sumar(1, "8"));


//parametro opcional
function saludo(nombre: string, apellido?: string): string {
    apellido = apellido == undefined ? '' : apellido;
    return `Hola ${nombre} ${apellido}, bienvenido...`;
}

console.log(saludo('Miguel', 'Nieto'))


// function hago_un_proceso(valor: any, accion_usuario: string): void {
//     let localArray: any;
//     switch (accion_usuario) {
//         case 'agregar':
//             if (localStorage.getItem("nuestro_array") == null) {
//                 localStorage.setItem("nuestro_array", valor);
//             } else {
//                 localArray = localStorage.getItem("nuestro_array");
//                 console.clear();
//                 console.log(localArray);
//                 localArray = localArray.split(',');
//                 console.log(localArray);
//                 localArray.push(valor);
//                 localStorage.setItem("nuestro_array", localArray);
//             }
//             break;
//         case 'eliminar':
//             localArray = localStorage.getItem("nuestro_array");
//             localArray = localArray.split(',');
//             if(localArray.length > 1){
//                 localArray.pop();
//                 localStorage.setItem("nuestro_array",localArray);
//             }else{
//                 localStorage.removeItem("nuestro_array");
//             }
//             break;
//     }
// }

// hago_un_proceso('mi_valor', 'eliminar');


//interface
interface Iestrucutura{
    identificador: number,
    nombre: string,
    imagen: string
}

function soy_interface(data_api:Iestrucutura):any{
    return `El identificador del personaje es: ${data_api.identificador} y el nombre es ${data_api.nombre}`;
}

console.log(soy_interface({identificador:1, nombre:"Rick", imagen:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}));


//Clases

class Usuario {
    public nombre: string;
    public apellido: string;
    private edad: number;
    private correo: string;

    constructor(nombreUsuario: string, apellidoUsuario: string, edadUsuario: number, correoUsuario: string){
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
        this.correo = correoUsuario;
    }

    saludar(){
        return `Buenas noches ${this.nombre}...`;
    }

    resumen_ventas_x_vendedor(nro_factura: number, estado_entrega: boolean){
        let estado = estado_entrega ? 'entregado' : 'en reparto';
        return `El vendedor ${this.nombre}, tuvo una factura con nro ${nro_factura} y su estado es ${estado}`;
    }


}

class Ventas extends Usuario{
    factura: number;
    entregado: boolean;

    constructor(
        nombreUsuario: string, apellidoUsuario: string, edadUsuario: number, 
        correoUsuario: string, facturaVenta: number, EstadoEntrega: boolean
        ){
            super(nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario);
            this.factura = facturaVenta;
            this.entregado = EstadoEntrega;
        }

        resumen_ventas_x_vendedor(){
            return super.resumen_ventas_x_vendedor(this.factura, this.entregado);
        }
    
}

var persona = new Ventas("Joan", "Melo", 95, "joan@correo.com", 123123123, true);
console.log(persona.resumen_ventas_x_vendedor());

