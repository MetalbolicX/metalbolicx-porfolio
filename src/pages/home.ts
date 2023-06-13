/**
 * Create the home page of web page.
 */
async function createHome(): Promise<HTMLDivElement> {
  const container = document.createElement("div");
  container.className = "header-content";
  const view: string = /*html*/ `
    <div class="left-header">
      <div class="h-shape"></div>
      <div class="image">
        <img
          src="https://images.unsplash.com/photo-1636303761818-4a517b06a349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="my photo"
        />
      </div>
    </div>
    <div class="right-header">
      <h1 class="name">
        Hi, I'm <span>Solano Milan Diaz.</span>
        A Web Developer.
      </h1>
      <p>
        I'm a Web Developer, I love to create beautiful and functional
        websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque blanditiis sed aut!
      </p>
      <div class="btn-con">
        <a href="" class="main-btn">
          <span class="btn-text">Download CV</span>
          <span class="btn-icon"><i class="fas fa-download"></i></span>
        </a>
      </div>
    </div>`;
  container.innerHTML = view;
  return container;
}

export default createHome;
