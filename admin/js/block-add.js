var modalBlock = document.getElementById("myModalBlock");
var modalBlockContent = document.querySelector('.modal-block-content');
var blockPref = document.getElementById("block-pref");

blockPref.onclick = function () {
   modalBlock.style.display="block"; 
   modalBlock.style.animation='rise';
   modalBlock.style.animationDuration='1s';
}

var blockUploadButton = document.querySelector("#upload.block");
var blockCloseCross= document.querySelector("#close.block");
var blockSize= document.querySelector("#blockType");
function blockFall (){
    modalBlock.style.animation='fall';
    modalBlock.style.animationDuration='1s';
    setTimeout(() =>{modalBlock.style.display="none";}, 1000);
}
blockCloseCross.onclick = blockFall;
blockUploadButton.onclick = blockFall;
window.onclick = function (event) {
    if (event.target == modalBlock) {
        blockFall()
    }
}
