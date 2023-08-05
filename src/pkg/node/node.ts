/**
 * Represents a new node to add in the DOM tree.
 */
class DOMNode {
  private htmlTag: string = "";
  private node: HTMLElement;

  /**
   * Create a new DOMNode instance.
   * @param {string} htmlTag - The HTML tag name for creating a new element.
   * @throws {Error} Will throw an error if the HTML is not in a valid tag.
   */
  constructor(htmlTag: string) {
    this.setHTMLTag = htmlTag;
    // this.setView = view;
    this.node = document.createElement(this.htmlTag);
    if (!this.node) {
      throw new Error(`The ${this.htmlTag} is not a valid HTML element`);
    }
  }

  /**
   * Set the HTML tag for the root element of the page.
   * @param {string} htmlTag - The HTML tag name.
   * @protected
   */
  protected set setHTMLTag(htmlTag: string) {
    this.htmlTag = htmlTag.toLocaleLowerCase();
  }

  protected checkForJSInHTMLTag(value: string): boolean {
    return new RegExp(
      /^<\/?\w+(?=(?:\s+[oO][nN]\w+=(?:"[^"]*"|'[^']*')))[^>]*>$/i
    ).test(value);
  }

  protected checkForScriptTag(value: string): boolean {
    return new RegExp(/^<\/?script(\s\w+=["'])?.*?>$/i).test(value);
  }

  /**
   * Set the HTML content of the page.
   * @param {string} view - The HTML content.
   * @throws {Error} Will throw an error if the HTML content is not in a valid format.
   * @protected
   */
  public set setView(view: string) {
    if (this.checkForJSInHTMLTag(view) || this.checkForScriptTag(view)) {
      throw new Error("Do not add HTML tags that contains JavaScript code");
    }

    if (new RegExp(/<\w+.*?\/?>/i).test(view)) {
      this.node.innerHTML = view;
    } else {
      throw new Error("Invalid HTML format");
    }
  }

  /**
   * Add an event listener to a specific element within the page.
   * @param {string} tagSelector - The CSS selector to select the element.
   * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'change').
   * @param {function} listener - The event listener function to be executed when the event occurs.
   * @throws {Error} Will throw an error if the CSS selector does not match any element.
   */
  public addListener(
    tagSelector: string,
    eventName: string,
    listener: (e: Event) => void
  ): void {
    const tagSelected: HTMLElement | null =
      this.node.querySelector(tagSelector);
    if (!tagSelected) {
      throw new Error(
        "The CSS selector which add the listener is not available"
      );
    }
    tagSelected?.addEventListener(eventName, listener);
  }

  /**
   * Get the root element of the page.
   * @type {HTMLElement}
   * @readonly
   */
  public get getNode(): HTMLElement {
    return this.node;
  }

  /**
   * Set an attribute to the new element.
   * @param {string} name The name of the attribute.
   * @param {string} value The value of the attribute
   */
  public setAttr(name: string, value: string): void {
    if (
      new RegExp(/^[oO][nN]\w+$/i).test(name) ||
      this.checkForScriptTag(value)
    ) {
      throw new Error("Problem with XSS attack");
    }

    if (name === "class") {
      const cssClasses: string[] = value.split(".");
      cssClasses.forEach((cssClass: string) =>
        this.node.classList.add(cssClass)
      );
    } else {
      this.node.setAttribute(name, value);
    }
  }

  /**
   * Apply CSS styles on a given HTML element.
   * @param {string} name - The name of the CSS property in the hyphenated format, e.g., "font-size", "background-color".
   * @param {string} [value] - (Optional) The value to be set for the specified CSS property.
   */
  public setStyle(name: string, value: string): void {
    // Convert the CSS property name from hyphenated format to camel case
    const parsedName: string = name.replace(
      /-([a-z])/gi,
      (_all: string, letter: string) => {
        return letter.toUpperCase();
      }
    );

    if (typeof value !== "undefined") {
      (this.node.style as any)[parsedName] = value;
    }
  }
}

export default DOMNode;
