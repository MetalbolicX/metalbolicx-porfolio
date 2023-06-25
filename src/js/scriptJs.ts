import contactScript from "./contact-script";
import errorScript from "./error-script";

type ScriptContent = () => string;
interface Functions {
  [key: string]: ScriptContent;
}

const funcs: Functions = {
  "contact": contactScript,
  // "home": createHome,
  // "about": createAbout,
  // "portfolio": createPortfolio,
};

/**
 * Add a Javascript node to the DOM.
 */
function createJsScript(selectedId: string): void {
  // Delete the previous script node
  const scriptTag: HTMLScriptElement | null = document.querySelector(".js-code");
  scriptTag?.remove()
  // Which content of the script tag will be added
  const contentScript: () => string = funcs[selectedId] || errorScript;
  // Add the script tag
  const jsScript: HTMLScriptElement = document.createElement("script");
  jsScript.classList.add("js-code");
  jsScript.setAttribute("type", "text/javascript");
  jsScript.innerHTML = contentScript();
  const body: HTMLElement | null = document.querySelector("body");
  body?.append(jsScript);
}

export default createJsScript;
