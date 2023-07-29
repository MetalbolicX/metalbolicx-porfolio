import { RouteHandler, Routes } from "../../internal/routes/routes";

/**
 * Router handle the routes in the single web page application.
 */
class Router {
  private routes: Routes;
  private paths: string[];
  private currentRoute: string;
  private containerSelector: string = "";
  private mainContainer: HTMLElement | null;

  constructor(routes: Routes, containerSelector: string) {
    this.routes = routes;
    this.setContainerSelector = containerSelector;
    this.mainContainer = document.querySelector(this.getContainerSelector);
    if (!this.mainContainer) {
      throw new Error(
        "It was a problem with the container in the DOM, please verify the CSS selector"
      );
    }
    this.paths = Object.keys(routes);
    this.currentRoute = "";
  }

  /**
   * Get the current hast and create the route.
   * @returns {string} The route parsed in the browser.
   */
  private getRouteHash(): string {
    const urlHash: string = window.location.hash;
    return urlHash.at(-1) === "/"
      ? urlHash.slice(1, -1)
      : urlHash.slice(1) || "/";
  }

  /**
   * Verify whether the current route exists in the object of routes, in case it does not verify by a regex pattern otherwise assing the error 404 route.
   * @returns {string} The key route for the Routes object to get the handler function.
   */
  private findRoute(): string {
    const route: string = this.getRouteHash();
    return this.routes[route] ? route
      : this.paths.find((path: string) =>
          new RegExp(`^${path}$`).test(route)
        ) || "/error404";
  }

  /**
   * Manage the content added in the main container when the hash url is changed.
   */
  private async handleRouteChange(): Promise<void> {
    this.currentRoute = this.findRoute();
    // Add content on the current in the web page
    const render: RouteHandler = this.routes[this.currentRoute];
    this.mainContainer?.firstElementChild?.remove();
    this.mainContainer?.append(await render());
  }

  protected get getContainerSelector(): string {
    return this.containerSelector;
  }

  protected set setContainerSelector(containerSelector: string) {
    if (containerSelector === "") {
      throw new Error(" The empty string is an invalid container for css selector");
    }
    this.containerSelector = containerSelector;
  }

  /**
   * Start the router and "listens" the changes of the route in the single web page application.
   */
  init(): void {
    window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange();
  }
}

export default Router;
