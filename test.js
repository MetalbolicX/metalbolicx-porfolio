const sections = document.querySelectorAll(".section");
const navigationButtons = document.querySelectorAll(".controls");
const buttons = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  });

  // Sections active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove selected from the other btns
      navigationButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      // Hide other sections
      sections.forEach((section) => section.classList.remove("active"));
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransitions();
