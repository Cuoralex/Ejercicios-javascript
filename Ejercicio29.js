// Función - Verificar si una cadena es un pangrama
function esPangrama(texto) {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    var textoLimpio = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var letrasUnicas = new Set(textoLimpio);
    return alfabeto.split('').every(function (letra) { return letrasUnicas.has(letra); });
}
// Función - Verificar si una cadena es un isograma
function esIsograma(texto) {
    var letras = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var frecuencia = {};
    for (var _i = 0, letras_1 = letras; _i < letras_1.length; _i++) {
        var letra = letras_1[_i];
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    }
    return Object.values(frecuencia).every(function (count) { return count === 1; });
}
// Función - Verificar si una cadena es un heterograma
function esHeterograma(texto) {
    var letras = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var letrasUnicas = new Set(letras);
    return letrasUnicas.size === letras.length;
}
// Ejemplos de uso
var ejemploHeterograma = "sombre";
var ejemploIsograma = "horizonte";
var ejemploPangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi";
console.log("\"".concat(ejemploHeterograma, "\" es heterograma: ").concat(esHeterograma(ejemploHeterograma)));
console.log("\"".concat(ejemploIsograma, "\" es isograma: ").concat(esIsograma(ejemploIsograma)));
console.log("\"".concat(ejemploPangrama, "\" es pangrama: ").concat(esPangrama(ejemploPangrama)));
