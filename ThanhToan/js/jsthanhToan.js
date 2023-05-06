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
