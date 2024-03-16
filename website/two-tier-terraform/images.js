// GALLERY/SLIDESHOW
// let projectImg = document.querySelectorAll(".page-project-image img");

const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const overlayImg = document.querySelector("#overlay-img");

const elements = document.querySelectorAll("figure.page-project-image");
let elementCount = elements.length;

const images = [];

for (let i = 8; i <= elementCount + 7; i++) {
  // url = `/website/projects/two-tier-architecture-terraform/project-images/${i}.png`;
  url = `project-images/${i}.png`;
  images.push(url);
}

let imageElements = document.querySelectorAll("figure.page-project-image img");
let currentImageIndex = 8;

function displayImage() {
  overlay.style.position = "fixed";
  overlay.style.display = "flex";
  body.style.overflowY = "hidden";
}

function closeImage() {
  overlay.style.position = "absolute";
  overlay.style.display = "none";
  body.style.overflowY = "scroll";
}

imageElements.forEach((image, index) => {
  image.addEventListener("click", () => {
    displayImage();
    currentImageIndex = index;
    overlayImg.src = images[currentImageIndex];
  });
});

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = images.length - 1;
  }
  overlayImg.src = images[currentImageIndex];
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
  }
  overlayImg.src = images[currentImageIndex];
}

const lastImg = document.querySelector("#overlay-img-btn-back");
const nextImg = document.querySelector("#overlay-img-btn-forwards");
const closeBtn = document.querySelector("#overlay-img-btn-close");
const overlayImgBtns = document.querySelectorAll(".overlay-imgBtn");

lastImg.addEventListener("click", prevImage);
nextImg.addEventListener("click", nextImage);
closeBtn.addEventListener("click", closeImage);
