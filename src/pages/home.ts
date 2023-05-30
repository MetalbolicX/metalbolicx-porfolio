import getData from "../utils/getdata";

interface Character {
  id: number;
  image: string;
  name: string;
  // Add other properties as needed
}

async function home(): Promise<string> {
  const characters = await getData();
  const view: string = /*html*/ `
      <div class="characters">
        ${characters.results.map((character: Character) => /*html*/`
          <article class="character-item">
            <a href="#/${character.id}/">
              <img src="${character.image}" alt="${character.name}"/>
              <h2>${character.name}</h2>
            </a>
          </article>
        `).join("")};
      </div>`;
  return view;
}

export default home;
