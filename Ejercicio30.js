// Verificar si existe un viernes 13 al mes o al año
function existeViernes13(mes, año) {
    // Crear una fecha para el 13 del mes dado
    var fecha = new Date(año, mes - 1, 13);
    // En la semana del 13
    var diaDeLaSemana = fecha.getDay();
    // Será verdadero si el día es viernes (5), falso al contrario
    return diaDeLaSemana === 5;
}
// V. gr.
var mesEjemplo = 3; // Marzo
var añoEjemplo = 2024;
console.log("\u00BFExiste un viernes 13 en ".concat(mesEjemplo, "/").concat(añoEjemplo, "? ").concat(existeViernes13(mesEjemplo, añoEjemplo)));
