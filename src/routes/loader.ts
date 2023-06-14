import addNavigationBar from "../templates/navigation-bar";

/**
 * Adds the content when the HTML starts to be loaded.
 */
function loader(): void {
  // Add the buttons of the navigation bar
  const navConatiner: HTMLElement | null =
    null || document.querySelector(".controls");
  navConatiner!.append(...addNavigationBar());
  // Add the acction of the light/dark theme
  const themeButton: HTMLElement | null =
    null || document.querySelector(".theme-btn");
  themeButton!.addEventListener("click", () =>
    document.body.classList.toggle("light-mode")
  );
}

export default loader;
