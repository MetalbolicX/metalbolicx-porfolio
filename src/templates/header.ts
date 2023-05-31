function header(): HTMLDivElement {
  const header = document.createElement("div");
  header.className = "header-main";
  const view: string = /*html*/ `
      <div class="header-logo">
        <h1>
          <a href="/">100tifi.co</a>
        </h1>
      </div>
      <div class="header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    `;
  header.innerHTML = view;
  return header;
}

export default header;
