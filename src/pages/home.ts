import createHomeView from "../views/home-view";
/**
 * Create the HTML element for the home page.
 */
async function createHome(): Promise<HTMLElement> {
  const container: HTMLElement = document.createElement("section");
  container.classList.add("home");
  container.classList.add("container");
  container.classList.add("active");

  container.innerHTML = createHomeView();
  return container;
}

export default createHome;
