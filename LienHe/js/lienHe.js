$(document).ready(function () {
    function lienHe() {
        let hovaten = document.getElementById("hovaten").value;
        if (hovaten == "") {
            document.getElementById("error1").innerHTML = "Họ và tên không được để trống.";
            document.getElementById("hovaten").focus();
            return false;
        }
        document.getElementById("error1").innerHTML = "";


        let sodienthoai = document.getElementById("sodienthoai").value;
        if (sodienthoai == "") {
            document.getElementById("error2").innerHTML = "Số điện thoại không được để trống.";
            document.getElementById("sodienthoai").focus();
            return false;
        }
        document.getElementById("error2").innerHTML = "";


        let loinhan = document.getElementById("loinhan").value;
        if (loinhan == "") {
            document.getElementById("error3").innerHTML = "Lời nhắn không được để trống."
            document.getElementById("loinhan").focus();
            return false;
        }
        document.getElementById("error3").innerHTML = "";
        return true;
    }

    $("#buttonGui").click(function () {
        if (!lienHe()) {
            return false;
        }
        let hovaten = document.getElementById("hovaten").value;
        let email = document.getElementById("diachiemail").value;
        let sodienthoai = document.getElementById("sodienthoai").value;
        let loinhan = document.getElementById("loinhan").value;
        let a = { hoTen: hovaten, diaChiMail: email, sdt: sodienthoai, loiwNhan: loinhan }
        let dsln = [a];
        localStorage.setItem("LoiNhan", JSON.stringify(dsln))
        alert("Đăng kí thành công");
        return true;
    })

    let kiemTraDN = JSON.parse(localStorage.getItem("flag"));
    if (kiemTraDN) {
        document.querySelector("#khongDN").style.display = "none";
        document.querySelector("#sauDN").style.display = "block";
    }
    $("#dangxuat").click(function () {
        document.querySelector("#khongDN").style.display = "block";
        document.querySelector("#sauDN").style.display = "none";
        localStorage.setItem("flag", false)
    })
});


const lienhe_left = document.querySelector(".lienHe-left")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 20) {
        lienhe_left.classList.add("lienHe-sticky")
    }
})
const lienhe_right = document.querySelector(".lienHe-right")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 20) {
        lienhe_right.classList.add("lienHe-sticky")
    }

})
