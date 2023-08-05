import Page from "../../pkg/node/node";
import createContactView from "../views/contact-view";
import {
  showTooltipIcon,
  hideTooltipIcon,
  checkFormSubmit,
} from "../events/contact-events";

/**
 * Create the HTML section element of contact page.
 */
async function createContact(): Promise<HTMLElement> {
  const contactPage: Page = new Page("main")
    .setHTML(createContactView())
    .setAttr("class", "contact.container.active")
    .addListenerToDescendant(".contact-icon", "mouseover", showTooltipIcon)
    .addListenerToDescendant(".contact-icon", "mouseout", hideTooltipIcon)
    .addListenerToDescendant("form", "submit", checkFormSubmit);
  return contactPage.getNode;
}

export default createContact;
