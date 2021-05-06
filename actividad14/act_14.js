const poner_casco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy poniendome el casco")
        }, 1000)
    })
};

const comprar_guantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy comprando guantes")
        }, 2000)
    })
};

const pasear_bisicleta = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Estoy paseandome")
      }, 8000)
  })
};

const actividades = async () => {
    console.log("Haciendo actividades")
    const casco = await poner_casco()
    console.log(casco)
    const guantes = await comprar_guantes()
    console.log(guantes)
    const pasear = await pasear_bisicleta()
    console.log(pasear_bisicleta)

}

actividades()