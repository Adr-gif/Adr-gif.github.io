function carga() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;
  var areaTexto = document.getElementById("areaTexto").value;
  var errorMensaje = document.getElementById("errorMensaje");

  if (name === "" || surname === "" || tel === "" || email === "" || areaTexto === "") {
    var errorMensaje = document.getElementById("datosEnviados");
    errorMensaje.innerHTML = "Por favor, complete todos los campos obligatorios.";
    errorMensaje.style.color = "red";
    return false;
  }

  // Validar la longitud máxima
  if (name.length > 50 || surname.length > 50 || tel.length > 20 || email.length > 50 || areaTexto.length > 500) {
    var errorMensaje = document.getElementById("datosEnviados");
    errorMensaje.innerHTML = "Algunos campos exceden la longitud máxima permitida.";
    errorMensaje.style.color = "red";
    return false;
  }

  // Validar el formato del email utilizando una expresión regular
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    var errorMensaje = document.getElementById("datosEnviados");
    errorMensaje.innerHTML = "Por favor, ingrese un email válido.";
    errorMensaje.style.color = "red";
    return false;
  }

  var mensaje = "Datos enviados:\n\n" +
                "Nombre: " + name + "\n" +
                "Apellido: " + surname + "\n" +
                "Teléfono: " + tel + "\n" +
                "Email: " + email + "\n" +
                "Comentarios: " + areaTexto;

  var datosEnviadosDiv = document.getElementById("datosEnviados");
  datosEnviadosDiv.innerHTML = mensaje;

  alert(mensaje);
  alert("Gracias por completar el formulario");
  return false;
}

function reseteando(){
  document.getElementById("campos").reset();
}