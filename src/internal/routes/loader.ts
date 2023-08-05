import createNavigationBar from "../templates/navigation-bar";

/**
 * Adds the content when the HTML starts to be loaded.
 */
function loader(): void {
  // Add the buttons of the navigation bar
  document.body.append(createNavigationBar());
  // Add the acction of the light/dark theme
  const nightButton: HTMLDivElement | null =
    document?.querySelector(".theme-btn");
  nightButton?.addEventListener("click", () =>
    document.body.classList.toggle("light-mode")
  );
}

export default loader;
