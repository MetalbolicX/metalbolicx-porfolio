const API: string = "https://rickandmortyapi.com/api/character/";

async function getData(id?: string): Promise<any> {
  const apiUrl: string = id ? `${API}${id}` : API;
  try {
    const response: Response = await fetch(apiUrl);
    const data: Promise<any> = await response.json();
    return data;
  } catch (err) {
    console.log("Fetch error: ", err);
  }
}

export default getData;
