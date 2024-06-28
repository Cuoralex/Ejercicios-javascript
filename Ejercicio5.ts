// Crear el objeto de la agenda telefónica
let agendaTelefonica: { [nombre: string]: string } = {};

// Añadir contactos a la agenda
agendaTelefonica["Juan Pérez"] = "123-456-789";
agendaTelefonica["María García"] = "987-654-321";
agendaTelefonica["Carlos López"] = "555-123-456";

// Variable que almacena el nombre de un contacto para buscar
let nombreBuscado: string = "María García";

// Buscar un contacto en la agenda
if (agendaTelefonica[nombreBuscado]) {
    console.log(`El número de teléfono de ${nombreBuscado} es ${agendaTelefonica[nombreBuscado]}`);
} else {
    console.log(`El contacto ${nombreBuscado} no se encontró en la agenda`);
}
