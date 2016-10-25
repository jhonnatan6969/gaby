/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validacion(formulario) {
var validarComentario = /(.)$/  //no admite espacios vacíos
//Comprueba el campo del comentario
if(!validarComentario.test(formulario.comentario.value)) {
alert('Introduce el comentario.')
return false
}
return true
}

