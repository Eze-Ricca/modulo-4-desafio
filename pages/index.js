//Welcome
async function welcome() {
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
    let itemsFieldsCampos = items[1].fields;
    const imagenBuscadaEnFieldsCampos = items[1].fields.imagen.sys.id;
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

// About me
async function aboutMeSection() {
  const environment = `master`;
  const spaceId = `lqbwudd7r2sk`;
  const accessToken = `r5ehHXkNqZeSsMXN0pSo_P8wOqmodXSTRhsj-NePIk8`;
  const contentType = `productos`;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}`;
  console.log(url);
  const urlFetch = await fetch(url);
  const dataJson = await urlFetch.json();
  // Contentfull trae las imagenes y los items separados asi que me traigo los items en una constante "items" y las imagenes en una constante "assets"
  const items = dataJson.items;
  const assets = dataJson.includes.Asset;

  // En itemsFieldsCampos me muestra el objeto que tengo dentro de contentfull en este caso me muestra
  // productos(esta como productos porque tenia un content-type de productos y para no borrarlo use ese)
  // {nombre: 'Soy Eze',
  // description: 'En febrero del 2023 decidi unirme al desafio del d…te invito a que me dejes tu feedback. Saludos!!!\n',
  //  foto: {…}}
  // Este objeto contiene {nombre:...., description:...., foto:....}
  let itemsDeLosCampos = items[0].fields;
  // entonces lo que tengo que hacer es ingresar al id de mi imagen y guardarlo en "imagenBuscada"
  let imagenBuscada = items[0].fields.foto.sys.id;

  let imagen = assets.find((asset) => imagenBuscada === asset.sys.id);

  if (imagen) {
    // Asigna la url de la imagen a una nueva variable que se inserta en el arreglo itemsFieldsCampos
    itemsDeLosCampos.src = imagen.fields.file.url;
  }
  const imagenEl = document.querySelector(".about-me-container-img");
  imagenEl.setAttribute("src", itemsDeLosCampos.src);

  //
  const tituloEl = document.querySelector(".about-me-container-txts-h3");
  tituloEl.textContent = items[0].fields.nombre;
  //
  const paragraphEl = document.querySelector(
    ".about-me-container-txts-paragraph"
  );
  paragraphEl.textContent = items[0].fields.description;
  //
}
// section Servicios
async function cardMisServicios() {
  // llamo a la fetch de contenfull para que me traiga el contenido de work, lo necesito para la seccion de "Mis Servicios"
  const environment = `master`;
  const spaceId = `lqbwudd7r2sk`;
  const accessToken = `r5ehHXkNqZeSsMXN0pSo_P8wOqmodXSTRhsj-NePIk8`;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=work`;
  // para las card usare template para ello creo la contasnte "cardsContent" donde contendre las cards y creo la constante "templateEl"
  const cardsContent = document.querySelector(".cards-container");
  const templateEl = document.querySelector(".template-card");
  //creo la constante "urlFetch" y luego me dejo la data que paso por el metodo json en otra constante "dataJson"
  const urlFetch = await fetch(url);
  const dataJson = await urlFetch.json();
  // Contentfull trae las imagenes y los items separados asi que me traigo los items en una constante "items" y las imagenes en una constante "assets"
  const items = dataJson.items;
  const assets = dataJson.includes.Asset;
  // recorro el array de items con un for
  for (let index = 0; index < items.length; index++) {
    //En itemsFieldsCampos me muestra el objeto que tengo dentro de contentfull en este caso me muestra
    // works
    // {titulo: 'Buscador de peliculas  - Programacion funcional',
    // imagen: {…},
    // description: 'Con el paradigma de la programacion funcional, rea…son entre otras; el primer buscador de peliculas.',
    // url: 'https://gist.github.com/Eze-Ricca/be8445a438f72859c8123753b6ed581d'}
    // Asi esta creado mi objeto works dentro de contentfull, tiene un titulo, una imagen, una description y una url
    // lo que tengo que lograr es que el id que tengo dentro de imagen que esta dentro de otro objeto coincida
    // para eso guardo los items del contenfull en una nueva variable "itemsFieldsCampos"
    let itemsFieldsCampos = items[index].fields;
    // entonces lo que tengo que hacer es ingresar al id de mi imagen y guardarlo en "imagenBuscadaEnFieldsCampos"
    const imagenBuscadaEnFieldsCampos = items[index].fields.imagen.sys.id;
    // En una variable que le pondre "imagen"
    let imagen = assets.find(
      (asset) => imagenBuscadaEnFieldsCampos === asset.sys.id
    );
    if (imagen) {
      // Asigna la url de la imagen a una nueva variable que se inserta en el arreglo itemsFieldsCampos
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
    urlEl.setAttribute("href", itemsFieldsCampos.url);

    cardsContent.appendChild(clone);
  }
  //
}
//

// formulario
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
//  formulario.addEventListener("submit", (e) => {

async function main() {
  //
  const headerIndexEl = document.querySelector(".header");
  header(headerIndexEl);
  //
  const logoDesktop = document.querySelector(".nav-menu-desktop-logo");
  logo(logoDesktop);
  const logomobile = document.querySelector(".nav-menu-hamburguesa-logo");
  logo(logomobile);
  //
  const logofooter = document.querySelector(".footer-container-logo");
  logo(logofooter);
  //

  // ----------------
  welcome();
  // ------------------
  aboutMeSection();
  // ------------------
  cardMisServicios();
  // ------------------
  menuHamburguesa();
  // ------------------
  // formulario();
  // ------------------
  const formulario = document.querySelector(".me-form");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    postData(e);
  });

  //
  // footer();
}
main();
