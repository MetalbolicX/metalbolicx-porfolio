import Page from "../../pkg/node/node";
import createPortfolioView from "../views/portfolio-view";

/**
 * Create the portfolio section of the web page.
 */
async function createPortfolio(): Promise<HTMLElement> {
  const portfolioPage: Page = new Page("main", createPortfolioView(), [
    "portfolio",
    "container",
    "active",
  ]);
  return portfolioPage.getNode;
}

export default createPortfolio;
