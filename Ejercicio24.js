// Paso 1: Función generadora de contraseñas
function generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    var caracteresLetrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    var caracteresLetrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var caracteresNumeros = '0123456789';
    var caracteresSimbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    var caracteresDisponibles = caracteresLetrasMinusculas;
    if (incluirMayusculas) {
        caracteresDisponibles += caracteresLetrasMayusculas;
    }
    if (incluirNumeros) {
        caracteresDisponibles += caracteresNumeros;
    }
    if (incluirSimbolos) {
        caracteresDisponibles += caracteresSimbolos;
    }
    var contraseña = '';
    for (var i = 0; i < longitud; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
        contraseña += caracteresDisponibles[indiceAleatorio];
    }
    return contraseña;
}
// Paso 2: Configuración de cómo generarla
var longitudContraseña = 12; //  Largo, entre 8 y 16
var incluirMayusculas = true;
var incluirNumeros = true;
var incluirSimbolos = false;
// Paso 3: Ejecutar función y mostrar la contraseña
var contraseñaGenerada = generarContraseña(longitudContraseña, incluirMayusculas, incluirNumeros, incluirSimbolos);
console.log("La contrase\u00F1a generada es: ".concat(contraseñaGenerada));
