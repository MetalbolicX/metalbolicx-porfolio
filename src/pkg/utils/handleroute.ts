import routes from "../../internal/routes/routes";
import { RouteHandler } from "../../internal/routes/routes";

/**
 * Find the handler to render the web page if exist according to the path.
 * @param route The route of the hash url to navigate the web page.
 * @returns {RouteHandler | undefined} Weather the handlwr function to ass the HTML view of the selected path exists or not.
 */
function handleRoute(route: string): RouteHandler | undefined {
  // Evaluate without regular expression if the route exists
  const handler: RouteHandler = routes[route];
  if (handler) {
    return handler;
  }
  // Evaluate the route by regex pattern
  // if the route was not found previously
  const routeFound: string | undefined = Object.keys(routes)
    .find(
      (path: string) => new RegExp(`^${path}$`).test(route)
    );

  return routeFound ? routes[routeFound] : undefined;
}

export default handleRoute;
