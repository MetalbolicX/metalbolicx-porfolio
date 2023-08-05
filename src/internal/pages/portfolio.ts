import Page from "../../pkg/node/node";
import createPortfolioView from "../views/portfolio-view";
import { showDetails } from "../events/portfolio-events";

/**
 * Create the portfolio section of the web page.
 */
async function createPortfolio(): Promise<HTMLElement> {
  const portfolioPage: Page = new Page("main");
  portfolioPage.setView = createPortfolioView();
  portfolioPage.setAttr("class", "portfolio.container.active");
  portfolioPage.addListener(".portfolios", "mouseover", showDetails)
  return portfolioPage.getNode;
}

export default createPortfolio;
