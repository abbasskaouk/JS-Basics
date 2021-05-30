function myFunction() {
    var r = confirm("Yes or NO");
    if (r == true) {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("city").value = "";
        //document.getElementById("myform").reset();  adding this makes the upper part not working
    }
}