//slider
$(document).ready(function () {
    //iniciando o plugin
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});

//Interação Menu
function clickMenu(){
    if(itens.style.display =='block'){
        itens.style.display ='none'
    }else{
        itens.style.display = 'block'
    }
}


// Modal
var modalBtn = document.getElementById("modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});