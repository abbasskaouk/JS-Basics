var image = document.querySelector("#image1");
image.addEventListener("mouseover", resize);
image.addEventListener("mouseout", back);

function resize() {
    document.getElementById("image1").src= "images/image1_2.jpg";
}
function back() {
    document.getElementById("image1").src= "images/image1.jpg";
}