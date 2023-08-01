function showDetails(event: Event): void {
  const tg = event.target as HTMLElement;

  if (tg.matches("h3") || tg.matches("a")) {
    const portfolioProject: HTMLDivElement | null = tg.closest(".hover-items");
    if (portfolioProject) {
      const details: HTMLDetailsElement | null =
        portfolioProject.querySelector("details");
      if (details) {
        details.open = !details.open;
      }
    }
  }
}

export { showDetails };
