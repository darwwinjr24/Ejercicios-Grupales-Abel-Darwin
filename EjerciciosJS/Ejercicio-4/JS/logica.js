let credType = document.getElementById("tipoCredito");
let credito = document.getElementById("valorCredito");
let cuotas = document.getElementById("cuotas");
const btnCalcular = document.getElementById("calcular");
const tabla = document.getElementById("tabla");

let tasa;
let interes;
let descuento;
let tipoCredito;

btnCalcular.addEventListener("click", () => {
    intereses();

    console.log(`Tasa: ${tasa}. Interes: ${interes}. Cuotas: ${cuotas.value}`);

    //La ecuación para calcular la cuota mensual la obtuve de https://comparabien.com.pe/faq/como-calcular-cuota-prestamo.
    //Sólo agregué el descuento tal como lo pide el ejercicio

    const mensualidad =
        (credito.value * tasa * Math.pow(1 + tasa, cuotas.value)) /
        (Math.pow(1 + tasa, cuotas.value) - 1) - descuento;

    //////////////Inserción de tabla al modal////////////

    /* Limpia la tabla en caso de que ya tenga información */
    const tbodyExist = document.getElementById('table-body')
    if(tbodyExist){
        tbodyExist.remove()
    }
        
    const cuerpoTabla = document.createElement("tbody");
    cuerpoTabla.id = "table-body"
    cuerpoTabla.innerHTML = `
                                <tr>
                                    <th scope="row">Monto solicitado</th>
                                    <td>$${credito.value}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tipo de crédito</th>
                                    <td>${tipoCredito}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Interés mensual</th>
                                    <td colspan="2">${(tasa * 100).toFixed(1)}%  ->  $${interes}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Número de cuotas</th>
                                    <td colspan="2">${cuotas.value}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Valor cuota mensual</th>
                                    <td colspan="2">$${parseInt(mensualidad)}</td>
                                </tr>
                            `;

    tabla.appendChild(cuerpoTabla);

    credType.value = "";
    credito.value = "";
    cuotas.value = "";
});


function intereses() {
    descuento = 0;
    if (credType.value == "LII") {
        tasa = 0.025;
        tipoCredito = "Libre inversión";
    } else {
        tasa = 0.029;
        tipoCredito = "Libranza";
    }
    interes = credito.value * tasa;

    if (cuotas.value < 6) {
        descuento = interes * 0.2;
    }
    if (cuotas.value > 12 && cuotas.value < 24) {
        descuento = interes * 0.4;
    }
    if (cuotas.value > 24) {
        descuento = interes * 0.7;
    }
}

