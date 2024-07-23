// Función - Verificar si una cadena es un pangrama
function esPangrama(texto) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const textoLimpio = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const letrasUnicas = new Set(textoLimpio);
    return alfabeto.split('').every(letra => letrasUnicas.has(letra));
}

// Función - Verificar si una cadena es un isograma
function esIsograma(texto) {
    const letras = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const frecuencia = {};
    for (const letra of letras) {
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    }
    return Object.values(frecuencia).every(count => count === 1);
}

// Función - Verificar si una cadena es un heterograma
function esHeterograma(texto) {
    const letras = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const letrasUnicas = new Set(letras);
    return letrasUnicas.size === letras.length;
}

// Ejemplos de uso
const ejemploHeterograma = "sombre";
const ejemploIsograma = "horizonte";
const ejemploPangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi";

console.log(`"${ejemploHeterograma}" es heterograma: ${esHeterograma(ejemploHeterograma)}`);
console.log(`"${ejemploIsograma}" es isograma: ${esIsograma(ejemploIsograma)}`);
console.log(`"${ejemploPangrama}" es pangrama: ${esPangrama(ejemploPangrama)}`);
