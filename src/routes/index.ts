import header from "../templates/header";
import home from "../pages/home";
import character from "../pages/character";
import error404 from "../pages/error404";
import getHash from "../utils/gethash";
import resolveRoutes from "../utils/resolveroutes";

type RouteHandler = () => string;
type DataHandler = () => Promise<string>;

interface Routes {
  [key: string]: string | RouteHandler | DataHandler;
}

const routes: Routes = {
  "/": home,
  "/:id": character,
  "/contact": "Contact",
};

async function router() {
  const head: HTMLElement | null = null || document.getElementById("header");
  head!.innerHTML = await header() ?? "";
  
  let hash: string = getHash();
  let route: string = await resolveRoutes(hash);
  let render: string | RouteHandler | DataHandler = routes[route] ? routes[route] : error404;

  const content: HTMLElement | null = null || document.getElementById("content");
  content!.innerHTML = await (typeof render === "function" ? render() : render) ?? "";
}

export default router;
