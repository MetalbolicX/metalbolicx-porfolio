import createHome from "../pages/home";
import createContact from "../pages/contact";
import createAbout from "../pages/about";
import createError404 from "../pages/error404";
import createPortfolio from "../pages/portfolio";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";
import { sectionsButtons } from "../utils/constants";

type RouteHandler = () => Promise<HTMLDivElement>;
interface Routes {
  [key: string]: RouteHandler;
}

const routes: Routes = {
  "/": createHome,
  "/home": createHome,
  "/contact": createContact,
  "/about": createAbout,
  "/portfolio": createPortfolio,
};

async function router() {
  // Get the path of the url
  const hash: string = getHash();
  const route: string = resolveRoutes(hash);
  const render: RouteHandler = routes[route] || createError404;
  // Delete previous info of the DOM
  sectionsButtons.forEach((section: string) => {
    const container = document.getElementById(section);
    while (container?.firstChild) {
      container.firstChild.remove();
    }
  });
  // Add the information for the section selected
  const content: HTMLElement | null =
    null ||
    document.getElementById(route === "/" ? "home" : route.slice(1));
  content?.append(await render());

}

export default router;
