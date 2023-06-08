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

  // Validar la longitud maxima
  if (name.length > 50 || surname.length > 50 || tel.length > 20 || email.length > 50 || areaTexto.length > 500) {
    var errorMensaje = document.getElementById("datosEnviados");
    errorMensaje.innerHTML = "Algunos campos exceden la longitud maxima permitida.";
    errorMensaje.style.color = "red";
    return false;
  }

  // Validar el formato del email utilizando una expresion regular
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    var errorMensaje = document.getElementById("datosEnviados");
    errorMensaje.innerHTML = "Por favor, ingrese un email valido.";
    errorMensaje.style.color = "red";
    return false;
  }

  var mensaje = "Datos enviados:\n\n" +
    "Nombre: " + name + "\n" +
    "Apellido: " + surname + "\n" +
    "Telefono: " + tel + "\n" +
    "Email: " + email + "\n" +
    "Comentarios: " + areaTexto;

  var datosEnviadosDiv = document.getElementById("datosEnviados");
  datosEnviadosDiv.innerHTML = mensaje;

  alert(mensaje);
  alert("Gracias por completar el formulario");
  return false;
}

function reseteando() {
  document.getElementById("campos").reset();
}

var nombre = document.getElementById('name');
var telefono = document.getElementById('phone');
var email = document.getElementById('email');
var mensaje = document.getElementById('message');
var error = document.getElementById('error');
error.style.color = "orange";

var form = document.getElementById("formulario");
var datosRecibidos = [];
nombre.focus();
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var errores = []
  if (nombre.value === '') {
    errores.push("Ingrese su nombre")
  }

  if (telefono.value === '' || isNaN(telefono.value) || telefono.value.length !== 10) {
    errores.push("Ingrese su telefono correctamente");
    errores.push("El telefono debe tener 10 numeros");
  }

  if (email.value === '' || !validarEmail(email.value)) {
    errores.push("Ingrese su correo electronico correctamente");
  }

  if (mensaje.value === '') {
    errores.push("Ingresa tu mensaje");
  }

  if (errores.length === 0) {
    var datos = {
      nombre: nombre.value,
      telefono: telefono.value,
      email: email.value,
      mensaje: mensaje.value
    };
    datosRecibidos.push(datos);
    var datosIngresadosDiv = document.getElementById('datosIngresados');
    datosIngresadosDiv.innerHTML = '';

    for (var i = 0; i < datosRecibidos.length; i++) {
      var dato = datosRecibidos[i];
      var datosEnLinea = document.createElement('p');
      datosEnLinea.textContent = `${dato.nombre}, ${dato.telefono}, ${dato.email}, ${dato.mensaje}`;
      datosIngresadosDiv.appendChild(datosEnLinea);
    }

    var graciasMensaje = document.createElement('h3');
    graciasMensaje.textContent = "Muchas gracias por su tiempo!";
    datosIngresadosDiv.prepend(graciasMensaje);
    datosIngresadosDiv.style.color = "orange";

    nombre.value = '';
    telefono.value = '';
    email.value = '';
    mensaje.value = '';

    console.log("Formulario enviado")
  }

  error.innerHTML = errores.join(', ');
});
