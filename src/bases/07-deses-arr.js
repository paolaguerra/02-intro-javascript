
const personajes = ['Gungi', 'Omega', 'Hunter'];

const [ , , p3] = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

// Tarea

const usyStaty = (valor) => {
    return [valor, () => {console.log('Hola Mundo')} ];
}

const [nombre, setNombre] = usyStaty('Tech');

console.log(nombre);
setNombre();