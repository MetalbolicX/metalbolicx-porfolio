import header from "../templates/header";

async function loader(): Promise<void> {
  const head: HTMLElement | null = null || document.getElementById("header");
  head!.append(await header());
}

export default loader;