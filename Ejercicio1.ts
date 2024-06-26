// Paso 1: Definir las variables de entrada
let peso: number = 70; // peso en kilogramos
let altura: number = 1.75; // altura en metros

// Paso 2: Calcular el BMI
let bmi: number = peso / (altura * altura);

// Paso 3: Imprimir el BMI
console.log(`El BMI calculado es: ${bmi.toFixed(2)}`); // toFixed(2) para mostrar solo dos decimales

// Paso 4: Interpretar el BMI
if (bmi < 18.5) {
    console.log("Bajo peso");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Peso normal");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}

