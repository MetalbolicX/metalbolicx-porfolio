import { sections, navIcons } from "../utils/constants";

/**
 * Creates the buttons for the navigation bar.
 */
function addNavigationBar(): HTMLDivElement[] {
  const buttons: HTMLDivElement[] = sections.map((section: string, index: number) => {
    const button = document.createElement("div");
    button.className = index === 0 ? "control active-btn" : "control";
    button.setAttribute("data-id", section);
    const view: string = /*html*/ `
      <a href="#/${section}/">
        <i class="fas fa-${navIcons.at(index)}"></i>
      </a>
    `;
    button.innerHTML = view;
    return button;
  });
  return buttons;
}

export default addNavigationBar;
