var modalLiterature = document.getElementById("myModalLiterature");
var modalLiteratureContent = document.querySelectorAll('.modal-literature-content');
var literaturePref = document.getElementById("literature-pref");

literaturePref.onclick = function () {
   modalLiterature.style.display="flex"; 
   modalLiterature.style.animation='rise';
   modalLiterature.style.animationDuration='1s';
}

var literatureUploadButton = document.querySelectorAll("#upload.literature");
var literatureCloseCross= document.querySelectorAll("#close.literature");
var literatureCloseButton= document.querySelectorAll("#cancel.literature");
var literatureGlobalCross = document.querySelector("#cn.modal-lit");
var literatureModals = document.querySelectorAll(".modal-literature-content")

function literatureFall (){
    modalLiterature.style.animation='fall';
    modalLiterature.style.animationDuration='1s';
    setTimeout(() =>{modalLiterature.style.display="none";}, 1000);
}
function winClose(num){
    modalLiteratureContent[num].style.display="none";
}
window.onclick = function (event) {
    if (event.target == modalLiterature) {
        literatureFall()
    }
}
for (let modals = 0; modals < literatureModals.length; modals++) {
    console.log(literatureModals[modals]);
    literatureCloseCross[modals].onclick = function() {winClose(modals);}
}
literatureGlobalCross.onclick = literatureFall;
    
