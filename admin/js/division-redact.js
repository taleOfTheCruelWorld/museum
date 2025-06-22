var modalDivision = document.getElementById("myModalDivision");
var modalDivisionContent = document.querySelector('.modal-division-content');
// var divisionPref = Array.from(document.getElementsByClassName("division"));
var divisionPref = document.querySelector("#division-pref")
divisionPref.onclick = function () {
    modalDivision.style.display= "block";
    modalDivision.style.animation = 'rise';
    modalDivision.style.animationDuration = '1s';
}
// divisionPref.forEach(div => {
    // div.onclick = function () {
        // modalDivision.style.display = "block";
        // modalDivision.style.animation = 'rise';
        // modalDivision.style.animationDuration = '1s';
    // }
// })


var divisionUploadButton = document.querySelector("#upload.division");
var divisionCloseCross = document.querySelector("#close.division");
var divisionInput = document.querySelector(".fdivisioninput");
divisionInput.value = "";
var divisionPreview = document.querySelector("#preview.division");

function divisionFall() {
    modalDivision.style.animation = 'fall';
    modalDivision.style.animationDuration = '1s';
    setTimeout(() => { modalDivision.style.display = "none"; }, 1000);
}
divisionCloseCross.onclick = divisionFall;
divisionUploadButton.onclick = divisionFall;
window.onclick = function (event) {
    if (event.target == modalDivision) {
        divisionFall()
    }
}
function divisionPrev() {
    console.log(divisionInput.files[0]);
    divisionPreview.src = URL.createObjectURL(divisionInput.files[0]);
}

divisionInput.addEventListener("change", divisionPrev);
