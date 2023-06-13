/**
 * Make the section selected active for CSS rendering.
 */
function activateSection(idKey: string): void {
    const sections: HTMLElement[] = Array.from(document.querySelectorAll(".container"));
    const currentSection = sections.find((section) =>
      section.classList.contains("active")
    );
    currentSection?.classList.remove("active");
    const selectedSection = document.getElementById(idKey);
    selectedSection?.classList.add("active");
  }
  
  export default activateSection;