/**
 * Color the selected button
 */
function coloringButton(dataId: string): void {
  const buttons: HTMLElement[] = Array.from(document.querySelectorAll(".controls > div"));
  const activeButton = buttons.find((button) =>
    button.classList.contains("active-btn")
  );
  activeButton?.classList.remove("active-btn");
  const selectedButton = document.querySelector(`[data-id="${dataId}"]`);
  selectedButton?.classList.add("active-btn");
}

export default coloringButton;