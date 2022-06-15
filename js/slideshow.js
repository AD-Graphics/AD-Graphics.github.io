let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");

let slides = [slide1, slide2, slide3, slide4];

let currentSlideIndex = 0;

function showCurrentSlide() {
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    // DOES NOT EQUAL
    if (i != currentSlideIndex) {
      loopSlide.style.display = "none";
    } else {
      loopSlide.style.display = "inline-block";
      // SETS BUTTONS ON BASE OF IMAGES IN SLIDESHOW
      slideshow.style.height = loopSlide.offsetHeight + "px";
    }
  }
}

showCurrentSlide();

function showNextSlide() {
  currentSlideIndex++;
  showCurrentSlide();
}

function showPreviousSlide() {
  currentSlideIndex--;
  showCurrentSlide();
}
