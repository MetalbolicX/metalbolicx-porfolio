import DOMNode from "../../pkg/node/node";
import { sections, navIcons } from "../utils/constants";

/**
 * Creates the buttons for the navigation bar.
 * @returns The array of HTML elements buttons for the navigation bar.
 */
function addNavigationBar(): HTMLElement[] {
  // Find the section to color the bottom of the navigation bar.
  let sectionTocolor: number = sections.findIndex((section: string) =>
    window.location.pathname.includes(section)
  );
  // In case the root path of the application
  if (sectionTocolor < 0) {
    sectionTocolor++;
  }
  const buttons: HTMLElement[] = sections.map(
    (section: string, index: number) => {
      const button: DOMNode = new DOMNode("div");
      button.setView = /*html*/ `
      <span class="page-name">${section}</span>
        <a href="#/${section}/">
          <i class="fas fa-${navIcons.at(index)}"></i>
        </a>
      `;
      button.setAttribute(
        "class",
        index === sectionTocolor ? "control.active-btn" : "control"
      );
      button.setAttribute("data-id", section);
      return button.getNode;
    }
  );
  return buttons;
}

export default addNavigationBar;
