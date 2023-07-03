/**
 * Show the tooltip span for the .contact-icon class icons.
 */
function showTooltipIcon(event: Event): void {
  const tg = event.target as HTMLElement;
  const iconElement = tg.closest(".icon");
  const span: HTMLElement | null | undefined =
    iconElement?.querySelector(".icon-tooltip");

  if (span) {
    span.classList.add("active-icon");
  }
}

/**
 * Hides the tooltip span for the .contact-icon class icons.
 */
function hideTooltipIcon(event: Event): void {
  const tg = event.target as HTMLElement;
  const iconElement = tg.closest(".icon");
  const span: HTMLElement | null | undefined =
    iconElement?.querySelector(".icon-tooltip");

  if (span) {
    span.classList.remove("active-icon");
  }
}

export { showTooltipIcon, hideTooltipIcon };
