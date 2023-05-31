import home from "../pages/home";
import character from "../pages/character";
import contact from "../pages/contact";
import error404 from "../pages/error404";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";

type RouteHandler = () => Promise<HTMLDivElement>;
type ContactHandler = () => HTMLDivElement;

interface Routes {
  [key: string]: ContactHandler | RouteHandler;
}

const routes: Routes = {
  "/": home,
  "/:id": character,
  "/contact": contact,
};

async function router() {

  let hash: string = getHash();
  let route: string = await resolveRoutes(hash);
  let render: RouteHandler | ContactHandler = routes[route] || error404;

  const content: HTMLElement | null = null || document.getElementById("content");
  // Delete the previous nodes of the content in the HTML
  while (content?.firstChild) {
    content.firstChild.remove();
  }
  // Add the content to the HTML
  content?.append(await render());
}

export default router;
