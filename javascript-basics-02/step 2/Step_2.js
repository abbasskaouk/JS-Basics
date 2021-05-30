var inp = document.querySelector("#name");
inp.addEventListener("focusout",focusOut);

function focusOut(){
    alert("thank you for participating!");
}