import { Nav } from "../layouts/Nav.js";
import { Footer } from "../layouts/Footer.js";
import { loginPage } from "../pages/LoginPage.js";
import { RegistroPage } from "../pages/RegistroPage.js";
import { extencionPage } from "../pages/ExtensionPage.js";
import resolverRutas from "../connections/helpers/resolverRutas.js";
import getHash from "../connections/helpers/getHash.js";
const Rutas = {
    "/": await loginPage(),
    "/registrarse": await RegistroPage(),
    "/extension": await extencionPage()
}

const App = async () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    header.innerHTML = Nav();
    footer.innerHTML = Footer();
    let ruta = resolverRutas(getHash());
    let pagina = (Rutas[ruta]) ? Rutas[ruta] : false;
    console.log(pagina);
    main.innerHTML = pagina;

}

export { App };