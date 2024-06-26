// Paso 1: Generar número aleatorio entre 1 y 10
var numeroAdivinar = Math.floor(Math.random() * 10) + 1;
// Paso 2: Definir la suposición del jugador (para demostración)
var suposicionJugador = 5; // Puedes cambiar este valor para probar diferentes suposiciones
// Paso 3: Implementar la lógica del juego
for (var intento = 1; intento <= 3; intento++) {
    // Comparar suposición del jugador con número a adivinar
    if (suposicionJugador === numeroAdivinar) {
        console.log("¡Felicitaciones! Has adivinado el número correcto:", numeroAdivinar);
        break; // Terminar el juego si adivina correctamente
    }
    else if (suposicionJugador > numeroAdivinar) {
        console.log("La suposición es demasiado alta.");
    }
    else {
        console.log("La suposición es demasiado baja.");
    }
    // Solicitar una nueva suposición al jugador (en un programa real sería una entrada de usuario)
    // Para propósitos de demostración, mantenemos la misma suposición
}
// Si el jugador no adivina en 3 intentos
if (suposicionJugador !== numeroAdivinar) {
    console.log("¡Has perdido! El número correcto era:", numeroAdivinar);
}
