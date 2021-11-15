function validodatos() {

    var nombre = document.getElementById("txtnombre");
    var apellido = document.getElementById("txtapellido");
    var correo = document.getElementById("txtcorreo");
    var telefono = document.getElementById("txtnum");
    var comenta = document.getElementById("comentario");

    if (nombre.value == '') {
        alert("ATENCION !! debe completar el campo que dice nombre ");
    }

    if (apellido.value == '') {
        alert("ATENCION !! debe completar el campo que dice apelido ");
    }

    if (correo.value == '') {
        alert("ATENCION !! debe completar el campo que dice correo ");
    }

    if (telefono.value == '') {
        alert("ATENCION !! debe completar el campo que dice telefono ");
    }

    if (comenta.value == '') {
        alert("ATENCION !! debe completar el campo que dice comentario ");
    }

    if(nombre.value  !='' && apellido.value != '' && correo.value != '' && telefono.value != '' && comenta.value != ''){

        alert(" Su turno fue Reservado exitosamente   SALUDOS!! ");
    }

}
