import createPortfolioView from "../views/portfolio-view";

/**
 * Create the portfolio section of the web page.
 */
async function createPortfolio(): Promise<HTMLElement> {
  const container: HTMLElement = document.createElement("main");
  container.classList.add("portfolio");
  container.classList.add("container");
  container.classList.add("active");

  container.innerHTML = createPortfolioView();
  return container;
}

export default createPortfolio;