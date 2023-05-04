window.onload = function () {
    let kiemTraDN = JSON.parse(localStorage.getItem("flag"));
    if (kiemTraDN) {
        document.querySelector("#khongDN").style.display = "none";
        document.querySelector("#sauDN").style.display = "block";
    }
    $("#dangxuat").click(function(){
        document.querySelector("#khongDN").style.display = "block";
        document.querySelector("#sauDN").style.display = "none";
        localStorage.setItem("flag",false)
    })
}