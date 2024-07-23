// Paso 1: Función generadora de contraseñas
function generarContraseña(longitud: number, incluirMayusculas: boolean, incluirNumeros: boolean, incluirSimbolos: boolean): string {
    const caracteresLetrasMinusculas: string = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresLetrasMayusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresNumeros: string = '0123456789';
    const caracteresSimbolos: string = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteresDisponibles = caracteresLetrasMinusculas;
    
    if (incluirMayusculas) {
        caracteresDisponibles += caracteresLetrasMayusculas;
    }
    if (incluirNumeros) {
        caracteresDisponibles += caracteresNumeros;
    }
    if (incluirSimbolos) {
        caracteresDisponibles += caracteresSimbolos;
    }

    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
        contraseña += caracteresDisponibles[indiceAleatorio];
    }

    return contraseña;
}

// Paso 2: Configuración de cómo generarla
const longitudContraseña: number = 12; //  Largo, entre 8 y 16
const incluirMayusculas: boolean = true;
const incluirNumeros: boolean = true;
const incluirSimbolos: boolean = false;

// Paso 3: Ejecutar función y mostrar la contraseña
const contraseñaGenerada = generarContraseña(longitudContraseña, incluirMayusculas, incluirNumeros, incluirSimbolos);
console.log(`La contraseña generada es: ${contraseñaGenerada}`);
