import getHash from "../utils/gethash";
import getData from "../utils/getdata";

async function character(): Promise<HTMLDivElement> {
  const id: string = getHash();
  const character = await getData(id);
  const div: HTMLDivElement = document.createElement("div");
  div.className = "characters-inner";
  const view: string = /*html*/ `
      <article class="characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="characters-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last location: <span>${character.location.name}</span></h3>
      </article>
    `;
  div.innerHTML = view;
  return div;
}

export default character;
