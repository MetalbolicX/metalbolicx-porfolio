import Page from "../../pkg/node/node";
import createHomeView from "../views/home-view";

/**
 * Create the HTML element for the home page.
 */
async function createHome(): Promise<HTMLElement> {
  const homePage: Page = new Page("main")
    .setAttr("class", "home.container.active")
    .setHTML(createHomeView());
  return homePage.getNode;
}

export default createHome;
