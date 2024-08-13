
const credType = document.getElementById('tipoCredito')

const credito = document.getElementById('valorCredito').value

const cuotas = document.getElementById('cuotas')

const btnCalcular = document.getElementById('calcular')

let tasa
let interes
let descuento

btnCalcular.addEventListener('click', () => {

    intereses()
    
    console.log(`Tasa: ${tasa}. Interes: ${interes}. Cuotas: ${cuotas.value}`)

        
    const mensualidad = ((credito * tasa * Math.pow((1+tasa),cuotas.value)) / (Math.pow((1+tasa),cuotas.value)-1)) - descuento
    console.log( `El valor de la mensualidad es ${parseInt(mensualidad)}. El interes mensual es: ${interes}. Ud tiene un descuento mensual de: ${descuento}`  )

});


function intereses(){
    descuento = 0
    if(credType.value == "LII"){
        tasa = 0.025
    } else {
        tasa = 0.029
    }
    interes = credito * tasa

    if(cuotas.value < 6){
        descuento = interes * 0.2
    }
    if(cuotas.value > 12 && cuotas.value < 24){
        descuento = interes * 0.4
    }
    if(cuotas.value > 24){
        descuento = interes * 0.7
    }

}

