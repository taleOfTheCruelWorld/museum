var modalBanner = document.getElementById("myModalBanner");
var modalBannerContent = document.querySelector('.modal-banner-content');
var bannerPref = document.getElementById("chronics-bunner");

bannerPref.onclick = function () {
   modalBanner.style.display="block"; 
}

var bannerUploadButton = document.querySelector("#upload.banner");
var bannerCloseCross= document.querySelector("#close.banner");
var bannerCloseButton= document.querySelector("#cancel.banner");
var bannerInput = document.querySelector("#file-upload-banner");
bannerInput.value = "";
var bannerPreview = document.querySelector("#preview.banner");

function fall (){
    modalBanner.style.display = 'none';
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
    bannerPreview.src = URL.createObjectURL(bannerInput.files[0]);
}

bannerInput.addEventListener("change", prev);
