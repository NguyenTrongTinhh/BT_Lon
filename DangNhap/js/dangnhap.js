$(document).ready(function(){
    let accounts = JSON.parse(localStorage.getItem("TaiKhoan"))
    function dangNhap(){
        let sdt = document.getElementById("sodienthoai").value
        if(sdt == ""){
            document.getElementById("error").innerHTML = "Số điện thoại không được để trống!";
            document.getElementById("sodienthoai").focus()
            return false;
        }
        document.getElementById("error").innerHTML =  "";
        let matkhau = document.getElementById("matkhau").value
        if(matkhau == ""){
            document.getElementById("error").innerHTML = "Mật khẩu không được để trống!";
            document.getElementById("matkhau").focus();
            return false;
        }
        document.getElementById("error").innerHTML =  "";
        return true;
    }

    $("#buttondangnhap").click(function(){
        let flag;
        if(!dangNhap()){
            return false;
        }
        let sdt = $("#sodienthoai").val()
        let matkhau = $("#matkhau").val()
        let user = accounts.find(x => x.sdt == sdt)
        if(user != null && user.matKhau == matkhau){
            alert("Đăng nhập thành công")
            flag = true;
            window.open("../TrangChu/trangChu.html","_self").focus();
        } else{
            alert("Sai số điện thoại hoặc mật khẩu")
            document.getElementById("sodienthoai").focus();
            flag = false;
        }
        localStorage.setItem("flag",flag);
        
        return true;
    })
});