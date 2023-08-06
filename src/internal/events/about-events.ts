/**
 * Sets in true the details tag to show the activities in the work item.
 */
function showWorActivities(event: Event): void {
  const target = event.target as HTMLElement;
  const work = target.closest(".timeline-item");
  if (!work) {
    return;
  }
  const detail = work!.lastElementChild as HTMLDetailsElement;
  if (detail) {
    detail!.open = true;
  }
}

/**
 * Sets in false the details tag to show the activities in the work item.
 */
function hideWorActivities(event: Event): void {
  const target = event.target as HTMLElement;
  const work = target.closest(".timeline-item");
  if (!work) {
    return;
  }
  const detail = work!.lastElementChild as HTMLDetailsElement;
  if (detail) {
    detail!.open = false;
  }
}

export { showWorActivities, hideWorActivities };
