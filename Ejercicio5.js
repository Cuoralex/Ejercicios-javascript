// Crear el objeto de la agenda telefónica
var agendaTelefonica = {};
// Añadir contactos a la agenda
agendaTelefonica["Juan Pérez"] = "123-456-789";
agendaTelefonica["María García"] = "987-654-321";
agendaTelefonica["Carlos López"] = "555-123-456";
// Variable que almacena el nombre de un contacto para buscar
var nombreBuscado = "María García";
// Buscar un contacto en la agenda
if (agendaTelefonica[nombreBuscado]) {
    console.log("El n\u00FAmero de tel\u00E9fono de ".concat(nombreBuscado, " es ").concat(agendaTelefonica[nombreBuscado]));
}
else {
    console.log("El contacto ".concat(nombreBuscado, " no se encontr\u00F3 en la agenda"));
}
