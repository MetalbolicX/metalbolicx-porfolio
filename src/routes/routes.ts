import createError404 from "../pages/error404";
import createHome from "../pages/home";
import createContact from "../pages/contact";
import createAbout from "../pages/about";
import createPortfolio from "../pages/portfolio";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";
import coloringButton from "../utils/coloringbutton";
import selectId from "../utils/selectid";
// import createJsScript from "../js/scriptJs";

type RouteHandler = () => Promise<HTMLElement>;
interface Routes {
  [key: string]: RouteHandler;
}

const routes: Routes = {
  "/": createHome,
  "/home": createHome,
  "/contact": createContact,
  "/about": createAbout,
  "/portfolio": createPortfolio,
};

/**
 * Add the HTML content according to the url hash.
 */
async function router(): Promise<void> {
  // Get the path of the url
  const hash: string = getHash();
  const route: string = resolveRoutes(hash);
  const render: RouteHandler = routes[route] || createError404;
  // Delete previous info of the DOM
  const mainContainer: HTMLElement | null = document.querySelector(".main-container");
  mainContainer?.firstElementChild?.remove();
  // Which id in the HTML will be selected
  const selectedId: string = selectId(route);
  // Color the selected button sections
  coloringButton(selectedId);
  // Add the content on the web page
  mainContainer?.append(await render());
  // Add JavaScript in the script tag
  // createJsScript(selectedId);
}

export default router;