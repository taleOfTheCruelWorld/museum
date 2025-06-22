var modalTableRedact = document.getElementById("myModalTableRedact");
var modalTableRedactContent = document.querySelectorAll('.modal-table-redact-content');
var tableRedactPref = document.getElementById("table-redact-pref");

tableRedactPref.onclick = function () {
   modalTableRedact.style.display="flex"; 
   modalTableRedact.style.animation='rise';
   modalTableRedact.style.animationDuration='1s';
}

var tableRedactUploadButton = document.querySelector("#upload.table-redact");
var tableRedactCloseCross= document.querySelector("#close.table-redact");
var tableRedactCloseButton= document.querySelector("#cancel.table-redact");
var tableRedactModals = document.querySelector(".modal-table-redact-content")

function tableRedactFall (){
    modalTableRedact.style.animation='fall';
    modalTableRedact.style.animationDuration='1s';
    setTimeout(() =>{modalTableRedact.style.display="none";}, 1000);
}
window.onclick = function (event) {
    if (event.target == modalTableRedact) {
        tableRedactFall()
    }
}
tableRedactCloseCross.onclick = tableRedactFall;
tableRedactCloseButton.onclick = tableRedactFall;
    
