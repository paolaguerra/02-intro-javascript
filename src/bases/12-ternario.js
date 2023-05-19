
// Operador condicional termnario
// (La forma resumida del if y else)


// Forma larga

const activo = true;

let mensaje1 = '';

if (!activo) {
    mensaje1 = 'Activo';
} else {
    mensaje1 = 'Inactivo';
}

// Formas resumidas
// ? = cuando la condicion se cumple
// : = caso contrario
// && = si es true
// ! = negacion (Ej: !activo: osea, no es true)

const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
const mensaje3 = (activo) ? 'Activo' : null;
const mensaje4 = activo && 'Activo';

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);
console.log(mensaje4);