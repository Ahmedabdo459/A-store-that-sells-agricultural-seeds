document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");
  if (!toggleBtn) return;

  // Restore preference
  const saved = localStorage.getItem("preferred-theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ وضع النهار";
  }

  toggleBtn.addEventListener("click", () => {
    const nowDark = document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = nowDark ? "☀️ وضع النهار" : "🌙 وضع الليل";
    localStorage.setItem("preferred-theme", nowDark ? "dark" : "light");
  });
});
