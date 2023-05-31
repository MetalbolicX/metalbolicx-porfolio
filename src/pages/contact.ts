function contact(): HTMLDivElement {
  const contact = document.createElement("div");
  contact.className = "contact";
  const view: string = /*html*/ `
      <h2>José Martínez Santana</h2>
      <h3>jose.martinez.santana@gmail.com</h3>
    `;
  contact.innerHTML = view;
  return contact;
}

export default contact;