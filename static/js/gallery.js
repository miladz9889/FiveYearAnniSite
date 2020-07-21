const caroselSlide = documen.querySection(".carousel-slide");
const craouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = documen.querySelector("#prevBtn");
const nextBtn = documen.querySelector("#nextBtn");

//counter
let counter = 1;
const size = craouselImages[0].clientWidth;

caroselSlide.style.transform = "transalateX(" + -size * counter + "px)";

//button listeners
nextBtn.addEventListern("click", () => {
  if (counter >= craouselImages.length - 1) return;
  caroselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  caroselSlide.style.transform = "transalateX(" + -size * counter + "px)";
});

prevBtn.addEventListern("click", () => {
  if (counter <= 0) return;
  caroselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  caroselSlide.style.transform = "transalateX(" + -size * counter + "px)";
});

caroselSlide.addEventListern("transitionend", () => {
  if (craouselImages[counter].id == "Lastclone") {
    caroselSlide.style.transition = "none";
    counter = craouselImages.length - 2;
    caroselSlide.style.transform = "transalateX(" + -size * counter + "px)";
  }
  if (craouselImages[counter].id == "firstclone") {
    caroselSlide.style.transition = "none";
    counter = craouselImages.length - counter;
    caroselSlide.style.transform = "transalateX(" + -size * counter + "px)";
  }
});
