var modalContact = document.getElementById("myModalContact");
var modalContactContent = document.querySelectorAll('.modal-contact-content');
var contactPref = document.getElementById("contact-pref");

contactPref.onclick = function () {
   modalContact.style.display="flex"; 
   modalContact.style.animation='rise';
   modalContact.style.animationDuration='1s';
}

var contactUploadButton = document.querySelectorAll("#upload.contact");
var contactCloseCross= document.querySelectorAll("#close.contact");
var contactCloseButton= document.querySelectorAll("#cancel.contact");
var contactGlobalCross = document.querySelector("#cn.modal");
var contactModals = document.querySelectorAll(".modal-contact-content")

function contactFall (){
    modalContact.style.animation='fall';
    modalContact.style.animationDuration='1s';
    setTimeout(() =>{modalContact.style.display="none";}, 1000);
}
function winClose(num){
    modalContactContent[num].style.display="none";
}
window.onclick = function (event) {
    if (event.target == modalContact) {
        contactFall()
    }
}
for (let modals = 0; modals < contactModals.length; modals++) {
    console.log(contactModals[modals]);
    contactCloseCross[modals].onclick = function() {winClose(modals);}
}
contactGlobalCross.onclick = contactFall;
    
