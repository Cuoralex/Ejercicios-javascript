// Función para obtener un número aleatorio entre 1 y 6
function lanzarDado(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Crear una variable para cada dado
let dado1: number = lanzarDado();
let dado2: number = lanzarDado();

// Calcular la suma de los valores de los dados
let suma: number = dado1 + dado2;

// Imprimir los valores de los dados y su suma
console.log(`El valor del primer dado es: ${dado1}`);
console.log(`El valor del segundo dado es: ${dado2}`);
console.log(`La suma de los valores de los dados es: ${suma}`);
