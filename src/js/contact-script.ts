/**
 * Javascript content for the script tag in the contact page.
 */
function contactScript(): string {
  // return `
  //   function validateEmail(email) {
  //     const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
  //     return emailRegex.test(email);
  //   }

  //   const form = document.querySelector("form.contact-form");
  //   form.addEventListener("submit", (event) => {
  //     event.preventDefault();

  //     const emailInput = form.querySelector("input[name='email']");
  //     const bodyInput = form.querySelector("textarea");
  //     const isValidEmail = validateEmail(emailInput.value);

  //     if (!isValidEmail) {
  //       alert("Invalid email!");
  //       return;
  //     }
  //     form.submit();
  // });
  // `;
  return `
    const contactIcon = document.querySelector(".contact-icon");
    contactIcon.addEventListener("mouseover", (event) => {
      const target = event.target;
      const span = target.closest(".icon").querySelector(".icon-tooltip");
      span.style.opacity = 1;
    });

    contactIcon.addEventListener("mouseout", (event) => {
      const target = event.target;
      const span = target.closest(".icon").querySelector(".icon-tooltip");
      span.style.removeProperty("opacity");
    });
  `;
}

export default contactScript;