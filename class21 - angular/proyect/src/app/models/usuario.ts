export class Usuario{
    _id?: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    genero: string;
    cedula: number;
    edad: number;
    correo: string;
    password: string;

    constructor(nombreUsuario: string, primer_apellidUsuario: string, segundo_apellidoUsuario: string, generoUsuario: string,  cedulaUsuario: number, edadUsuario: number, correoUsuario: string, passUsuario: string){
        this.nombre = nombreUsuario;
        this.primer_apellido= primer_apellidUsuario;
        this.segundo_apellido= segundo_apellidoUsuario;
        this.genero = generoUsuario;
        this.cedula = cedulaUsuario;
        this.edad = edadUsuario;
        this.correo = correoUsuario;
        this.password = passUsuario;
        }    
    }
