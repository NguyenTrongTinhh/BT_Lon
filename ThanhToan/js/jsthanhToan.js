var dataThanhToan = JSON.parse(localStorage.getItem("dataThanhToan"));
var dssp = JSON.parse(localStorage.getItem("dssp"));
var dsGioHang = JSON.parse(localStorage.getItem("dsmasp"));

window.onload = function () {
    document.getElementById("tongTienHang").innerHTML = dinhDangTienVN(Number(dataThanhToan.tongTienSP));
    document.getElementById("phiBaoHiem").innerHTML = dinhDangTienVN(Number(dataThanhToan.phiBaoHiem));
    document.getElementById("phiGiamGia").innerHTML = dinhDangTienVN(Number(dataThanhToan.giamGia / 100 * dataThanhToan.tongTienSP));

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
}
function kiemTraDC_HoTen() {
    var hoTen = document.getElementById("txt-Ho-Ten").value;
    if (hoTen.trim().length == 0) {
        document.getElementById("errorTen").innerHTML = "Bạn chưa nhập tên !"
        document.getElementById("txt-Ho-Ten").focus();
        return false;
    } else
        if (!/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/.test(hoTen)) {
            document.getElementById("errorTen").innerHTML = "Họ tên có ít nhất 2 chữ. Bắt đầu bằng chữ IN HOA"
            document.getElementById("txt-Ho-Ten").focus();
            return false;
        } else {
            document.getElementById("errorTen").innerHTML = "Hợp lệ";
            return true;
        }
}

function kiemTraDC_SoDT() {
    var soDT = document.getElementById("txt-So-DT").value;
    if (soDT.trim().length == 0) {
        document.getElementById("error-So-DT").innerHTML = "Bạn chưa nhập số điện thoại !"
        document.getElementById("txt-So-DT").focus();
        return false;
    } else
        if (!/^(0[345789][0-9]{8}|1[89]00[0-9]{4})$$/.test(soDT)) {
            document.getElementById("error-So-DT").innerHTML = "Số điện thoại sai định dạng.vd:0388654153"
            document.getElementById("txt-So-DT").focus();
            return false;
        } else {
            document.getElementById("error-So-DT").innerHTML = "Hợp lệ";
            return true;
        }
}

