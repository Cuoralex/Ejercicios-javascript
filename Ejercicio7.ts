// Paso 1: Crear una función para validar la dirección de correo electrónico
function esCorreoValido(correo: string): boolean {
    const partes = correo.split('@');
    const tieneArroba = partes.length === 2;
    const dominio = partes[1]?.split('.');
    const tienePunto = tieneArroba && dominio.length > 1;
    const tieneCaracteresValidos = tienePunto &&
        partes[0].length > 0 &&
        dominio[0]?.length > 0 &&
        dominio.slice(-1)[0]?.length > 0;

    return tieneArroba && tienePunto && tieneCaracteresValidos;
}

// Paso 2: Declarar una variable para almacenar la dirección de correo electrónico
let direccionCorreo: string = "ejemplo@dominio.com"; // Cambia esto por la dirección de correo electrónico que quieres validar

// Paso 3: Verificar y mostrar el resultado
if (esCorreoValido(direccionCorreo)) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}
