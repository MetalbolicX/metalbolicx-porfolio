import createError404 from "../pages/error404";
import createHome from "../pages/home";
import createContact from "../pages/contact";
import createAbout from "../pages/about";
import createPortfolio from "../pages/portfolio";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";
import { sectionsButtons } from "../utils/constants";
import coloringButton from "../utils/coloringbutton";
import activateSection from "../utils/activesection";
import selectId from "../utils/selectid";

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

/**
 * Add the HTML content according to the url hash.
 */
async function router(): Promise<void> {
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
  // Which id in the HTML will be selected
  const selectedId: string = selectId(route);
  // Color the selected button sections
  coloringButton(selectedId);
  // Make active section
  activateSection(selectedId);
  
  // Add the information for the section selected
  const content: HTMLElement | null =
    null ||
    document.getElementById(selectedId);
  content?.append(await render());

}

export default router;