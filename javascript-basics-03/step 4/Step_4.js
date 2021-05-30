function checkPass() {
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("confirmation").value;
    if ( pass1 != pass2 ){
        document.getElementById("password").style.border = "solid 2px red";
        document.getElementById("confirmation").style.border = "solid 2px red";
    }
    else {
        alert("Password Match! \n" + pass1 + "\n" + pass2);
    }
}