import createAboutView from "../views/about-view";
/**
 * Create the about section of the web page.
 */
async function createAbout(): Promise<HTMLElement> {
  const container: HTMLElement = document.createElement("main");
  container.classList.add("container");
  container.classList.add("about");
  container.classList.add("active");

  container.innerHTML = createAboutView();
  return container;
}

export default createAbout;
