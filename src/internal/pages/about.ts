import Page from "../../pkg/page/page";
import createAboutView from "../views/about-view";

/**
 * Create the about section of the web page.
 */
async function createAbout(): Promise<HTMLElement> {
  const aboutPage: Page = new Page("main", createAboutView(), [
    "container",
    "about",
    "active",
  ]);
  return aboutPage.getNode;
}

export default createAbout;
