function resolveRoutes(route: string): string {
  const characterPath: RegExp = new RegExp(/\d{1,3}/);
  const otherPath: RegExp = new RegExp(/[a-z]/);
  switch (true) {
    case characterPath.test(route):
      return "/:id";
    case otherPath.test(route):
      return `/${route}`;
    case route === "/":
      return "/";
    default:
      return "/error404";
  }
}

export default resolveRoutes;
