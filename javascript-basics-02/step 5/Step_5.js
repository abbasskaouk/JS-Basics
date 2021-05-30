    var image1 = document.querySelector("#image1");
    var image2 = document.querySelector("#image2");
    var image3 = document.querySelector("#image3");
    var image4 = document.querySelector("#image4");
    var image5 = document.querySelector("#image5");


    image1.addEventListener("mouseover", resize);
    image2.addEventListener("mouseover", resize);
    image3.addEventListener("mouseover", resize);
    image4.addEventListener("mouseover", resize);
    image5.addEventListener("mouseover", resize);

    function resize() {
        document.getElementById("image1").src= "images/image1_2.jpg";
        document.getElementById("image2").src= "images/image2_2.jpg";
        document.getElementById("image3").src= "images/image3_2.jpg";
        document.getElementById("image4").src= "images/image4_2.jpg";
        document.getElementById("image5").src= "images/image5_2.jpg";
    }