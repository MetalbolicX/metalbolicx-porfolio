import Page from "../../pkg/node/node";
import createError404View from "../views/error404-view";

/**
 * Creates the HTML element of the error 404 page.
 */
async function createError404(): Promise<HTMLElement> {
  const error404Page: Page = new Page("main");
  error404Page.setView = createError404View();
  error404Page.setAttr("class", "error-404.container.active");
  return error404Page.getNode;
}

export default createError404;
