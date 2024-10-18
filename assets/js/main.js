//CARRUSEL

const imagenes = [
  "/assets/img/banner_1.webp",
  "/assets/img/banner_2.png",
  "/assets/img/banner_3.png",
];
let i = 0;
let img = document.getElementById("main__carousel-img");
const nextBtn = document.getElementById("btn-next");
const previousBtn = document.getElementById("btn-previous");

img.src = imagenes[i];

function next() {
  i++;
  if (i >= imagenes.length) {
    i = 0;
  }
  img.src = imagenes[i];
}

function previous() {
  i--;
  if (i < 0) {
    i = imagenes.length - 1;
  }
  img.src = imagenes[i];
}

nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);
setInterval(next, 6000);
