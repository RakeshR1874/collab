
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer if there's a span with id="year"
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add hover effect to nav links
  const navLinks = document.querySelectorAll(".menu-date a, .foot a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.textDecoration = "underline";
    });
    link.addEventListener("mouseleave", () => {
      link.style.textDecoration = "none";
    });
  });
});
