
const hamburger  = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const fullscreen = document.querySelector(".fullscreen");

hamburger.addEventListener('click', function(event){
    event.preventDefault();
    fullscreen.style.display = "block";
})
