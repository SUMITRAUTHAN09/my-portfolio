// Cursor-tracking effect for About section
document.addEventListener("mousemove", function (e) {
  // Update the CSS variables for the global mouse tracker
  document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);

  // The code for the about section's cursor-tracking effect
  const about = document.getElementById("about");
  if (!about) return;

  const rect = about.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
    about.style.setProperty("--x", `${x}px`);
    about.style.setProperty("--y", `${y}px`);
  }
});

// Fix nav toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});