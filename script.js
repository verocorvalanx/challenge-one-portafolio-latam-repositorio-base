/*variables*/

let nombre = document.getElementById("name");
let mail = document.getElementById("mail");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let enviar = document.getElementById("enviar");



/* Reset campos, validar, mensajes */
/*
function validateNombre() {
    if (nombre.value !== "fghgfhh" ) {
        return false;
    } else {
        true;
    }
} 
*/

function sendForm() {
    if (nombre.value.trim().length > 0 && nombre.value.length <= 50
        && mail.value.trim().length > 0 && mail.value.indexOf('@') !== -1
        && asunto.value.trim().length > 0 && asunto.value.length <= 50
        && mensaje.value.trim().length > 0 && mensaje.value.length <= 300) {
        nombre.value = "";
        mail.value = "";
        asunto.value = "";
        mensaje.value = "";
        Swal.fire({
            confirmButtonColor: "#2A7AE4",
            text: "¡Enviado!",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ups...",
            confirmButtonColor: "#2A7AE4",
            text: "Asegúrate de completar los campos correctamente.",

        });
    }
}




