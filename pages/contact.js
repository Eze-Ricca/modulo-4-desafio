//
async function postData(e) {
  // console.log(formulario);
  // console.log("Hola");
  // const formData = new FormData(e.target);
  // console.log(formData.entries());
  // const objeto = Object.fromEntries(formData.entries());
  // console.log("objeto", objeto);
  // const respuesta = await fetch("https://apx-api.vercel.app/api/utils/dwf", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     nombre: objeto.name,
  //     to: objeto.email,
  //     comentarios: objeto.textarea,
  //   }),
  // });
  // const data = await respuesta.json();
  // console.log(data);
}
async function main() {
  //
  const logoDesktop = document.querySelector(".nav-menu-desktop-logo");
  logo(logoDesktop);
  const logomobile = document.querySelector(".nav-menu-hamburguesa-logo");
  logo(logomobile);
  //
  const logofooter = document.querySelector(".footer-container-logo");
  logo(logofooter);

  const formulario = document.querySelector(".me-form");
  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "https://apx.school/api/utils/email-to-student";
    const email = `riccaesteban@gmail.com`;
    const message = `mensaje a enviar`;

    const formName = await document.querySelector(".input-name").value;
    const formEmail = await document.querySelector(".input-email").value;
    const fd = await document.querySelector(".me-form-textarea").value;
    // postData(e);
    try {
      const respuesta = await fetch(url, {
        method: `POST`,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: email,
          message: {
            name: formName,
            // email: formEmail,
            message: `Nombre: ${formName}\nEmail: ${formEmail}\nMensaje: ${message}`,
          },
        }),
      });
      const respuestaDos = await respuesta.json();
      console.log(respuestaDos.message);
      if (respuestaDos) {
        const spanCorrect = document.createElement("span");
        spanCorrect.textContent = `Mensaje enviado correctamente`;
        spanCorrect.classList.add("spanCorrect");
        e.target.appendChild(spanCorrect);
      } else {
        throw new Error("Error al enviar el email");
      }

      // alert(console.log("tu mensaje fue enviado con exito"));
    } catch (error) {
      console.log("a surgido un error:", error);
      const spanError = document.createElement("span");
      spanError.textContent = `A ocurrido un error intente nuevamente`;
      spanError.classList.add("spanError");
      e.target.appendChild(spanError);
    }
  });
}
main();
