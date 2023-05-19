const getImagenPromesa = () =>
  new Promise((resolve) => resolve("https://sjahdkas.com"));

getImagenPromesa().then(console.log);

// El mismo ejercicio pero con ASYNC

const getImagen = async () => {
  return "https://sjahdkas.com";
};

getImagen().then(console.log);

// El mismo ejercicio pero con ASYNC y AWAIT

const getImagenes = async () => {

  try {

    const apiKey = "CcdfUnivGYoURQcawOVTwed7q57fVgvM";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error)
  }
};

getImagenes();
