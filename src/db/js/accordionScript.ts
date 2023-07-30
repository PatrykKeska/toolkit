export const accordionScript = `
document.addEventListener("DOMContentLoaded", () => {
  const onClickElements = document.querySelectorAll(".faq-under-section");

  onClickElements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();

      const iconToRotate = element.querySelector(".content__visible__icon");
      const hideElement = element.querySelector(".content__hide");
      const allOpenElements = document.querySelector(".content__hide--active");
      const rotatedIcon = document.querySelector(".visible-icon--active");

      hideElement.classList.toggle("content__hide--active");
      iconToRotate.classList.toggle("visible-icon--active");

      if (rotatedIcon) {
        rotatedIcon.classList.remove("visible-icon--active");
      }

      if (allOpenElements) {
        allOpenElements.classList.remove("content__hide--active");
      }
    });
  });
});

  
  `;
