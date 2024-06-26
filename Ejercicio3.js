// Paso 1: Definir las variables
var nombre = "Juan";
var apellido = "González";
// Paso 2: Generar el nombre de usuario
var primerasLetrasNombre = nombre.substring(0, 3).toLowerCase();
var primerasLetrasApellido = apellido.substring(0, 3).toLowerCase();
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var nombreUsuario = primerasLetrasNombre + primerasLetrasApellido + numeroAleatorio;
// Paso 3: Imprimir el nombre de usuario
console.log("Nombre de usuario generado:", nombreUsuario);
