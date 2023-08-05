import Page from "../../pkg/node/node";
import createAboutView from "../views/about-view";

/**
 * Create the about section of the web page.
 */
async function createAbout(): Promise<HTMLElement> {
  const aboutPage: Page = new Page("main");
  aboutPage.setView = createAboutView();
  aboutPage.setAttr("class", "about.container.active");
  return aboutPage.getNode;
}

export default createAbout;
