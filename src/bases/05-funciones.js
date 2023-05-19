// funciones en JS

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar("Molly"));
console.log(saludar2("Olivia"));
console.log(saludar3("Paola"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "mollylittlefox",
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruenas

const getUsuarioActivo = (nombre) => ({
  uid: "DEF456",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Olivia");
console.log(usuarioActivo);
