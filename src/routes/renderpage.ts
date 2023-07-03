import createError404 from "../pages/error404";
import routes from "./routes";
import { RouteHandler } from "./routes";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";
import coloringButton from "../utils/coloringbutton";
import selectId from "../utils/selectid";

/**
 * Add the HTML section according to the url.
 */
async function renderPage(): Promise<void> {
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
}

export default renderPage;