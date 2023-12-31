import { urls, technologiesKnown, workJobs } from "../utils/constants";

/**
 * Create the HTML view of the about page.
 * @returns {string} The HTML view of the about page.
 */
function createAboutView(): string {
  const technologies: string = technologiesUsedElements();
  const jobs: string = jobItems();
  return /*html*/ `
    <header class="main-title">
      <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
    </header>
    <section class="about-container">
      <div class="left-about">
        <h4>Information About me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          labore nihil obcaecati consequatur. Debitis error doloremque, vero
          eos vel nemo eius voluptatem dicta tenetur modi. <br />
          <br />
          La musica delectus dolore fugiat exercitationem a, ipsum quidem
          quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Harum non
          necessitatibus deleniti eum soluta.
        </p>
        <div class="btn-con">
          <a href="${urls.resume}" class="main-btn">
          <span class="btn-text">Download CV</span>
          <span class="btn-icon"><i class="fas fa-download"></i></span>
          </a>
        </div>
      </div>
      <div class="right-about">
        <div class="about-item">
          <div class="abt-text">
            <p class="large-text">650+</p>
            <p class="small-text">
              Projects <br />
              Completed
            </p>
          </div>
        </div>
        <div class="about-item">
          <div class="abt-text">
            <p class="large-text">10+</p>
            <p class="small-text">
              Years of <br />
              experience
            </p>
          </div>
        </div>
        <div class="about-item">
          <div class="abt-text">
            <p class="large-text">300+</p>
            <p class="small-text">
              Happy <br />
              Clients
            </p>
          </div>
        </div>
        <div class="about-item">
          <div class="abt-text">
            <p class="large-text">400+</p>
            <p class="small-text">
              Customer <br />
              reviews
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="about-stats">
      <h4 class="stat-title">Technologies in which I am conformtable to work with</h4>
      <div class="logos">
        <div class="logos-slide">
          ${technologies}
        </div>
        <div class="logos-slide">
          ${technologies}
        </div>
      </div>
    </section>
    <h4 class="stat-title">My Timeline</h4>
    <section class="timeline">
      ${jobs}
    </section>`;
}

/**
 * Adds the content to about-stats container of the technologies I already know.
 */
function technologiesUsedElements(): string {
  return technologiesKnown
    .map(
      (tech: {
        techName: string;
        orgUrl: string;
        iconUrl: string;
      }) => /*html*/ `
      <a href="${tech.orgUrl}" target="_blank">
        <img src="${tech.iconUrl}" alt="${tech.techName}"/>
      </a>
    `
    )
    .join("");
}

/**
 * The HTML with all the jobs in which I worked professionally.
 */
function jobItems(): string {
  return workJobs
    .map(
      (job: {
        duration: string;
        name: string;
        place: string;
        activities: string[];
      }) => {
        const paragraphs: string = job.activities
          .map((paragraph: string) => `<p>${paragraph}</p>`)
          .join("");
        return /*html*/ `
    <div class="timeline-item">
      <div class="tl-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <p class="tl-duration">${job.duration}</p>
      <h5>${job.name}<span> - ${job.place}</span></h5>
      <details>
        <summary>Details</summary>
          ${paragraphs}
      </details>
    </div>`;
      }
    )
    .join("");
}

export default createAboutView;
