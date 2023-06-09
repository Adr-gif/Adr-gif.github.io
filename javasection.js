function carga() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;
  var areaTexto = document.getElementById("areaTexto").value;
  var errorMensaje = document.getElementById("errorMensaje");

  if (name === "" || surname === "" || tel === "" || email === "" || areaTexto === "") {
    errorMensaje.textContent = "Por favor, complete todos los campos obligatorios.";
    errorMensaje.style.color = "red";
    return false;
  }

  // Validar la longitud maxima
  if (name.length > 50 || surname.length > 50 || tel.length > 20 || email.length > 50 || areaTexto.length > 500) {
    errorMensaje.textContent = "Algunos campos exceden la longitud máxima permitida.";
    errorMensaje.style.color = "red";
    return false;
  }
  // Validar el formato del email utilizando una expresion regular
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    errorMensaje.textContent = "Por favor, ingrese un email válido.";
    errorMensaje.style.color = "red";
    return false;
  }
  var mensaje = "Datos enviados:\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + surname + "\n" +
    "Teléfono: " + tel + "\n" +
    "Email: " + email + "\n" +
    "Comentarios: " + areaTexto;
  var datosEnviadosContainer = document.getElementById("datosEnviadosContainer");
  datosEnviadosContainer.textContent = ""; // Limpiar los datos enviados en el DOM
  var datosEnviadosElement = document.createElement("p");
  datosEnviadosElement.textContent = mensaje;
  datosEnviadosContainer.appendChild(datosEnviadosElement);
  var successMessage = document.createElement("p");
  successMessage.textContent = "Gracias por completar el formulario";
  datosEnviadosContainer.appendChild(successMessage);
  document.getElementById("campos").reset();
  return false;
}
function reseteando() {
  document.getElementById("campos").reset();
  document.getElementById("datosEnviadosContainer").textContent = ""; // Limpiar los datos enviados en el DOM
  document.getElementById("errorMensaje").textContent = ""; // Limpiar mensaje de error
}