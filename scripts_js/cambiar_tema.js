// scripts_js/cambiar_tema.js

const btn = document.getElementById("cambiar-tema");
const root = document.documentElement;

function syncBtn() {
  const oscuro = root.classList.contains("oscuro");
  btn.textContent = oscuro ? "🌞 Tema claro" : "🌙 Tema oscuro";
  btn.setAttribute("aria-pressed", String(oscuro));
}

// Al cargar: sincroniza el texto con el estado actual (que viene del snippet del <head>)
syncBtn();

// Click: alterna clase, guarda preferencia y actualiza accesibilidad
btn.addEventListener("click", () => {
  root.classList.toggle("oscuro");
  const oscuro = root.classList.contains("oscuro");
  localStorage.setItem("theme", oscuro ? "dark" : "light");
  root.style.colorScheme = oscuro ? "dark" : "light";
  syncBtn();
});
