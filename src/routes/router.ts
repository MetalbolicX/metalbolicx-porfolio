import getHash from "../utils/gethash";
import { RouteHandler } from "../routes/routes";
import resolveRoutes from "../utils/resolveroutes";
import createError404 from "../pages/error404";

/**
 * Add the HTML section according to the url.
 */
async function router(): Promise<void> {
  // Get the path of the url
  const hash: string = getHash();
  const render: RouteHandler = resolveRoutes(hash) || createError404;
  // Delete previous info of the DOM
  const mainContainer: HTMLElement | null = document.querySelector(".main-container");
  mainContainer?.firstElementChild?.remove();
  // Add the content on the web page
  mainContainer?.append(await render());
}

export default router;