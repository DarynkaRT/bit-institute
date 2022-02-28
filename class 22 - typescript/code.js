var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("ola ke ase");
var varTexto = "texto";
varTexto = '2';
var varNumero = 23;
document.write(varNumero.toString());
var varBoleanos = true || false;
var varDinamica = "texto";
varDinamica = 90;
varDinamica = false;
varDinamica = ["texto1", 2, true];
varDinamica = { key1: "hola" };
var varArreglo = ["texto", 2, true, ["texto", 3]];
var varArregloN = [1, 2, 3, 4, 5];
var varArregloT = ["texto1", "texto2"];
var varArregloB = [true, true, false];
//tuple
var tupleArreglo1;
tupleArreglo1 = [1, 2, true, "hola"];
var tupleArregloD;
tupleArregloD = [[2, { key1: "valor" }, true], [2, { key1: "valor" }, true], [2, { key1: "valor" }, true]];
//datos vacios
// let vacio1: void = undefined;
// let vacio2: null = null;
// let vacio3: undefined = undefined;
// console.log(typeof(vacio1));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));
//funciones y metodos
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(2, 3));
// let numero: string | number = 98;
function sumar(num1, num2) {
    if (typeof (num1) === 'string')
        num1 = parseInt(num1);
    num2 = typeof (num2) === 'string' ? parseInt(num2) : num2;
    return num1 + num2;
}
console.log(sumar(1, "8"));
//parametro opcional
function saludo(nombre, apellido) {
    apellido = apellido == undefined ? '' : apellido;
    return "Hola ".concat(nombre, " ").concat(apellido, ", bienvenido...");
}
console.log(saludo('Miguel', 'Nieto'));
function soy_interface(data_api) {
    return "El identificador del personaje es: ".concat(data_api.identificador, " y el nombre es ").concat(data_api.nombre);
}
console.log(soy_interface({ identificador: 1, nombre: "Rick", imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }));
//Clases
var Usuario = /** @class */ (function () {
    function Usuario(nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario) {
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
        this.correo = correoUsuario;
    }
    Usuario.prototype.saludar = function () {
        return "Buenas noches ".concat(this.nombre, "...");
    };
    Usuario.prototype.resumen_ventas_x_vendedor = function (nro_factura, estado_entrega) {
        var estado = estado_entrega ? 'entregado' : 'en reparto';
        return "El vendedor ".concat(this.nombre, ", tuvo una factura con nro ").concat(nro_factura, " y su estado es ").concat(estado);
    };
    return Usuario;
}());
var Ventas = /** @class */ (function (_super) {
    __extends(Ventas, _super);
    function Ventas(nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario, facturaVenta, EstadoEntrega) {
        var _this = _super.call(this, nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario) || this;
        _this.factura = facturaVenta;
        _this.entregado = EstadoEntrega;
        return _this;
    }
    Ventas.prototype.resumen_ventas_x_vendedor = function () {
        return _super.prototype.resumen_ventas_x_vendedor.call(this, this.factura, this.entregado);
    };
    return Ventas;
}(Usuario));
var persona = new Ventas("Joan", "Melo", 95, "joan@correo.com", 123123123, true);
console.log(persona.resumen_ventas_x_vendedor());
