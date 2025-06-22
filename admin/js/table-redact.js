var modalTableRedact = document.getElementById("myModalTableRedact");
var modalTableRedactContent = document.querySelectorAll('.modal-table-redact-content');
var tableRedactPref = document.getElementById("table-redact-pref");

tableRedactPref.onclick = function () {
   modalTableRedact.style.display="flex"; 
}

var tableRedactUploadButton = document.querySelector("#upload.table-redact");
var tableRedactCloseCross= document.querySelector("#close.table-redact");
var tableRedactCloseButton= document.querySelector("#cancel.table-redact");
var tableRedactModals = document.querySelector(".modal-table-redact-content")

function tableRedactFall (){
   modalTableRedact.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modalTableRedact) {
        tableRedactFall()
    }
}
tableRedactCloseCross.onclick = tableRedactFall;
tableRedactCloseButton.onclick = tableRedactFall;
    
