import DOMNode from "../../pkg/node/node";
import { sections, navIcons } from "../utils/constants";

/**
 * Creates the buttons for the navigation bar.
 * @returns The array of HTML elements buttons for the navigation bar.
 */
function addNavigationBar(): HTMLElement[] {
  const buttons: HTMLElement[] = sections.map((section: string, index: number) => {
    const button: DOMNode = new DOMNode(
      "div",
      /*html*/ `
      <span class="page-name">${section}</span>
        <a href="#/${section}/">
          <i class="fas fa-${navIcons.at(index)}"></i>
        </a>
      `,
      index === 0 ? ["control", "active-btn"] : ["control"]
    );
    button.setAttribute("data-id", section);
    return button.getNode;
  });
  return buttons;
}

export default addNavigationBar;
