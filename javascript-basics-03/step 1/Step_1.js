var image = document.querySelector("#image1");
image.addEventListener("mouseover", resize);
image.addEventListener("mouseout", back);

function resize() {
    image.style.border = "solid red 3px";
}
function back() {
    image.style.border = "0px";
}