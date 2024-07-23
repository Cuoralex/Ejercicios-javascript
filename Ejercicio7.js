// Paso 1: Crear una función para validar la dirección de correo electrónico
function esCorreoValido(correo) {
    var _a, _b, _c;
    var partes = correo.split('@');
    var tieneArroba = partes.length === 2;
    var dominio = (_a = partes[1]) === null || _a === void 0 ? void 0 : _a.split('.');
    var tienePunto = tieneArroba && dominio.length > 1;
    var tieneCaracteresValidos = tienePunto &&
        partes[0].length > 0 &&
        ((_b = dominio[0]) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
        ((_c = dominio.slice(-1)[0]) === null || _c === void 0 ? void 0 : _c.length) > 0;
    return tieneArroba && tienePunto && tieneCaracteresValidos;
}
// Paso 2: Declarar una variable para almacenar la dirección de correo electrónico
var direccionCorreo = "ejemplo@dominio.com"; // Cambia esto por la dirección de correo electrónico que quieres validar
// Paso 3: Verificar y mostrar el resultado
if (esCorreoValido(direccionCorreo)) {
    console.log("La dirección de correo electrónico es válida.");
}
else {
    console.log("La dirección de correo electrónico no es válida.");
}
