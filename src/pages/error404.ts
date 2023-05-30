function error404(): string {
  const view: string = /*html*/ `
          <div class="error-404">
              <h2>Error 404</h2>
          </div>
      `;
  return view;
}

export default error404;
