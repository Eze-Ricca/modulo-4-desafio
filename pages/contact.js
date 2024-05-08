//
async function postData(e) {
  // console.log(formulario);
  console.log("Hola");
  const formData = new FormData(e.target);
  console.log(formData.entries());
  const objeto = Object.fromEntries(formData.entries());
  console.log("objeto", objeto);

  const respuesta = await fetch("	https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: objeto.name,
      to: objeto.email,
      comentarios: objeto.textarea,
    }),
  });
  const data = await respuesta.json();
  console.log(data);
}
function main() {
  //
  const logoDesktop = document.querySelector(".nav-menu-desktop-logo");
  logo(logoDesktop);
  const logomobile = document.querySelector(".nav-menu-hamburguesa-logo");
  logo(logomobile);
  //
  const logofooter = document.querySelector(".footer-container-logo");
  logo(logofooter);

  const formulario = document.querySelector(".me-form");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    postData(e);
  });
}
main();
