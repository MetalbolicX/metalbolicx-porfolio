import createError404View from "../views/error404-view";

/**
 * Creates the HTML element of the error 404 page.
 */
async function createError404(): Promise<HTMLElement> {
  const errorContainer: HTMLElement = document.createElement("section");
  errorContainer.classList.add("container");
  errorContainer.classList.add("error-404");
  errorContainer.classList.add("active");

  errorContainer.innerHTML = createError404View();
  return errorContainer;
}

export default createError404;
