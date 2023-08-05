/**
 * Color the navigation bar button.
 */
function colorNavigationBarButton(event: Event): void {
  const tg = event.target as HTMLElement;
  const buttonSelected = tg.closest(".control");
  const id: string | null = buttonSelected?.getAttribute("data-id") || "";
  const buttons = buttonSelected?.parentElement?.children;

  for (let index = 0; index < buttons!.length; index++) {
    const button = buttons![index];
    if (button.classList.contains("active-btn")) {
      button.classList.remove("active-btn");
      break;
    }
  }
  buttonSelected?.classList.add("active-btn");
}

export default colorNavigationBarButton;