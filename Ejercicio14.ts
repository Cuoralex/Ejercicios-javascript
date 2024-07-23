// Paso 1: Importar las librerías necesarias
import * as readline from 'readline';

// Paso 2: Configurar la interfaz de lectura de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Paso 3: Función para verificar si la contraseña es válida
function verificarContraseña(contraseña: string): void {
    // Variables para almacenar si cada requisito se cumple
    let longitudValida = false;
    let contieneMayuscula = false;
    let contieneMinuscula = false;
    let contieneNumero = false;

    // Verificar la longitud de la contraseña
    if (contraseña.length >= 8) {
        longitudValida = true;
    }

    // Verificar si contiene al menos una letra mayúscula
    if (/[A-Z]/.test(contraseña)) {
        contieneMayuscula = true;
    }

    // Verificar si contiene al menos una letra minúscula
    if (/[a-z]/.test(contraseña)) {
        contieneMinuscula = true;
    }

    // Verificar si contiene al menos un número
    if (/[0-9]/.test(contraseña)) {
        contieneNumero = true;
    }

    // Imprimir los resultados
    if (longitudValida && contieneMayuscula && contieneMinuscula && contieneNumero) {
        console.log("Contraseña válida");
    } else {
        console.log("La contraseña no cumple con los siguientes requisitos:");
        if (!longitudValida) {
            console.log("- Debe tener al menos 8 caracteres de longitud");
        }
        if (!contieneMayuscula) {
            console.log("- Debe contener al menos una letra mayúscula");
        }
        if (!contieneMinuscula) {
            console.log("- Debe contener al menos una letra minúscula");
        }
        if (!contieneNumero) {
            console.log("- Debe contener al menos un número");
        }
    }
}

// Paso 4: Pedir a usuario que ingrese la contraseña
rl.question('Por favor, ingrese una contraseña: ', (contraseña) => {
    verificarContraseña(contraseña);
    rl.close();
});
