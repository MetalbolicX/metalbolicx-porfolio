import createContactView from "../views/contact-view";
import { showTooltipIcon, hideTooltipIcon } from "../events/contact-events";

/**
 * Create the HTML section element of contact page.
 */
async function createContact(): Promise<HTMLElement> {
  const contact: HTMLElement = document.createElement("section");
  contact.classList.add("container");
  contact.classList.add("contact");
  contact.classList.add("active");

  contact.innerHTML = createContactView();

  const icons: HTMLElement | null = contact.querySelector(".contact-icon");
  icons?.addEventListener("mouseover", showTooltipIcon);
  icons?.addEventListener("mouseout", hideTooltipIcon);

  return contact;
}

export default createContact;