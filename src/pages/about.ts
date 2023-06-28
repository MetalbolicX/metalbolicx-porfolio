import { urls, technologiesKnown } from "../utils/constants";
/**
 * Create the about section of the web page.
 */
async function createAbout(): Promise<HTMLElement> {
  const container: HTMLElement = document.createElement("section");
  container.classList.add("container");
  container.classList.add("about");
  container.classList.add("active");
  const technologies: string = technologiesUsedElements();
  const view: string = /*html*/ `
    <div class="main-title">
      <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
    </div>
    <div class="about-container">
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
    </div>
    <div class="about-stats">
      <h4 class="stat-title">Technologies in which I am conformtable to work with</h4>
      <div class="logos">
        <div class="logos-slide">
          ${technologies}
        </div>
        <div class="logos-slide">
          ${technologies}
        </div>
      </div>
    </div>
    <h4 class="stat-title">My Timeline</h4>
    <div class="timeline">
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2010 - present</p>
        <h5>Web Developer<span> - Vircrosoft</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2008 - 2011</p>
        <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2016 - 2017</p>
        <h5>C++ Programmer<span> - Slime Tech</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2009 - 2013</p>
        <h5>Business Degree<span> - Sussex University</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2013 - 2016</p>
        <h5>Computer Science Degree<span> - Brookes University</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
      <div class="timeline-item">
        <div class="tl-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <p class="tl-duration">2017 - present</p>
        <h5>3d Animation<span> - Brighton University</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quasi vero fugit.
        </p>
      </div>
    </div>`;
  container.innerHTML = view;
  return container;
}

export default createAbout;

/**
 * Adds the content to about-stats container of the technologies I already know.
 */
function technologiesUsedElements(): string {
  return Object.entries(technologiesKnown).map(([key, value]) => /*html*/ `
    <a href="${value}" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}/${key}-original.svg" alt="${key}"/>
    </a>
  `).join("");
}