
window.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.textDecoration = "underline";
      link.style.color = "#c62828";
    });
    link.addEventListener("mouseout", () => {
      link.style.textDecoration = "none";
      link.style.color = "inherit";
    });
  });

  
  const speakerImgs = document.querySelectorAll(".img-content img");
  speakerImgs.forEach(img => {
    img.style.transition = "transform 0.3s ease";
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
});
