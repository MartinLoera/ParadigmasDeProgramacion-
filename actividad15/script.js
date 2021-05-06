const url = "https://jsonplaceholder.typicode.com/photos";
const lista = document.getElementById("lista");

const obtenerFotos = async () => {
  const response = await fetch(url);
  const fotos = await response.json();
  return fotos;
};

obtenerFotos()
  .then((fotos) => {
    fotos.map((foto) => {
      let li = document.createElement("li");
      li.innerHTML = `<a href="detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
      lista.appendChild(li);
    });
  })
  .catch((error) => {
    getElementById("error").innerHTML = error.massage;
    console.log(error)
  })
  .finally(() => {
      document.getElementById('cargando').innerHTML = "<br>"
      document.getElementById('cargandoGif').src = ""
      console.log("proceso terminado")
  })
  
