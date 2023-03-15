const btn = document.querySelector(".headbtn");
const nav = document.querySelector(".navbar");

btn.addEventListener("click", () => {
  nav.classList.toggle("memu-open");
});
