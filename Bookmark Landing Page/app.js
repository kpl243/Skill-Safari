// mobile nav bar

const hamBtn = document.querySelector(".hamburger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const headerMobile = document.querySelector(".header-mobile");
const hamImg = document.querySelector(".ham-img");
const headerLogo = document.querySelector(".header-logo");
const featuresBtn = document.querySelectorAll(".features-btn");
const featuresUnderline = document.querySelectorAll(".button-underline");
const main = document.querySelector("main");

hamBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("show-navbar");
  headerMobile.classList.toggle("header-index");
  hamImg.src = "/images/icon-close.svg";
  main.classList.toggle("margin");
  changeImage();
});

function changeImage() {
  if (mobileNav.classList.contains("show-navbar")) {
    hamImg.src = "/images/icon-close.svg";
    headerLogo.src = "/images/logo-bookmark-white.svg";
  } else {
    hamImg.src = "/images/icon-hamburger.svg";
    headerLogo.src = "/images/logo-bookmark.svg";
  }
}

// buttons

const btns = document.querySelectorAll(".features-btn");
const about = document.querySelector(".features-content");
const articles = document.querySelectorAll(".content");
const lines = document.querySelectorAll(".button-underline");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    lines.forEach(function (line) {
      line.classList.remove("show-underline");
      e.target.parentElement.children[1].classList.add("show-underline");
    });
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Q&A

const qanda = document.querySelectorAll(".q-and-a");

qanda.forEach(function (btn) {
  const questionShow = btn.children[0];

  questionShow.addEventListener("click", function (item) {
    qanda.forEach(function (e) {
      if (e !== btn) {
        e.classList.remove("show-text");
      }
    });
    btn.classList.toggle("show-text");
  });
});

// email validation

const submitBtn = document.querySelector("form");

submitBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector(".input");
  const email = document.getElementById("email").value;

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  input.addEventListener("keydown", () => {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  });
});
