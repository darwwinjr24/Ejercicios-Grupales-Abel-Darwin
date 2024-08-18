console.log('conected')
const usuarios = [{ cedula: '88345123', nombre: 'Edwin', telefono: '320', edad: '45' },
{ cedula: '1095768900', nombre: 'Maria', telefono: '310', edad: '16' },
{ cedula: '1090378465', nombre: 'Karina', telefono: '301', edad: '34' },]

//localStorage.setItem("usuariosEjer2", JSON.stringify(usuarios));
//const usuariosStorage = JSON.parse(localStorage.getItem("usuariosEjer2")) || [];
contador1 = 0
contador2 = 0

function validarUsuario() {
   const cedula = document.getElementById('cedula').value
   const usuarioExiste = usuarios.find(usuario => usuario.cedula == cedula) || alert('Usuario no existe')
   console.log(usuarioExiste)
   if (usuarioExiste) {
      if (usuarioExiste.edad >= 18) {
         console.log(usuarioExiste.edad)

         const registros1 = document.getElementById('cuerpoTabla1')
         const fila1 = document.createElement('tr')

         const nombreUsuarioA = document.createElement('td')
         nombreUsuarioA.textContent = usuarioExiste.nombre
         fila1.appendChild(nombreUsuarioA)
         registros1.appendChild(fila1)

         document.getElementById('total1').innerHTML=++contador1

         // const registros2 = document.getElementById('cuerpoTabla2')
         // const fila2 = document.createElement('tr')

         // const item = document.createElement('tr')
         // item.textContent = ++contador1
         // fila2.appendChild(item)
         // registros2.appendChild(fila2)

         alert('Registro exitoso')
         console.log(usuarioExiste.nombre)
      } else {

         const registros2 = document.getElementById('cuerpoTabla2')
         const fila = document.createElement('tr')

         const nombreUsuarioR = document.createElement('td')
         nombreUsuarioR.textContent = usuarioExiste.nombre
         fila.appendChild(nombreUsuarioR)
         registros2.appendChild(fila)

         console.log(usuarioExiste.edad)
         document.getElementById('total2').innerHTML=++contador2
         alert('Registro rechazado')
      }
   }
};



function nuevoRegistro(){
   let nombre= document.getElementById('nombreNuevo').value
   let cedula= document.getElementById('cedulaNuevo').value
   let celular= document.getElementById('celularNuevo').value
   let edad= document.getElementById('edadNuevo').value
  const  usuarioNuevo= {
   cedula: cedula,
   nombre: nombre,
   celular: celular,
   edad: edad,
  } 
  const usuariosStorage = JSON.parse(localStorage.getItem("usuariosEjer2")) || [];
  usuariosStorage.push(usuarioNuevo);
  //usuariosStorage.push(usuarios);
localStorage.setItem("usuariosEjer2", JSON.stringify(usuariosStorage));
}

//   //usuarios.push(usuariosStorage)
//    console.log(usuariosStorage) 
  
//}

//   let usuariosPrueba= usuarios.map(usuario=>{(usuarioNuevo)})
   // return{
   //     ...usuario,
   //     edadRta:usuario.edad >=18 ? "Mayor Edad" :"Menor Edad"
   //}
//})
