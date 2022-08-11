const imgRed = document.querySelector(".gallery__img--red");
const imgBlue = document.querySelector(".gallery__img--blue");
const imgGreen = document.querySelector(".gallery__img--green");
const btnRed = document.querySelector(".gallery__pagination--red");
const btnBlue = document.querySelector(".gallery__pagination--blue");
const btnGreen = document.querySelector(".gallery__pagination--green");

btnRed.addEventListener("click", () => {
  imgRed.classList.add("img-active");
  imgBlue.classList.remove("img-active");
  imgGreen.classList.remove("img-active");
  btnRed.classList.add("btn-active");
  btnBlue.classList.remove("btn-active");
  btnGreen.classList.remove("btn-active");
});

btnBlue.addEventListener("click", () => {
  imgBlue.classList.add("img-active");
  imgRed.classList.remove("img-active");
  imgGreen.classList.remove("img-active");
  btnBlue.classList.add("btn-active");
  btnRed.classList.remove("btn-active");
  btnGreen.classList.remove("btn-active");
});

btnGreen.addEventListener("click", () => {
  imgGreen.classList.add("img-active");
  imgRed.classList.remove("img-active");
  imgBlue.classList.remove("img-active");
  btnGreen.classList.add("btn-active");
  btnRed.classList.remove("btn-active");
  btnBlue.classList.remove("btn-active");
});
