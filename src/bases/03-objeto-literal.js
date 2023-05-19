
const persona = {
    nombre: 'Ahsoka',
    apellido: 'Tano',
    edad: 44,
    direccion: {
        ciudad: 'Shili',
        region: 'Togrunta Space'
    }
};

// console.table({persona})

const persona2 = {...persona};
persona2.apellido = 'Skywalwer';

console.log({persona})
console.log({persona2})