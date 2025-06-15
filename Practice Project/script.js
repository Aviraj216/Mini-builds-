const popup = document.getElementById("popup");
const iframe = document.getElementById("popup-frame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".image-box").forEach((box) => {
  box.addEventListener("click", () => {
    const pageUrl = box.getAttribute("data-page");
    iframe.src = pageUrl;
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  iframe.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    iframe.src = "";
  }
});
