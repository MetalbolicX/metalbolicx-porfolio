/**
 * Represents a new node to add in the DOM tree.
 */
class DOMNode {
  private htmlTag: string = "";
  private view: string = "";
  private node: HTMLElement;

  /**
   * Create a new Page instance.
   * @param {string} htmlTag - The HTML tag name for the root element of the page.
   * @param {string} view - The HTML content of the page.
   * @param {string[]} [cssClasses=[]] - Optional CSS classes to apply to the root element.
   * @throws {Error} Will throw an error if the HTML content is not in a valid format.
   */
  constructor(htmlTag: string, view: string, cssClasses: string[] = []) {
    this.setHTMLTag = htmlTag;
    this.setView = view;
    this.node = document.createElement(this.htmlTag);
    if (cssClasses.length > 0) {
      for (const cssClass of cssClasses) {
        this.node.classList.add(cssClass);
      }
    }
    this.node.innerHTML = this.view;
  }

  /**
   * Set the HTML tag for the root element of the page.
   * @param {string} htmlTag - The HTML tag name.
   * @protected
   */
  protected set setHTMLTag(htmlTag: string) {
    this.htmlTag = htmlTag.toLocaleLowerCase();
  }

  /**
   * Set the HTML content of the page.
   * @param {string} view - The HTML content.
   * @throws {Error} Will throw an error if the HTML content is not in a valid format.
   * @protected
   */
  protected set setView(view: string) {
    if (new RegExp(/<[a-z]{1,15}.*?\/?>/).test(view)) {
      this.view = view;
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
  public setAttribute(name: string, value: string): void {
    this.node.setAttribute(name, value);
  }

  /**
 * Apply CSS styles on a given HTML element.
 * @param {string} name - The name of the CSS property in the hyphenated format, e.g., "font-size", "background-color".
 * @param {string} [value] - (Optional) The value to be set for the specified CSS property.
 */
  public setStyle(name: string, value: string): void {
    // Convert the CSS property name from hyphenated format to camel case
    const parsedName: string = name.replace(/-([a-z])/ig, (_all: string, letter: string) => {
      return letter.toUpperCase();
    });

    if (typeof value !== "undefined") {
      (this.node.style as any)[parsedName] = value;
    }
  }
}

export default DOMNode;
