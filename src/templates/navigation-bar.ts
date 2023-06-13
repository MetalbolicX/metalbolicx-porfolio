import { sectionsButtons } from "../utils/constants";

/**
 * Creates the buttons for the navigation bar.
 */
function addNavigationBar(): HTMLDivElement[] {
  const buttons: HTMLDivElement[] = sectionsButtons.map((section: string, index: number) => {
    const button = document.createElement("div");
    button.className = index === 0 ? "control active-btn" : "control";
    button.setAttribute("data-id", section);
    const view: string = /*html*/ `
      <a href="#/${section}/">
        <img
          src="./img/icon_${section}.svg"
          alt="${section} icon"
        />
      </a>
    `;
    button.innerHTML = view;
    return button;
  });
  return buttons;
}

export default addNavigationBar;
