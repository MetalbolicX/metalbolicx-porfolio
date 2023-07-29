import Page from "../../pkg/page/page";
import createError404View from "../views/error404-view";

/**
 * Creates the HTML element of the error 404 page.
 */
async function createError404(): Promise<HTMLElement> {
  const error404Page: Page = new Page("main", createError404View(), [
    "error-404",
    "container",
    "active",
  ]);
  return error404Page.getNode;
}

export default createError404;
