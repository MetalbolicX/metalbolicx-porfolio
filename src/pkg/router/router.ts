type RouteHandler = () => Promise<HTMLElement>;
interface Routes {
  [key: string]: RouteHandler;
}

/**
 * Router handle the routes in the single web page application.
 */
class Router {
  private routes: Routes;
  private paths: string[];
  private currentRoute: string;
  private containerSelector: string = "";
  private mainContainer: HTMLElement | null;

  /**
   * Create a new Router instance.
   * @param {Routes} routes - An object containing the routes and their corresponding handler functions.
   * @param {string} containerSelector - The CSS selector of the main container where the content will be rendered.
   * @throws {Error} Will throw an error if the containerSelector is an empty string or if the container does not exist in the DOM.
   */
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

    // Set up the popstate event listener to handle route changes
    window.addEventListener("popstate", this.handleRouteChange.bind(this));
  }

  /**
   * Get the current hash and create the route.
   * @returns {string} The parsed route from the browser's URL hash.
   * @private
   */
  private getRoutePath(): string {
    const url: string = window.location.pathname;
    const parsedUrl: string = url.toLowerCase()
      .split("/")
      .filter((path: string) => path !== "")
      .join("/");
    return `/${parsedUrl}` || "/";
  }

  /**
   * Find the corresponding route for the current hash.
   * @returns {string} The key route in the Routes object to get the handler function.
   * @private
   */
  private findRoute(): string {
    const route: string = this.getRoutePath();
    return this.routes[route]
      ? route
      : this.paths.find((path: string) =>
          new RegExp(`^${path}$`).test(route)
        ) || "/error404";
  }

  /**
   * Manage the content added in the main container when the hash URL is changed.
   * @private
   */
  private async handleRouteChange(): Promise<void> {
    this.currentRoute = this.findRoute();
    // Add content on the current in the web page
    const render: RouteHandler = this.routes[this.currentRoute];
    this.mainContainer?.firstElementChild?.remove();
    this.mainContainer?.append(await render());
  }

  /**
   * Get the CSS selector for the main container.
   * @type {string}
   * @protected
   */
  protected get getContainerSelector(): string {
    return this.containerSelector;
  }

  /**
   * Set the CSS selector for the main container.
   * @param {string} containerSelector - The CSS selector for the main container.
   * @throws {Error} Will throw an error if the containerSelector is an empty string.
   * @protected
   */
  protected set setContainerSelector(containerSelector: string) {
    if (containerSelector === "") {
      throw new Error(
        " The empty string is an invalid container for CSS selector"
      );
    }
    this.containerSelector = containerSelector;
  }

  /**
   * Start the router and listen for changes in the route in the single web page application.
   */
  init(): void {
    // window.addEventListener("hashchange", this.handleRouteChange.bind(this));
    this.handleRouteChange();

    // Use history.pushState to change the URL when navigating between routes
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.href.startsWith(window.location.origin)
      ) {
        event.preventDefault();
        const path: string = target.href.split("#").at(-1) || "";
        history.pushState({}, "It is working", path);
        this.handleRouteChange();
      }
    };

    document.body.addEventListener("click", handleLinkClick);
  }
}

export default Router;
