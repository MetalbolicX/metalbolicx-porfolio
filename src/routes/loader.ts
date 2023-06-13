import addNavigationBar from "../templates/navigation-bar";

/**
 * Adds the content when the HTML starts to be loaded.
 */
function loader(): void {
  const navConatiner: HTMLElement | null = null || document.querySelector(".controls");
  navConatiner!.append(...addNavigationBar());
}

export default loader;