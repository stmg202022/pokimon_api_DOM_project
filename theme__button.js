document.addEventListener("DOMContentLoaded", async () => {
  const themeBtn = document.getElementById("themeBtn");
  const lightMode = document.getElementById("whiteCircle");
  const darkMode = document.getElementById("blackCircle");

  themeBtn.addEventListener("click", async () => {
    lightMode.classList.toggle("white__circle__toggle");
    darkMode.classList.toggle("black__circle__toggle");
    themeBtn.classList.toggle("theme__btn__toggle");
  });
});
