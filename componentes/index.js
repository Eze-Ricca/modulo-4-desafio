// Logo de la pagina
function logo(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <div class="logo"><span>E</span>ZE.<span>2</span>024</div>`;
  el.appendChild(componentEl);
}
// footer componente

// header componente
function header(el) {
  const headerEl = document.createElement("div");
  // console.log(headerEl);
  headerEl.innerHTML = `
  <section class="container-menu-hamburguesa">
          <div class="nav-menu-desktop">
            <div class="nav-menu-desktop-logo"></div>
            <nav class="nav-menu-desktop-links">
              <ul>
                <li><a href="https://eze-ricca.github.io/modulo-4-desafio/portfolio">Portfolio</a></li>
                <li><a href="#probando">Servicios</a></li>
                <li><a href="https://eze-ricca.github.io/modulo-4-desafio/contact">Contacto</a></li>
              </ul>
            </nav>
          </div>
          <div class="nav-menu-hamburguesa">
            <div class="nav-menu-hamburguesa-logo"></div>
            <nav class="nav-menu-hamburguesa-links">
              <button class="nav-menu-hamburguesa-btn-open">
                <i class="fa-solid fa-bars"></i>
              </button>
              <div class="nav-menu-hamburguesa-container">
                <button class="nav-menu-hamburguesa-btn-clear">
                  <i class="fa-solid fa-x"></i>
                </button>
                <ul>
                  <li>
                    <a class="nav-menu-hamburguesa-anchor" href="https://eze-ricca.github.io/modulo-4-desafio/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a class="nav-menu-hamburguesa-anchor" href="#probando"
                      >Servicios</a
                    >
                  </li>
                  <li>
                    <a class="nav-menu-hamburguesa-anchor" href="https://eze-ricca.github.io/modulo-4-desafio/contact"
                      >Contacto</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <!-- hasta aqui es el menu y empieza la section welcome-->
        <section class="welcome">
          <div class="welcome-container">
            <div class="welcome-container-h1">
              <h1>Hola <br /><span>Soy Eze</span></h1>
            </div>
            <div class="welcome-container-imagen">
              <img class="welcome-container-imagen-img" src="" alt="" />
              <div class="div-sombra"></div>
            </div>
          </div>
        </section>`;
  el.appendChild(headerEl);
}
// -----------------
//menu hamburguesa
function menuHamburguesa() {
  const buttonOpenEl = document.querySelector(".nav-menu-hamburguesa-btn-open");
  // console.log(buttonOpenEl);
  const buttonClearEl = document.querySelector(
    ".nav-menu-hamburguesa-btn-clear"
  );
  const menuHamburguesa = document.querySelector(
    ".nav-menu-hamburguesa-container"
  );
  const etiquetasAnchor = document.querySelectorAll(
    ".nav-menu-hamburguesa-anchor"
  );

  buttonOpenEl.addEventListener("click", () => {
    menuHamburguesa.style.display = "flex";
  });
  buttonClearEl.addEventListener("click", () => {
    menuHamburguesa.style.display = "none";
  });
  etiquetasAnchor.forEach((etiqueta) => {
    etiqueta.addEventListener("click", () => {
      menuHamburguesa.style.display = "none";
    });
  });
}
