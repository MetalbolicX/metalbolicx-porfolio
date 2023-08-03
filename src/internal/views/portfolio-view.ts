import { projects } from "../utils/constants";
/**
 * Create the HTML view of the portfolio page.
 * @returns {string} The HTML view of the portfolio page.
 */
function createPortfolioView(): string {
  const portfolioItem: string = projectItem();
  return /*html*/ `
    <section class="portfolio-container">
      <header class="main-title">
        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
      </header>
      <p class="port-text">
        Here is some of my work that I've done professionally.
      </p>
      <div class="portfolios">
        ${portfolioItem}
      </div>
    </section>`;
}

/**
 * Create the element of each portfolio item.
 */
function projectItem(): string {
  return projects
    .map(
      (project: {
        imageurl: string;
        descriptionurl: string;
        title: string;
        summary: string;
        projecturl: string;
        iconclass: string;
      }) => /*html*/ `
    <div class="portfolio-item">
      <figure class="image">
        <img src="${project.imageurl}" alt="${project.title}" />
      </figure>
      <div class="hover-items">
        <h3>
          <a href="${project.descriptionurl}">${project.title}</a>
        </h3>
        <details>
          <summary>Details</summary>
            <p>${project.summary}</p>
        </details>
        <div class="icons">
          <a href="${project.projecturl}" target="_blank" class="icon">
            <i class="${project.iconclass}"></i>
          </a>
        </div>
      </div>
    </div>`
    )
    .join("");
}

export default createPortfolioView;
