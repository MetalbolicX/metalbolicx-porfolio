import home from "../pages/home";
import character from "../pages/character";
import contact from "../pages/contact";
import error404 from "../pages/error404";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";


type RouteHandler = () => Promise<string>;
type ContactHandler = () => string;

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
  // content!.innerHTML = await (typeof render === "function" ? render() : render) ?? "";
  content!.innerHTML = await render() ?? "";
}

export default router;
