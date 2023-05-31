import getData from "../utils/getdata";

interface Character {
  id: number;
  image: string;
  name: string;
  // Add other properties as needed
}

async function home(): Promise<HTMLDivElement> {
  const characters = await getData();
  const charactersHTMLInfo: string[] = characters.results.map(
    (character: Character) => /*html*/ `
      <article class="character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}"/>
          <h2>${character.name}</h2>
        </a>
      </article>
    `
  );
  const charactersHTML: HTMLDivElement = document.createElement("div");
  charactersHTML.className = "characters";
  charactersHTML.innerHTML = charactersHTMLInfo.join("");
  return charactersHTML;
}

export default home;
