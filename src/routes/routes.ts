import createHome from "../pages/home";
import createContact from "../pages/contact";
import createAbout from "../pages/about";
import createPortfolio from "../pages/portfolio";

export type RouteHandler = () => Promise<HTMLElement>;
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

export default routes;