const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ وضع النهار";
  } else {
    toggleBtn.textContent = "🌙 وضع الليل";
  }
});
