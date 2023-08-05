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
    .addListener("mouseover", ".contact-icon", showTooltipIcon)
    .addListener("mouseout", ".contact-icon", hideTooltipIcon)
    .addListener("submit", "form", checkFormSubmit);
  return contactPage.getNode;
}

export default createContact;
