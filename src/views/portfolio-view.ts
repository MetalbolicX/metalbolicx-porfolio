import { projectsUrls } from "../utils/constants";
/**
 * Create the HTML view of the portfolio page.
 * @returns {string} The HTML view of the portfolio page.
 */
function createPortfolioView(): string {
  return /*html*/ `
    <section class="portfolio-container">
      <header class="main-title">
        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
      </header>
      <p class="port-text">
        Here is some of my work that I've done professionally.
      </p>
      <div class="portfolios">
        <div class="portfolio-item">
          <figure class="image">
            <img src="https://cdn.pixabay.com/photo/2021/05/11/17/21/charts-6246450_1280.png" alt="D3 chart library" />
          </figure>
          <div class="hover-items">
            <h3>
              <a href="#">
                D3 js library for common data visualization charts
              </a>
            </h3>
            <div class="icons">
              <a href="${projectsUrls.d3jslibrary}" target="_blank" class="icon">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-item">
          <figure class="image">
            <img src="https://cdn.pixabay.com/photo/2020/06/25/14/21/server-icons-5339848_1280.png" alt="Go web sever" />
          </figure>
          <div class="hover-items">
            <h3>
              <a href="#">
                Go web server
              </a>
            </h3>
            <div class="icons">
              <a href="${projectsUrls.gowebserver}" target="_blank" class="icon">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-item">
          <figure class="image">
            <img src="https://ars.els-cdn.com/content/image/X02540584.jpg" alt="Journal publication" />
          </figure>
          <div class="hover-items">
            <h3>
              <a href="#">
                Master degree research publication
              </a>
            </h3>
            <div class="icons">
              <a href="${projectsUrls.materialsscience}" target="_blank" class="icon">
                <i class="fa-brands fa-researchgate"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

export default createPortfolioView;
