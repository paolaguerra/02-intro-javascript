import { heroes } from "../data/heroes";

const getHeoreById = (id) => heroes.find(heroe => heroe.id === id)

// console.log(getHeoreById(2))

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)

// console.log(getHeroeByOwner('DC'));

export {
    getHeoreById,
    getHeroeByOwner
}
