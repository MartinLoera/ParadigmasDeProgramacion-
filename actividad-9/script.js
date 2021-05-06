var cadena = ""

function rev() {
    cadena = document.getElementById("cadena").value;
    cadena = cadena.split('').reverse().join('')
    console.log(cadena)
    alert(cadena)
}