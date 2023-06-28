/**
 * Creates the element with the error message 404.
 */
async function createError404(): Promise<HTMLElement> {
  const errorContainer: HTMLElement = document.createElement("section");
  errorContainer.classList.add("container");
  errorContainer.classList.add("error-404");
  const view: string = /*html*/ `
    <nav class="shelf">
      <a class="book home-page">Home page</a>
      <a class="book about-us">About us</a>
      <a class="book contact">Contact</a>
      <a class="book faq">F.A.Q.</a>
      <span class="book not-found"></span>
      <span class="door left"></span>
      <span class="door right"></span>
    </nav>
    <h1>Error 404</h1>
    <p>The page you're loking for can't be found</p>`
  errorContainer.innerHTML = view;
  return errorContainer;
}

export default createError404;
