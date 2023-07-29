import Page from "../../pkg/page/page";
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
  const contactPage: Page = new Page("main", createContactView(), [
    "contact",
    "container",
    "active",
  ]);
  contactPage.addListener(".contact-icon", "mouseover", showTooltipIcon);
  contactPage.addListener(".contact-icon", "mouseout", hideTooltipIcon);
  contactPage.addListener("form", "submit", checkFormSubmit);
  return contactPage.getNode;

}

export default createContact;
