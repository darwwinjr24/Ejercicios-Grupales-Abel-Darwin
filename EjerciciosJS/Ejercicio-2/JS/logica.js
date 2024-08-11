console.log('conected')
const usuarios = [ { cedula: '88345123', nombre: 'Edwin', telefono: '320' , edad: '45' },
{ cedula: '1095768900', nombre: 'Maria', telefono: '310' , edad: '16' },
{ cedula: '1090378465', nombre: 'Karina', telefono: '301' , edad: '34' },]

  function validarUsuario(){
   let cedula= document.getElementById('cedula').value
let usuarioExiste= usuarios.find(usuario=> usuario.cedula==cedula) || alert('Usuario no existe')
 console.log(usuarioExiste)
 if(usuarioExiste){
    if(usuarioExiste.edad>=18){

     console.log(usuarioExiste.edad)
         alert('Registro exitoso')
     }else{
        console.log(usuarioExiste.edad)

         alert('Registro rechazado')
       }}
};



// function validarEdad(edad){
//     let edadUsuario= 
// }