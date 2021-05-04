const poner_casto = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            console.log('Compar casco')
        )
    }, 1000)
});

const comprar_guantes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            console.log('Ya compre los guantes')
        )
    }, 2000)
});

const pasear_bisicleta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            console.log('Termine de pasearme')
        )
    }, 8000)
});

const alistarse = () => {
    poner_casto
    comprar_guantes
    pasear_bisicleta
}

alistarse()