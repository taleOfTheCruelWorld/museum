var modalDivision = document.getElementById("myModalDivision");
var modalDivisionContent = document.querySelector('.modal-division-content');
var divisionPref = Array.from(document.getElementsByClassName("division"));

divisionPref.forEach(div => {
    div.onclick = function () {
        modalDivision.style.display = "block";
    }
})


var divisionUploadButton = document.querySelector("#upload.division");
var divisionCloseCross = document.querySelector("#close.division");
var divisionInput = document.querySelector("#file-upload-division");
divisionInput.value = "";
var divisionPreview = document.querySelector(".preview.division");

function fall() {
    modalDivision.style.display = 'none';
}
divisionCloseCross.onclick = fall;
divisionUploadButton.onclick = fall;
window.onclick = function (event) {
    if (event.target == modalDivision) {
        fall()
    }
}
function prev() {
    divisionPreview.src = URL.createObjectURL(divisionInput.files[0]);
}

divisionInput.addEventListener("change", prev);
