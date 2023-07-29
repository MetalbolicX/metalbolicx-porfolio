import createHome from "../pages/home";
import createContact from "../pages/contact";
import createAbout from "../pages/about";
import createPortfolio from "../pages/portfolio";
import createError404 from "../pages/error404";

export type RouteHandler = () => Promise<HTMLElement>;
export interface Routes {
  [key: string]: RouteHandler;
}

const routes: Routes = {
  "/": createHome,
  "/home": createHome,
  "/contact": createContact,
  "/about": createAbout,
  "/portfolio": createPortfolio,
  "/\\d+": createContact,
  "/error404": createError404
};

export default routes;