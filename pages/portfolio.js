//
function header1(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
  <section class="container-menu-hamburguesa">
            <div class="nav-menu-desktop">
              <div class="nav-menu-desktop-logo"></div>
              <nav class="nav-menu-desktop-links">
                <ul>
                  <li><a href="https://eze-ricca.github.io/modulo-4-desafio/">Home</a></li>
                  <li><a href="#probando">Servicios</a></li>
                  <li><a href="#form">Contacto</a></li>
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
                      <a class="nav-menu-hamburguesa-anchor" href="https://eze-ricca.github.io/modulo-4-desafio/">Home</a>
                    </li>
                    <li>
                      <a class="nav-menu-hamburguesa-anchor" href="#probando"
                        >Trabajos</a
                      >
                    </li>
                    <li>
                      <a class="nav-menu-hamburguesa-anchor" href="#form"
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
                <h1>Mis <br /><span>Trabajos</span></h1>
              </div>
              <div class="welcome-container-imagen">
                <img class="welcome-container-imagen-img" src="" alt="" />
                <div class="div-sombra"></div>
              </div>
            </div>
          </section>`;
  el.appendChild(headerEl);
}
// section Servicios
async function cardMisServicios() {
  // llamo a la fetch de contenfull para que me traiga el contenido de work, lo necesito para la seccion de "Mis Servicios"
  const environment = `master`;
  const spaceId = `lqbwudd7r2sk`;
  const accessToken = `r5ehHXkNqZeSsMXN0pSo_P8wOqmodXSTRhsj-NePIk8`;
  const contenType = `modulo4`;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=modulo4`;
  const cardsContent = document.querySelector(".cards-container");
  const templateEl = document.querySelector(".template-card");
  const urlFetch = await fetch(url);
  const dataJson = await urlFetch.json();
  const items = dataJson.items;
  const assets = dataJson.includes.Asset;
  for (let index = 0; index < items.length; index++) {
    let itemsFieldsCampos = items[index].fields;
    const imagenBuscadaEnFieldsCampos = items[index].fields.imagen.sys.id;
    let imagen = assets.find(
      (asset) => imagenBuscadaEnFieldsCampos === asset.sys.id
    );
    if (imagen) {
      console.log(imagen);
      itemsFieldsCampos.src = imagen.fields.file.url;
    }

    // Construyo un nuevo articulo para cada item del "itemFieldCampos"
    const clone = templateEl.content.cloneNode(true);
    //
    const imgEl = clone.querySelector(".card-img");
    imgEl.setAttribute("src", itemsFieldsCampos.src);
    //
    const titleEl = clone.querySelector(".card-texts-title");
    titleEl.innerText = itemsFieldsCampos.titulo;
    //
    const parrafoEl = clone.querySelector(".card-texts-paragraph");
    parrafoEl.innerText = itemsFieldsCampos.description;

    const urlEl = clone.querySelector(".card-url");
    urlEl.setAttribute("href", itemsFieldsCampos.urlRedireccion);

    cardsContent.appendChild(clone);
  }
  //
}
//
async function welcome1() {
  const environment = `master`;
  const spaceId = `lqbwudd7r2sk`;
  const accessToken = `r5ehHXkNqZeSsMXN0pSo_P8wOqmodXSTRhsj-NePIk8`;
  const contentType = `header`;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}`;
  console.log(url);
  const urlFetch = await fetch(url);
  const dataJson = await urlFetch.json();
  const items = dataJson.items;
  const assets = dataJson.includes.Asset;

  console.log(items);
  console.log("asset", assets);
  for (let index = 0; index < items.length; index++) {
    let itemsFieldsCampos = items[0].fields;
    const imagenBuscadaEnFieldsCampos = items[0].fields.imagen.sys.id;
    let imagen = assets.find(
      (asset) => imagenBuscadaEnFieldsCampos === asset.sys.id
    );
    if (imagen) {
      console.log("imagen", imagen.fields.file.url);
      itemsFieldsCampos.src = imagen.fields.file.url;
    }

    const imgEl = document.querySelector(".welcome-container-imagen-img");
    imgEl.setAttribute("src", itemsFieldsCampos.src);
    //
    // const titleEl = clone.querySelector(".card-texts-title");
    // titleEl.innerText = itemsFieldsCampos.titulo;
    //
  }
}
//
function footer1(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
   `;
  el.appendChild(footerEl);
}
async function main() {
  //
  const headerIndexEl = document.querySelector(".header");
  header1(headerIndexEl);
  //
  const logoDesktop = document.querySelector(".nav-menu-desktop-logo");
  logo(logoDesktop);
  const logomobile = document.querySelector(".nav-menu-hamburguesa-logo");
  logo(logomobile);
  const logofooter = document.querySelector(".footer-container-logo");
  logo(logofooter);
  //
  //
  menuHamburguesa();
  //
  welcome1();
  //
  cardMisServicios();
  //
  footer1();
}
main();
