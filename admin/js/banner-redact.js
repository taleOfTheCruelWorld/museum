var modalBanner = document.getElementById("myModalBanner");
var modalBannerContent = document.querySelector('.modal-banner-content');
var bannerPref = document.getElementById("chronics-bunner");

bannerPref.onclick = function () {
   modalBanner.style.display="block"; 
   modalBanner.style.animation='rise';
   modalBanner.style.animationDuration='1s';
}

var bannerUploadButton = document.querySelector("#upload.banner");
var bannerCloseCross= document.querySelector("#close.banner");
var bannerCloseButton= document.querySelector("#cancel.banner");
var bannerInput = document.querySelector("#file-upload.banner");
bannerInput.value = "";
var bannerPreview = document.querySelector("#preview.banner");

function fall (){
    modalBanner.style.animation='fall';
    modalBanner.style.animationDuration='1s';
    setTimeout(() =>{modalBanner.style.display="none";}, 1000);
}
bannerCloseCross.onclick = fall;
bannerUploadButton.onclick = fall;
bannerCloseButton.onclick = fall;
window.onclick = function (event) {
    if (event.target == modalBanner) {
        fall()
    }
}
function prev() {
    console.log(bannerInput.files[0]);
    bannerPreview.src = URL.createObjectURL(bannerInput.files[0]);
}

bannerInput.addEventListener("change", prev);
