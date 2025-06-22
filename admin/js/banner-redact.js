var modalBanner = document.getElementById("myModalBanner");
var modalBannerContent = document.querySelector('.modal-banner-content');
var bannerPref = document.getElementById("banner-pref");

bannerPref.onclick = function () {
   modalBanner.style.display="block"; 
   modalBanner.style.animation='rise';
   modalBanner.style.animationDuration='1s';
}

var bannerUploadButton = document.querySelector("#upload.banner");
var bannerCloseCross= document.querySelector("#close.banner");
var bannerCloseButton= document.querySelector("#cancel.banner");
var bannerInput = document.querySelector(".fbannerinput");
bannerInput.value = "";
var bannerPreview = document.querySelector("#preview.banner");

function bannerFall (){
    modalBanner.style.animation='fall';
    modalBanner.style.animationDuration='1s';
    setTimeout(() =>{modalBanner.style.display="none";}, 1000);
}
bannerCloseCross.onclick = bannerFall;
bannerUploadButton.onclick = bannerFall;
bannerCloseButton.onclick = bannerFall;
window.onclick = function (event) {
    if (event.target == modalBanner) {
        bannerFall()
    }
}
function prev() {
    console.log(bannerInput.files[0]);
    bannerPreview.src = URL.createObjectURL(bannerInput.files[0]);
}

bannerInput.addEventListener("change", prev);
