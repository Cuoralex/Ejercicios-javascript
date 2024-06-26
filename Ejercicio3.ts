// Paso 1: Definir las variables
let nombre: string = "Juan";
let apellido: string = "González";

// Paso 2: Generar el nombre de usuario
let primerasLetrasNombre: string = nombre.substring(0, 3).toLowerCase();
let primerasLetrasApellido: string = apellido.substring(0, 3).toLowerCase();
let numeroAleatorio: number = Math.floor(Math.random() * 100) + 1;

let nombreUsuario: string = primerasLetrasNombre + primerasLetrasApellido + numeroAleatorio;

// Paso 3: Imprimir el nombre de usuario
console.log("Nombre de usuario generado:", nombreUsuario);
