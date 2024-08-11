const tarifas = [
    { id: 1, estrato: 1, valor: 1200 },
    { id: 2, estrato: 2, valor: 2300 },
    { id: 3, estrato: 3, valor: 3200 }
]

let consumoUsuarios = []

//Llenando de select

let selectEstrato = document.getElementById('selectEstrato')
tarifas.forEach(element => {
    const option = document.createElement('option')
    option.value = element.id
    option.text = element.estrato
    selectEstrato.appendChild(option)
})

//Captura valores del formulario y creación de vaariables

const cuerpoTabla = document.getElementById('tableBody')
let usuario = document.getElementById('usuario')
let cont = 0
let usuarioIng
let btnCalcular = document.getElementById('calcular')

//funcion que usa el evento click para capturar la ejecución del boton

btnCalcular.addEventListener('click', () => {
    usuarioIng=usuario.value.toUpperCase()

    //busca en el arreglo consumoUsuarios para evitar usuarios duplicados

    if(consumoUsuarios.find((element) => element == usuarioIng)){
        alert("El usuario ya ha sido ingresado")
        usuario.value=''
        selectEstrato.value=''
        document.getElementById('consumo').value = ''
        usuario.focus()
        return
    }

    let consumo = parseFloat(document.getElementById('consumo').value)

    let estratoUsusuario = tarifas.find(v => v.id == selectEstrato.value)
    let total

    if (consumo <= 20) {
        total = parseInt(estratoUsusuario.valor) * consumo + 5800

    } else {  //Si consumió más de 20 metros cúbicos aplicará incremento del 10%
        total = parseInt(estratoUsusuario.valor) * consumo + 5800
        const recargo = total * 0.1
        total = total + recargo
    }
    cont++
    consumoUsuarios.push(usuarioIng)
    //Tabla que mostrará los consumos por usuario con su respectivo valor
    const nuevaFila = document.createElement('tr')
    if(consumo>20){
        nuevaFila.className = 'table-danger'
        nuevaFila.style.fontStyle = 'italic'
    }
    nuevaFila.innerHTML = `
        <td>${cont}</td>
        <td>${usuarioIng}</td>
        <td>${estratoUsusuario.estrato}</td>
        <td>${consumo}</td>
        <td>${total}</td>
    `
    cuerpoTabla.appendChild(nuevaFila)

    usuario.value=''
    selectEstrato.value=''
    document.getElementById('consumo').value = ''
    usuario.focus()
});

selectEstrato.addEventListener('change', () => {
        document.getElementById('consumo').focus()
    })






