import createContactView from "../views/contact-view";
import { showTooltipIcon, hideTooltipIcon, checkFormSubmit } from "../events/contact-events";

/**
 * Create the HTML section element of contact page.
 */
async function createContact(): Promise<HTMLElement> {
  const contact: HTMLElement = document.createElement("main");
  contact.classList.add("container");
  contact.classList.add("contact");
  contact.classList.add("active");

  contact.innerHTML = createContactView();

  const icons: HTMLElement | null = contact.querySelector(".contact-icon");
  icons?.addEventListener("mouseover", showTooltipIcon);
  icons?.addEventListener("mouseout", hideTooltipIcon);

  const form: HTMLFormElement | null = contact.querySelector("form");
  form?.addEventListener("submit", checkFormSubmit);

  return contact;
}

export default createContact;