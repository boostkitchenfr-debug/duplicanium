const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", () => {
    const button = form.querySelector("button");
    if (button) {
      button.textContent = "Envoi en cours...";
      button.disabled = true;
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
