import routes from "../routes/routes";
import { RouteHandler } from "../routes/routes";

/**
 * Find the handler to render the web page if exist according to the path.
 * @param route The route of the hash url page.
 */
function handleRoute(route: string): RouteHandler | undefined {
  // Evaluate without regular expression if the route exists
  const handler: RouteHandler = routes[route];
  if (handler) {
    return handler;
  }
  // Evaluate by pattern if the route exists
  const pathFound: string | undefined = Object.keys(routes).find(
    (path: string) => new RegExp(`^${path}$`).test(route)
  );

  return pathFound ? routes[pathFound] : undefined;
}

export default handleRoute;
