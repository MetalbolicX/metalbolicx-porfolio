import createHome from "../pages/home";
import createContact from "../pages/contact";
import createError404 from "../pages/error404";
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
};

async function router() {
  const hash: string = getHash();
  const route: string = resolveRoutes(hash);
  const render: RouteHandler = routes[route] || createError404;
  console.log(route);
  // Delete previous info
  sectionsButtons.forEach((section: string) => {
    const container = document.getElementById(section);
    while (container?.firstChild) {
      container.firstChild.remove();
    }
  });

  const contentAdder: HTMLElement | null =
    null ||
    document.getElementById(route.length === 1 ? "home" : route.slice(1));
  contentAdder?.append(await render());
}

export default router;
