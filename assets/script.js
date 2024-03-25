// Tableau des slides et paragraphes
const slides = [
  {
    imageUrl: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    imageUrl: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    imageUrl: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    imageUrl: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables globales
const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");
const image = document.querySelector(".banner-img");
const paragraph = document.querySelector(".paragraphe");
const dots = document.querySelector(".dots");
let index = 0;

// Affichage des bullet points
function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDots();

// Affichage des slides au click droit
function clickRight() {
  arrow_right.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dot");
    arrayDots[index].classList.remove("dot_selected");
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    image.src = slides[index].imageUrl;
    paragraph.innerHTML = slides[index].tagLine;
    arrayDots[index].classList.add("dot_selected");
  });
}
clickRight();

// Affichage des slides au click gauche
function clickLeft() {
  arrow_left.addEventListener("click", () => {
    const arrayDots = document.querySelectorAll(".dot");
    arrayDots[index].classList.remove("dot_selected");
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    image.src = slides[index].imageUrl;
    paragraph.innerHTML = slides[index].tagLine;
    arrayDots[index].classList.add("dot_selected");
  });
}
clickLeft();
