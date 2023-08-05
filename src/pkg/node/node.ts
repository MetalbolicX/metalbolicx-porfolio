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
   * Get the root element of the page.
   * @type {HTMLElement}
   * @readonly
   */
  public get getNode(): HTMLElement {
    return this.node;
  }

  /**
   * Set the HTML content of the page.
   * @param {string} htmlView - The HTML content.
   * @returns {DOMNode} - The current DOMNode instance.
   * @throws {Error} Will throw an error if the HTML content is not in a valid format.
   * @protected
   */
  public setHTML(htmlView: string): DOMNode {
    if (
      this.checkForJSInHTMLTag(htmlView) ||
      this.checkForScriptTag(htmlView)
    ) {
      throw new Error("Do not add HTML tags that contain JavaScript code");
    }

    if (new RegExp(/<\w+.*?\/?>/i).test(htmlView)) {
      this.node.innerHTML = htmlView;
    } else {
      throw new Error("Invalid HTML format");
    }

    return this;
  }

  /**
   * Add an event listener to the current node.
   * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'change').
   * @param {function} listener - The event listener function to be executed when the event occurs.
   * @returns {DOMNode} - The current DOMNode instance.
   */
  public addListenerToNode(
    eventName: string,
    listener: (e: Event) => void
  ): DOMNode {
    this.node.addEventListener(eventName, listener);
    return this;
  }

  /**
   * Add an event listener to a specific descendant element within the current node.
   * @param {string} tagSelector - The CSS selector to select the descendant element.
   * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'change').
   * @param {function} listener - The event listener function to be executed when the event occurs.
   * @returns {DOMNode} - The current DOMNode instance.
   * @throws {Error} Will throw an error if the CSS selector does not match any element.
   */
  public addListenerToDescendant(
    tagSelector: string,
    eventName: string,
    listener: (e: Event) => void
  ): DOMNode {
    const descendant: HTMLElement | null = this.node.querySelector(tagSelector);
    if (!descendant) {
      throw new Error(
        "The CSS selector does not match any descendant element."
      );
    }
    descendant.addEventListener(eventName, listener);
    return this;
  }

  /**
   * Apply attributes to the current node.
   * @param {string} name The name of the attribute.
   * @param {string} value The value of the attribute.
   * @returns {DOMNode} - The current DOMNode instance.
   */
  public setAttr(name: string, value: string): DOMNode {
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
    return this;
  }

  /**
   * Apply CSS styles to the current node.
   * @param {string} name - The name of the CSS property in the hyphenated format.
   * @param {string} value - The value to be set for the specified CSS property.
   * @returns {DOMNode} - The current DOMNode instance.
   */
  public setStyle(name: string, value: string): DOMNode {
    // Convert the CSS property name from hyphenated format to camel case
    const parsedName: string = name.replace(
      /-([a-z])/gi,
      (_all: string, letter: string) => {
        return letter.toUpperCase();
      }
    );

    (this.node.style as any)[parsedName] = value;
    return this;
  }

  /**
   * Append a new child element to the current node.
   * @param {string} htmlTag - The HTML tag name for creating a new child element.
   * @returns {DOMNode} - The newly appended child element as a DOMNode instance.
   */
  public append(htmlTag: string): DOMNode {
    const childNode = new DOMNode(htmlTag);
    this.node.appendChild(childNode.node);
    return childNode;
  }
}

export default DOMNode;
