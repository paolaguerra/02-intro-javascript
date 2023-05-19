
// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Ahsoka',
    edad: 44,
    clave: 'Tano',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usesContext = ({ nombre, edad, clave, rango = 'Jedi' }) => {
   
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        años: edad, 
        latlng: {
            lat: 12.2323,
            lng: 14.3433,
        }
    }

}

const {nombreClave, años, latlng:{lat, lng}} = usesContext(persona);
console.log(nombreClave, años)
console.log(lat, lng)