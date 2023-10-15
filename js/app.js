$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 25,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-circle-chevron-left"></i>',
      '<i class="fa-solid fa-circle-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1, stagePadding: 10 },
      640: {items: 2, stagePadding: 20},
      1024: {items: 3, margin: 20, stagePadding: 50}
    },
  });
});

const message_btn = document.getElementById("message");
const popup = document.querySelector(".popup");
const popup_form = document.querySelector(".popup_form");
const close_btn = document.getElementById("close_btn");
const header = document.querySelector("header");
const menu_open_icon = document.querySelector(".fa-bars");
const menu_close_icon = document.querySelector(".fa-circle-xmark");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_menu_links = mobile_menu.querySelectorAll('ul li a');

message_btn.addEventListener("click", () => {
  popup.classList.add("show");
  popup_form.classList.add("show");
  document.body.style.overflow = "hidden";
});

close_btn.addEventListener("click", () => {
  popup_form.classList.remove("show");
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    if (popup.classList.contains("show")) {
      e.preventDefault();
    }
  }
});

window.addEventListener("scroll", (e) => {
  window.scrollY >= 100
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

menu_open_icon.addEventListener("click", () => {
  mobile_menu.classList.add("open");
  document.body.style.overflow = "hidden";
});

menu_close_icon.addEventListener("click", () => {
  mobile_menu.classList.remove("open");
  document.body.style.overflow = "auto";
});

mobile_menu_links.forEach(link => {
  link.addEventListener('click', () => {
    mobile_menu.classList.remove('open');
    document.body.style.overflow = 'auto';
  })
})