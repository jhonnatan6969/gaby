// Botón sumar
$("#btnSumar").on("click",function( e ) {
 // Guardar las cajas en variables locales
 // Convertir a Flotante el valor recibido
 numero1 = parseFloat($("#numero1").val());
 numero2 = parseFloat($("#numero2").val());
 $("#resultado").html("Resultado de Sumar: "+(numero1 + numero2));
});// Botón Restar
$("#btnRestar").on("click",function( e ) {
    // Guardar las cajas en variables locales
    // Convertir a Flotante el valor recibido
    numero1 = parseFloat($("#numero1").val());
    numero2 = parseFloat($("#numero2").val());
    $("#resultado").html("Resultado de Restar: "+(numero1 - numero2));
});
// Botón Multiplicar
$("#btnMultiplicar").on("click",function( e ) {
    // Guardar las cajas en variables locales
    // Convertir a Flotante el valor recibido
    numero1 = parseFloat($("#numero1").val());
    numero2 = parseFloat($("#numero2").val());
    $("#resultado").html("Resultado de Multiplicar: "+(numero1 * numero2));
});
// Botón Dividir
$("#btnDividir").on("click",function( e ) {
    // Guardar las cajas en variables locales
    // Convertir a Flotante el valor recibido
    numero1 = parseFloat($("#numero1").val());
    numero2 = parseFloat($("#numero2").val());
    $("#resultado").html("Resultado de Dividir: "+(numero1 / numero2));
});