var modalTable = document.getElementById("myModalTable");
var modalTableContent = document.querySelector('.modal-table-content');
var tablePref = document.getElementById("table-pref");

tablePref.onclick = function () {
   modalTable.style.display="block"; 

}

var tableUploadButton = document.querySelector("#upload.table");
var tableCloseCross= document.querySelector("#close.table");
var tableSize= document.querySelector("#tableType");
function tableFall (){
 modalTable.style.display='none';
}
tableCloseCross.onclick = tableFall;
tableUploadButton.onclick = tableFall;
window.onclick = function (event) {
    if (event.target == modalTable) {
        tableFall()
    }
}
