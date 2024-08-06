document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  const accordionHeaders = document.querySelectorAll(
    ".accordion .accordion-heading"
  );

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const currentlyActiveAccordion =
        document.querySelector(".accordion.active");
      const newActiveAccordion = header.parentNode;
      const accordionContent =
        newActiveAccordion.querySelector(".accordion-content");
      const icon = header.querySelector("i");

      if (
        currentlyActiveAccordion &&
        currentlyActiveAccordion !== newActiveAccordion
      ) {
        // Đóng accordion hiện tại đang mở
        currentlyActiveAccordion.classList.remove("active");
        currentlyActiveAccordion.querySelector(
          ".accordion-content"
        ).style.height = "0";
        currentlyActiveAccordion
          .querySelector("i")
          .classList.replace("fa-angle-up", "fa-angle-down");
      }

      // Toggle accordion mới được click
      newActiveAccordion.classList.toggle("active");

      if (newActiveAccordion.classList.contains("active")) {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        icon.classList.replace("fa-angle-down", "fa-angle-up");
      } else {
        accordionContent.style.height = "0";
        icon.classList.replace("fa-angle-up", "fa-angle-down");
      }
    });
  });
});
