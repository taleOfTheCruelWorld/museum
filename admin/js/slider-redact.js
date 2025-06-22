var modalSlider = document.getElementById("myModalSlider");
var modalSliderContent = document.querySelectorAll('.modal-slider-content');
var sliderPref = document.getElementById("slider-pref");

sliderPref.onclick = function () {
   modalSlider.style.display="flex"; 
   modalSlider.style.animation='rise';
   modalSlider.style.animationDuration='1s';
}

var sliderUploadButton = document.querySelectorAll("#upload.slider");
var sliderCloseCross= document.querySelectorAll("#close.slider");
var sliderCloseButton= document.querySelectorAll("#cancel.slider");
var sliderInput = document.querySelectorAll(".finputslider");
var sliderGlobalCross = document.querySelector("#cn.modal-slid");
console.log(sliderInput)
sliderInput.forEach(element => {
    element.value="";
});
var sliderPreview = document.querySelectorAll("#preview.slider");
console.log(sliderPreview);

function sliderFall (){
    modalSlider.style.animation='fall';
    modalSlider.style.animationDuration='1s';
    setTimeout(() =>{modalSlider.style.display="none";}, 1000);
}
function winClose(num){
    modalSliderContent[num].style.display="none";
}
window.onclick = function (event) {
    if (event.target == modalSlider) {
        sliderFall()
    }
}
function sliderPrev(num) {
    console.log(num);
    sliderPreview[num].src = URL.createObjectURL(sliderInput[num].files[0]);
}

for (let input = 0; input < sliderInput.length; input++) {
    console.log(sliderInput[input]);
    sliderInput[input].addEventListener("change", function(){sliderPrev(input);})
    sliderCloseCross[input].onclick = function() {winClose(input);}
}
sliderGlobalCross.onclick = sliderFall;
    
