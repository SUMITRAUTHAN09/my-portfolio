// Cursor-tracking effect for About section
document.addEventListener("mousemove", function (e) {
    document.body.style.setProperty("--x", `${e.clientX}px`);
  document.body.style.setProperty("--y", `${e.clientY}px`);
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
// Cursor tracker for entire portfolio background


