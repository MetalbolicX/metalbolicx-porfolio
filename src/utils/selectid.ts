/**
 * Get the id to add the content in corresponding HTML container.
 */
function selectId(route: string): string {
  switch (true) {
    case route === "/":
      return "home";
    case sectionsButtons.some((section) => route.includes(section)):
      return route.slice(1);
    default:
      return "home";
  }
}

export default selectId;