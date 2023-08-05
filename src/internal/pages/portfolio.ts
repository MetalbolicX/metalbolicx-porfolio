import Page from "../../pkg/node/node";
import createPortfolioView from "../views/portfolio-view";
import { showDetails } from "../events/portfolio-events";

/**
 * Create the portfolio section of the web page.
 */
async function createPortfolio(): Promise<HTMLElement> {
  const portfolioPage: Page = new Page("main")
    .setHTML(createPortfolioView())
    .setAttr("class", "portfolio.container.active")
    .addListener("mouseover", ".portfolios", showDetails);
  return portfolioPage.getNode;
}

export default createPortfolio;
