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

function kiemTraDC_DCCT() {
    var diaChi = document.getElementById("txt-Dia-Chi-CT").value;
    if (diaChi.trim().length == 0) {
        document.getElementById("error-Dia-Chi-CT").innerHTML = "Bạn cần nhập địa chỉ cụ thể !"
        document.getElementById("txt-Dia-Chi-CT").focus();
        return false;
    } else {
        document.getElementById("error-Dia-Chi-CT").innerHTML = "*";
        return true;
    }
}

function kiemTraDC_ThanhPho() {
    var thanhPho = document.getElementById("select-Thanh-Pho").value;
    if (!(thanhPho == "macDinh")) {
        document.getElementById("error-Thanh-Pho").innerHTML = "Hợp lệ";
        return true;
    } else {
        document.getElementById("error-Thanh-Pho").innerHTML = "Bạn cần chọn thành phố !";
        return false;
    }

}
function kiemTra_submid_DC() {
    if (kiemTraDC_HoTen() && kiemTraDC_SoDT() && kiemTraDC_DCCT() && kiemTraDC_ThanhPho()) {
        return true;
    } else
        alert("Muốn tiếp tục? Hãy nhập đủ thông tin điiiii.");
}

// ==================================================================================
function kiemTra_submid_PTVVC() {
    if (document.getElementById("giaoNhanh").checked) {
        document.getElementById("error-PT-GH").innerHTML = " Bạn đã chọn phương thức giao hàng nhanh";
        document.getElementById("phiVanChuyen").innerHTML = "25,000₫";
        return true;
    }
    else if (document.getElementById("giaoHoaToc").checked) {
        document.getElementById("error-PT-GH").innerHTML = " Bạn đã chọn phương thức giao hàng hỏa tốc";
        document.getElementById("phiVanChuyen").innerHTML = "35,000₫";

        return true;
    } else {
        alert("Bạn chưa chọn phương thức giao hàng");
        return false;
    }

}
// ==================================================================================

function kiemTra_submid_PTTT() {
    if (document.getElementById("thanhToan-nhanHang").checked) {
        document.getElementById("error-PT-TT").innerHTML = " Bạn đã chọn phương thức thanh toán khi nhận hàng";
    }
    else if (document.getElementById("thanhToan-Momo").checked) {
        document.getElementById("error-PT-TT").innerHTML = " Bạn đã chọn phương thức thanh toán momo";
    }
    else if (document.getElementById("thanhToan-Zalo").checked) {
        document.getElementById("error-PT-TT").innerHTML = " Bạn đã chọn phương thức thanh toán zalo-pay";
    }
    else if (document.getElementById("thanhToan-NH").checked) {
        document.getElementById("error-PT-TT").innerHTML = " Bạn đã chọn phương thức thanh toán bằng thẻ ngân hàng";
    }
    else if (document.getElementById("thanhToan-GN").checked) {
        document.getElementById("error-PT-TT").innerHTML = " Bạn đã chọn phương thức thanh toán bằng thẻ tín dụng";
    }
    else {
        alert("Bạn chưa chọn phương thức thanh toán");
    }

    if (!document.getElementById("dieuKhoan-TT").checked) {
        alert("Để tiếp tục, bạn cần đồng ý với Điều khoản & Điều kiện !");
    }
}
// ==================================================================================

function tinhTien_TT() {

    let tongTienHang = document.getElementById("tongTienHang").innerText.replace(/[^0-9]/g, '');
    let phiVanChuyen = document.getElementById("phiVanChuyen").innerText.replace(/[^0-9]/g, '');
    let phiBaoHiem = document.getElementById("phiBaoHiem").innerText.replace(/[^0-9]/g, '');
    let phiGiamGia = document.getElementById("phiGiamGia").innerText.replace(/[^0-9]/g, '');

    let thanhToan = Number(tongTienHang) + Number(phiVanChuyen) + Number(phiBaoHiem) - Number(phiGiamGia);
    document.getElementById("tongThanhToan").innerHTML = thanhToan.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
}
function dinhDangTienVN(n) {
    return "" + n.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}
