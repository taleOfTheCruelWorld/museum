var modalImage = document.getElementById("myModalImage");
var modalImageContent = document.querySelector('.modal-image-content');
var imagePref = document.getElementById("image-pref");

imagePref.onclick = function () {
   modalImage.style.display="block"; 
   modalImage.style.animation='rise';
   modalImage.style.animationDuration='1s';
}

var imageUploadButton = document.querySelector("#upload.image");
var imageCloseCross= document.querySelector("#close.image");
var imageCloseButton= document.querySelector("#cancel.image");
var imageInput = document.querySelector("#image-redact-file-upload");
var imageSize= document.querySelector("#imageSize");
imageInput.value = "";
var imagePreview = document.querySelector("#preview.image");
imagePreview.style.width= "80%"; 
function fall (){
    modalImage.style.animation='fall';
    modalImage.style.animationDuration='1s';
    setTimeout(() =>{modalImage.style.display="none";}, 1000);
}
imageCloseCross.onclick = fall;
imageUploadButton.onclick = fall;
imageCloseButton.onclick = fall;
window.onclick = function (event) {
    if (event.target == modalImage) {
        fall()
    }
}
function imagePrev() {
    console.log(imageInput.files[0]);
    imagePreview.src = URL.createObjectURL(imageInput.files[0]);
}
function changeSize() {
    console.log(imageSize.value);
    switch (imageSize.value) {
        case "1/1":
           imagePreview.style.width="80%"; 
            break;

        case "1/2":
           imagePreview.style.width="40%"; 
            break;
        case "1/4":
           imagePreview.style.width="20%"; 
            break;
        default:
            break;
    }
    
}
imageInput.addEventListener("change", imagePrev);
imageSize.addEventListener("change", changeSize);
