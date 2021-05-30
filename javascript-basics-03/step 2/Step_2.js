    var show = document.querySelector("#show");
    var hide = document.querySelector("#hide");

    show.addEventListener("click",showFun);
    hide.addEventListener("click",hideFun);

    function showFun(){
        var x = document.getElementById("texte");
        x.style.display = "block";
    }
    function hideFun(){
        var x = document.getElementById("texte");
        x.style.display = "none";
    }