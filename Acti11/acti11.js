class Estudiante {
  constructor(nombre) {
    this.name = nombre;
    this.hambre = true;
    this.dormido = true;
    this.estres = 1000;
    this.suciedad = true;
  }
}

function levantarse(prop) {
  prop = false;
  console.log(`Ya estoy despierto \n Dormido = ${prop}`);
  return prop
}

function cama() {
  console.log("Bien ya tendi la cama\n");
}

function bañarse(prop) {
  prop = false;
  console.log(`Listo ya estoy limpio\n Suciedad = ${prop}`);
  return prop
}

function tomarClase() {
  console.log("Interesante clase");
}

function desayunar(params) {
  params = false;
  console.log(`Tengo hambre pero ya termine de desayunar\n Hambre = ${params}`);
  return params
}

function jugar(params) {
  params = 0;

  console.log(
    `Por fin estoy jugando LOL mis niveles de estres bajaron a ${params}`
  );
  return params
}
const martin = new Estudiante("Martin Loera");

martin.dormido = setTimeout(levantarse, 5000);
setTimeout(cama, 3000);
martin.suciedad = setTimeout(bañarse, 3000);
setTimeout(tomarClase, 5000);
martin.hambre = setTimeout(desayunar, 8000);
martin.estres = setTimeout(jugar, 10000);
