document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".profile-img");
  const originalSrc = "images/ligreen2.png";
  const hoverSrc = "images/ligreen.png";

  img.addEventListener("mouseenter", function () {
    img.src = hoverSrc;
  });

  img.addEventListener("mouseleave", function () {
    img.src = originalSrc;
  });
});
