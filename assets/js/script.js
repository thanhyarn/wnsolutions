"use strict";


/**
 * add event on element
 */

// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// };

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

// Add an event listener to each navbar link
document.querySelectorAll(".navbar-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default link behavior
    event.preventDefault();
    // Get the target section id
    const targetId = link.getAttribute("href");
    // Get the target section element
    const targetElement = document.querySelector(targetId);
    // Calculate the target scroll position (subtract 50px)
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - 150;
    // Scroll to the target section
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

const dropdown = document.querySelector(".drop-down");

const list = document.querySelector(".list");

const selected = document.querySelector(".seleced");

const seclectImg = document.querySelector(".selectedImg");

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});
list.addEventListener("click", (e) => {
  const img = e.target.querySelector("img");
  const text = e.target.querySelector(".text");

  seclectImg.src = img.src;
  selected.innerHTML = text.innerHTML;
});

let filter_btn = document.querySelectorAll(".filter-btn");
let tab_items = document.querySelectorAll(".tab-item");

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener("click", function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove("active");
    }
    let select_tab = filter_btn[i].getAttribute("data-tab");
    filter_btn[i].classList.add("active");
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector(".tab-filter-item-container").style.height =
        tab_items[t].scrollHeight + "px";
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add("select_tab");
      } else {
        tab_items[t].classList.remove("select_tab");
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector(".tab-filter-item-container").style.height =
    tab_items[th].scrollHeight + "px";
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

$(".accordion-header").click(function () {
  $(".accordion .accordion-body").slideUp();
  $(this).next(".accordion-body").slideDown();
  $(".accordion .accordion-header span").text("+");
  $(this).children("span").text("-");
});


