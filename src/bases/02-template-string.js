
const nombre = 'Paola';
const apellido = 'Guerra';

//const NombreCompleto = (nombre + ' ' + apellido);
const NombreCompleto = `${nombre} ${apellido}`

console.log(NombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre ;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);