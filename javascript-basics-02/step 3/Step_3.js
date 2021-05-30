document.getElementById("name").addEventListener("input", myInput);

function myInput() {
    var x = document.getElementById("name").value;
    document.getElementById("changedinput").innerHTML = "<p>You Wrote : " + x + "</p>";
}