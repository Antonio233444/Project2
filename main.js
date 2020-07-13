
const hamburger  = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const fullscreen = document.querySelector(".fullscreen");

hamburger.addEventListener('click', function(event){
    event.preventDefault();
    fullscreen.style.display = "flex";
})

cross.addEventListener('click', function(event){
    fullscreen.style.display = "none";
} )


const slider = $('.slider').slick({
    prevArrow: $('.left-icon'),
    nextArrow: $('.right-icon'),
  });
  

  



