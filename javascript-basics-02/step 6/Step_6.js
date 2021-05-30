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

        image1.addEventListener("mouseout", back);
        image2.addEventListener("mouseout", back);
        image3.addEventListener("mouseout", back);
        image4.addEventListener("mouseout", back);
        image5.addEventListener("mouseout", back);

        function resize() {
          document.getElementById("image1").src= "images/image1_2.jpg";
          document.getElementById("image2").src= "images/image2_2.jpg";
          document.getElementById("image3").src= "images/image3_2.jpg";
          document.getElementById("image4").src= "images/image4_2.jpg";
          document.getElementById("image5").src= "images/image5_2.jpg";
        }

        function back() {
          document.getElementById("image1").src= "images/image1.jpg";
          document.getElementById("image2").src= "images/image2.jpg";
          document.getElementById("image3").src= "images/image3.jpg";
          document.getElementById("image4").src= "images/image4.jpg";
          document.getElementById("image5").src= "images/image5.jpg";
        }