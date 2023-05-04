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
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }

})