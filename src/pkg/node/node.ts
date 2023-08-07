/**
 * Represents a new node to add in the DOM tree.
 */
class DOMNode {
  private htmlTag: string = "";
  private rootNode: HTMLElement;
  private currentNode: HTMLElement;
  private previousNode: HTMLElement;
  private nextNode: HTMLElement;

  /**
   * Create a new DOMNode instance.
   * @param {string} htmlTag - The HTML tag name for creating a new element.
   * @throws {Error} Will throw an error if the HTML is not in a valid tag.
   */
  constructor(htmlTag: string) {
    this.setHTMLTag = htmlTag;
    this.rootNode = document.createElement(this.htmlTag);
    if (!this.rootNode) {
      throw new Error(`The ${this.htmlTag} is not a valid HTML element`);
    }
    this.currentNode = this.rootNode;
    this.previousNode = this.rootNode;
    this.nextNode = this.rootNode;
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
    return this.rootNode;
  }

  /**
   * Get the current node level in the this DOM tree.
   * @type {HTMLElement}
   * @readonly
   */
  public get getCurrentNode(): HTMLElement {
    return this.currentNode;
  }

  /**
   * Get the previous node in the current level of this tree.
   * @type {HTMLElement}
   * @readonly
   */
  public get getPreviousNode(): HTMLElement {
    return this.previousNode;
  }

  /**
   * Get the next node in the current level of this tree.
   * @type {HTMLElement}
   * @readonly
   */
  public get getNextNode(): HTMLElement {
    return this.nextNode;
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
      this.currentNode.innerHTML = htmlView;
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
  public on(eventName: string, listener: (e: Event) => void): DOMNode {
    this.currentNode.addEventListener(eventName, listener);
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
  public addListener(
    eventName: string,
    tagSelector: string,
    listener: (e: Event) => void
  ): DOMNode {
    const descendant: HTMLElement | null =
      this.currentNode.querySelector(tagSelector);
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
        this.currentNode.classList.add(cssClass)
      );
    } else {
      this.currentNode.setAttribute(name, value);
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

    (this.currentNode.style as any)[parsedName] = value;
    return this;
  }

  /**
   * Write the text to the current node
   * @param {string} value - The text to be written in the current node.
   * @returns {DOMNode} - The current DOMNode instance.
   */
  public setText(value: string): DOMNode {
    this.currentNode.textContent = value;
    return this;
  }

  /**
   * Append a new child element in the current node or to its child.
   * @param {string} htmlTag - The HTML tag name for creating a new child element.
   * @param {string} isGrandChild - Whether the child is a grand child of the current node, otherwise a direct descendant. By default is a direct descendant of the current node.
   * @returns {DOMNode} - The newly appended child element as a DOMNode instance.
   */
  public append(htmlTag: string, isGrandChild: boolean = false): DOMNode {
    const childNode = new DOMNode(htmlTag);
    // Append to the first level or the depest level of the current node
    if (isGrandChild) {
      this.currentNode.append(childNode.rootNode);
    } else {
      this.rootNode.append(childNode.rootNode);
    }

    this.currentNode = childNode.rootNode;
    this.previousNode = childNode.rootNode.parentElement || this.rootNode;
    this.nextNode = this.currentNode;
    return this;
  }

  /**
   * Move the current node above to a higher ancestor node within the hierarchy by a specified number of levels.
   * @param {number} levelToMove - The number of ancestor levels to move above. Default is 1.
   * @returns {DOMNode} - The current DOMNode instance after moving.
   */
  public previous(levelToMove: number = 1): DOMNode {
    while (levelToMove > 0 && this.previousNode !== this.rootNode) {
      this.nextNode = this.currentNode;
      this.currentNode = this.previousNode;
      this.previousNode = this.currentNode.parentElement || this.rootNode;
      levelToMove--;
    }
    return this;
  }
}

export default DOMNode;
