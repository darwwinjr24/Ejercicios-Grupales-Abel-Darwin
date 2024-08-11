
let dataProductos = [
    { id: 1, nombre: "Televisor", precio: 570000, total: 513000 },
    { id: 2, nombre: "Nevera", precio: 1000000, total: 800000 },
    { id: 3, nombre: "Lavadora", precio: 680000, total: 340000 }
]

const selectProducto = document.getElementById('selectProducto')
dataProductos.forEach(element => {
    const option = document.createElement('option')
    option.value = element.id
    option.text = element.nombre
    selectProducto.appendChild(option)
})

const porcentDescuento = document.getElementById('porcentDescuento');
const btnAgregar = document.getElementById('agregar')
const cuerpoTabla = document.getElementById('tableBody')

btnAgregar.addEventListener('click', () => {

    if (porcentDescuento.value < 0 || porcentDescuento.value > 100) {
        alert('El porcentaje de descuento debe estar entre 0 y 100.');
        return;
    }
    
    const productoSeleccionado = dataProductos.find(p => p.id == selectProducto.value);
    const descuento = parseFloat(porcentDescuento.value) / 100; // Convertir el porcentaje a decimal
    const valorTotal = productoSeleccionado.precio * (1 - descuento);

    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${productoSeleccionado.id}</td>
        <td>${productoSeleccionado.nombre}</td>
        <td>${productoSeleccionado.precio}</td>
        <td>${porcentDescuento.value}%</td>
        <td>${parseInt(valorTotal)}</td>
    `;
    cuerpoTabla.appendChild(nuevaFila);
    selectProducto.focus();
});

selectProducto.addEventListener('change', () => {
    porcentDescuento.value = '';
    porcentDescuento.focus();
});