/**
 * Creates the element with the error message 404.
 */
async function createError404(): Promise<HTMLDivElement> {
  const div = document.createElement("div");
  div.className = "error-404";
  const title = document.createElement("h2");
  title.textContent = "Error 404";
  div.appendChild(title);
  return div;
}

export default createError404;
