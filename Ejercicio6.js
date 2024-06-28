// Función para obtener un número aleatorio entre 1 y 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
// Crear una variable para cada dado
var dado1 = lanzarDado();
var dado2 = lanzarDado();
// Calcular la suma de los valores de los dados
var suma = dado1 + dado2;
// Imprimir los valores de los dados y su suma
console.log("El valor del primer dado es: ".concat(dado1));
console.log("El valor del segundo dado es: ".concat(dado2));
console.log("La suma de los valores de los dados es: ".concat(suma));
