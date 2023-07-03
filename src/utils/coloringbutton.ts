/**
 * Sets the class in navigation bar button clicked to show the current page.
 * @param id The id of the navigation bar selected.
 */
function coloringButton(id: string): void {
  const buttons: HTMLElement[] = Array.from(document.querySelectorAll(".controls > div"));
  const activeButton = buttons.find((button: HTMLElement) =>
    button.classList.contains("active-btn")
  );
  activeButton?.classList.remove("active-btn");
  const selectedButton = document.querySelector(`[data-id="${id}"]`);
  selectedButton?.classList.add("active-btn");
}

export default coloringButton;