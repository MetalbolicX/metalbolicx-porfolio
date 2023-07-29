import Page from "../../pkg/page/page";
import createHomeView from "../views/home-view";

/**
 * Create the HTML element for the home page.
 */
async function createHome(): Promise<HTMLElement> {
  const homePage: Page = new Page("main", createHomeView(), [
    "home",
    "container",
    "active",
  ]);
  return homePage.getNode;
}

export default createHome;
