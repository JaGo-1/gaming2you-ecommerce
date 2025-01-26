//CARRUSEL
const mobileImages = [
  "/assets/img/banner_mb_1.webp",
  "/assets/img/banner_mb_2.webp",
  "/assets/img/banner_mb_3.webp",
];

const images = [
  "/assets/img/banner_1.webp",
  "/assets/img/banner_2.webp",
  "/assets/img/banner_3.webp",
];

let imgArr = [];
let i = 0;
let img = document.getElementById("main__carousel-img");
const nextBtn = document.getElementById("btn-next");
const previousBtn = document.getElementById("btn-previous");

updateImageArray();

function updateImageArray() {
  const isMobile = window.innerWidth < 770;
  const arr = isMobile ? mobileImages : images;
  if (imgArr !== arr) {
    imgArr = arr;
    i = 0;
    img.src = arr[i];
  }
}

function next() {
  const isMobile = window.innerWidth < 770;
  const arr = isMobile ? mobileImages : images;
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  img.src = arr[i];
}

function previous() {
  const isMobile = window.innerWidth < 770;
  const arr = isMobile ? mobileImages : images;
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  img.src = arr[i];
}

//Event listeners
nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);
window.addEventListener("resize", () => {
  updateImageArray();
});

setInterval(next, 6000);
