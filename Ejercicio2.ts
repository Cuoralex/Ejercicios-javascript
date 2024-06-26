// Paso 1: Definir las variables
let temperaturaCelsius: number = 20; // Temperatura en grados Celsius
let temperaturaFahrenheit: number = 68; // Temperatura en grados Fahrenheit

// Paso 2: Convertir de Celsius a Fahrenheit
temperaturaFahrenheit = temperaturaCelsius * 9 / 5 + 32;

// Paso 3: Convertir de Fahrenheit a Celsius
temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

// Paso 4: Imprimir las temperaturas convertidas
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)} °F`);
console.log(`Temperatura en Celsius: ${temperaturaCelsius.toFixed(2)} °C`);
