import getPath from "../utils/getpath";
import { RouteHandler } from "../../internal/routes/routes";
import handleRoute from "../utils/handleroute";
import createError404 from "../../internal/pages/error404";

/**
 * Add the HTML section according to the url.
 */
async function router(): Promise<void> {
  // Get the path of the url
  const path: string = getPath();
  const render: RouteHandler = handleRoute(path) || createError404;
  // Delete previous info of the DOM
  const mainContainer: HTMLElement | null = document.querySelector(".main-container");
  mainContainer?.firstElementChild?.remove();
  // Add the content on the web page
  mainContainer?.append(await render());
}

export default router;