import coloringButton from "../utils/coloringbutton";

/**
 * Color the navigation bar button.
 */
function colorNavigationBarButton(event: Event): void {
  const tg = event.target as HTMLElement;
  const divButton = tg.closest(".control");
  const id: string | null = divButton?.getAttribute("data-id") || "";

  coloringButton(id);
}

export default colorNavigationBarButton;