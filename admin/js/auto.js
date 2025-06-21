let login = "admin";
let password = "adminpass";
let alrt = document.getElementsByName("alert")[0];
document.querySelector("button").addEventListener("click", function(){
    let inslogin = document.getElementById("login").value;
    let inspass = document.getElementById("pass").value;
    if (login == inslogin && password == inspass) {
    window.location = '/museum/admin/index.html';
    }
    else{
        alrt.style.display = "unset";
    }
})
