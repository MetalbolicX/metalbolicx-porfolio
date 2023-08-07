import DOMNode from "../../pkg/node/node";
import { sections, navIcons } from "../utils/constants";
import colorNavigationBar from "../events/navigation-events";

/**
 * Creates the buttons for the navigation bar.
 * @returns The array of HTML elements buttons for the navigation bar.
 */
function createNavigationBar(): HTMLElement {
  // Find the section to color the bottom of the navigation bar.
  let sectionTocolor: number = sections.findIndex((section: string) =>
    window.location.pathname.includes(section)
  );
  // In case its the root path of the application
  if (sectionTocolor < 0) {
    sectionTocolor++;
  }
  const buttons: HTMLElement[] = sections.map(
    (section: string, index: number) => {
      const button: DOMNode = new DOMNode("div")
        .setAttr(
          "class",
          index === sectionTocolor ? "control.active-btn" : "control"
        )
        .setAttr("data-id", section)
        .append("span")
        .setAttr("class", "page-name")
        .setText(section)
        .append("a")
        .setAttr("href", `#/${section}/`)
        .append("i", true)
        .setAttr("class", `fas.fa-${navIcons.at(index)}`)
        .previous()
        .next();
      console.log(button.getNextNode);
      console.log(button.getCurrentNode);
      console.log(button.getPreviousNode);
      return button.getNode;
    }
  );

  const navigatioBar: DOMNode = new DOMNode("nav")
    .setAttr("class", "controls")
    .on("click", colorNavigationBar);
  navigatioBar.getNode.append(...buttons);
  return navigatioBar.getNode;
}

export default createNavigationBar;
