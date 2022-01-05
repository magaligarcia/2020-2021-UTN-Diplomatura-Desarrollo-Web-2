/*---------------------------------------------------------------MOSTRAR / OCULTAR FORMULARIO---------*/

function mostrarFormulario() {

var mostrar = document.getElementById('mostrarForm');
var mostrarBotonReserva = document.getElementById('contenedor_boton_reserva');
    if(mostrar.style.display == 'none'){
        mostrar.style.display='inline-block'; 
        mostrarBotonReserva.style.display= 'none';
    }else{
        mostrar.style.display == 'none';
    }
}

/*---------------------------------------------------------------VALIDACION FORMULARIO DE CONTACTO---------*/
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var comensales = document.getElementById("comensales");

function validarDatos () {
    nombre.addEventListener('input', validarNombre);
    apellido.addEventListener('input', validarApellido);
    comensales.addEventListener('input', validarComensales);
    validarNombre();
    validarApellido();
    validarComensales ();
}

function validarNombre() {
    if (nombre.value=='' || nombre.value.length<3) {
        nombre.style.backgroundColor='#FAD8BC';
        nombre.setCustomValidity('Es necesario que ingrese su nombre');
    }else {
        nombre.style.backgroundColor='#abcec0';
        nombre.setCustomValidity('');
    }
}

function validarApellido () {
    if (apellido.value=='' || apellido.value.length<=3) {
        apellido.style.backgroundColor='#FAD8BC';
        apellido.setCustomValidity('Es necesario que ingrese su apellido');
    }else {
        apellido.style.backgroundColor='#abcec0';
        apellido.setCustomValidity('');
    }
}

function validarComensales() {
    if(comensales.value=='' || comensales.value>=8 || comensales.value<=0){
        comensales.style.backgroundColor='#FAD8BC';
        comensales.setCustomValidity('El número de comensales debe ser entre 1 y 8 pesonas');
    }else {
        comensales.style.backgroundColor='#abcec0';
        comensales.setCustomValidity('');
    }
}
window.addEventListener('load', validarDatos);
