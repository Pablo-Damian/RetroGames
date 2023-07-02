/* SCRIPT DEL FORMULARIO CON VALIDACIÓN DE DATOS */
function validarFormulario() {
  // Obtiene los valores de los campos
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;
  var comentarios = document.getElementById('comentarios').value;

  // Valida los campos requeridos
  if (nombre === '' || apellido === '' || email === '' || fechaNacimiento === '' || comentarios === '') {
    alert('Por favor, completa todos los campos.'); // Si faltan campos obligatorios, se muestra un mensaje de "alerta"
    return false; // Se cancela el envío del formulario
  }

  // Para validar el formato del correo electrónico
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    alert('Por favor, introduce un correo electr�nico v�lido.'); // Si el e-mail no cumple con el formato, se muestra un mensaje de "alerta"
    return false; // Se Cancela el envío del formulario
  }

  // Valida la longitud de los comentarios
  if (comentarios.length > 500) {
    alert('Los comentarios deben tener un m�ximo de 500 caracteres.'); // Si los comentarios exceden el límite de 500 caracteres, se muestra un mensaje de "alerta"
    return false; // Se cancelamos el envío del formulario
  }

  // Si se pasan todas las validaciones, se envía el formulario
  alert('Formulario enviado correctamente.');
  return true;
}
// FIN del código ;)