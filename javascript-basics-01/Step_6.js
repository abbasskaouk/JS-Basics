function remainder(){
    var fisrtnumber = document.getElementById("first_number").value;
    var secondnumber = document.getElementById("second_number").value;

    var answer = fisrtnumber % secondnumber ;

    alert("Remainder is : " + answer);
}