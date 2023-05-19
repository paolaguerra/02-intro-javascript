import { getHeoreById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // Tarea
//         // Importar el
//         const heroe = getHeoreById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(error => console.warn(error));

const getHeoreByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeoreById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("El heroe con ese ID no existe");
      }
    }, 2000);
  });
};

getHeoreByIdAsync(1)
.then(console.log)
.catch(console.warn)

