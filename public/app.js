const API = "http://localhost:3000/usuarios";
const API_KEY = "Leon9013";

async function cargar() {
  const res = await fetch(API);
  const respuesta = await res.json();

  const usuarios = respuesta.data || respuesta;

  document.getElementById("lista").innerHTML = usuarios
    .map((u) => `<li>${u.id} — ${u.nombre} (${u.email}, ${u.edad} años)</li>`)
    .join("");
}

async function crear() {
  const body = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    edad: Number(document.getElementById("edad").value),
  };

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("edad").value = "";
    cargar();
  } else {
    const errorData = await res.json();
    alert(`Error: ${errorData.message || "No autorizado"}`);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-crear");
  if (boton) {
    boton.addEventListener("click", crear);
  }
});
cargar();