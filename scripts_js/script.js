const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitamos que se envíe el formulario

  // Obtenemos valores
  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensaje = document.querySelector("#mensaje").value.trim();

  // Validaciones
  if (nombre === "") {
    console.log("El nombre es obligatorio.");
    return;
  }

  if (email === "") {
    console.log("El email es obligatorio.");
    return;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.log("⚠️ El email no es válido.");
    return;
  }

  if (mensaje === "") {
    console.log("El mensaje es obligatorio.");
    return;
  }

  // Si pasa las validaciones, mostramos los datos.
  console.log("Datos del formulario:");
  console.log("Nombre:", nombre);
  console.log("E-mail:", email);
  console.log("Mensaje:", mensaje);
});
formulario.reset();
