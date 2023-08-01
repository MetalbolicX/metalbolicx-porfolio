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
function checkFormSubmit(event: Event): void {
  const frm = event.target as HTMLFormElement;
  const formInputs: (HTMLInputElement | HTMLTextAreaElement)[] = Array.from(
    frm.querySelectorAll("[required]")
  );

  const isSanitized: boolean = formInputs.some(
    (formInput: HTMLInputElement | HTMLTextAreaElement) =>
      new RegExp(/<\/?\w+.*?>/).test(formInput.value)
  );

  if (isSanitized) {
    showNotification("The input in the controls of the form are not allowed");
    return;
  }

  const email: HTMLInputElement | HTMLTextAreaElement | undefined =
    formInputs.find((formInput: HTMLInputElement | HTMLTextAreaElement) =>
      new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
      ).test(formInput.value)
    );

  if (!email) {
    showNotification("Please enter a valid email address");
    return;
  }

  frm.submit();
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

export { showTooltipIcon, hideTooltipIcon, checkFormSubmit };
