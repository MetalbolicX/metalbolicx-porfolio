import { emailVerifyKey } from "../utils/constants";
/**
 * Show the tooltip span for the .contact-icon class icons.
 */
function showTooltipIcon(event: Event): void {
  const tg = event.target as HTMLElement;
  const iconElement = tg.closest(".icon");
  const span: HTMLElement | null | undefined =
    iconElement?.querySelector(".icon-tooltip");

  if (span) {
    span.classList.add("active-icon");
  }
}

/**
 * Hides the tooltip span for the .contact-icon class icons.
 */
function hideTooltipIcon(event: Event): void {
  const tg = event.target as HTMLElement;
  const iconElement = tg.closest(".icon");
  const span: HTMLElement | null | undefined =
    iconElement?.querySelector(".icon-tooltip");

  if (span) {
    span.classList.remove("active-icon");
  }
}

/**
 * Makes an API request to verify the email format before submit the form.
 */
async function checkFormSubmit(event: Event): Promise<void> {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const email: HTMLInputElement | null = target.querySelector("input[type='email']");

  if (!email) {
    showNotification("The email in the form was not written");
  }

  const isValidEmail = await checkEmail(email!.value);
  if (!isValidEmail) {
    showNotification(`Invalid email ${email?.value}`);
    return;
  }
  target.submit();
}

/**
 * Creates a new div element to show the incorrect email address written
 * in the input email field, the div element will dispear after 3 seconds.
 * @param message To show in the error message div element.
 */
function showNotification(message: string): void {
  const notification: HTMLDivElement = document.createElement("div");
  notification.textContent = message;
  notification.classList.add("notification");
  document.body.appendChild(notification);
  // Get the main content
  const mainContainer: HTMLElement | null = document.querySelector("main");
  mainContainer!.style.display = "none";

  // Automatically remove the notification after 3 seconds
  setTimeout(() => {
    notification.remove();
    mainContainer?.style.removeProperty("display");
  }, 3000);
}

/**
 * Make the fetch to check whether the email is valid or not.
 * @param email The email address to check.
 */
async function checkEmail(email: string): Promise<boolean> {
  const resp = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${emailVerifyKey}&email=${email}`);
  if (resp.status !== 200) {
    return false;
  }
  const json = await resp.json();
  return json.is_valid_format.value;
}

export { showTooltipIcon, hideTooltipIcon, checkFormSubmit };


