// Verificar si existe un viernes 13 al mes o al año
function existeViernes13(mes: number, año: number): boolean {
    // Crear una fecha para el 13 del mes dado
    const fecha: Date = new Date(año, mes - 1, 13);
    
    // En la semana del 13
    const diaDeLaSemana: number = fecha.getDay();
    
    // Será verdadero si el día es viernes (5), falso al contrario
    return diaDeLaSemana === 5;
}

// V. gr.
const mesEjemplo: number = 3; // Marzo
const añoEjemplo: number = 2024;

console.log(`¿Existe un viernes 13 en ${mesEjemplo}/${añoEjemplo}? ${existeViernes13(mesEjemplo, añoEjemplo)}`);