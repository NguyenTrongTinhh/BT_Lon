$(document).ready(function(){
    function check(){
        var sodienthoai = document.getElementById("sodienthoai").value;
        if(!(/^[0][1-9][0-9]{8}$/.test(sodienthoai)) || sodienthoai == ""){
            document.getElementById("error").innerHTML = "Số điện thoại phải bắt đầu bằng số 0có 10 số và không được để trống!";
            document.getElementById("sodienthoai").focus();
            return false;
        }
        document.getElementById("error").innerHTML = "";
    
        var hovaten = document.getElementById("hovaten").value;
        if(!(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/).test(hovaten) || hovaten == ""){
            document.getElementById("error").innerHTML = "Họ và tên phải bắt đầu bằng chữ hoa và không có kí tự đặc biệt!";
            document.getElementById("hovaten").focus();
            return false;
        }
        document.getElementById("error").innerHTML = "";
    
        var matkhau = document.getElementById("matkhau").value;
        if(!(/^([A-Za-z0-9]+){4,}[A-Z][a-z]$/).test(matkhau) || matkhau == ""){
            document.getElementById("error").innerHTML = "Mật khẩu phải ít nhất 6 kí tự và kết thúc bằng 1 chữ in và 1 chữ thường!";
            document.getElementById("matkhau").focus();
            return false;
        }
        document.getElementById("error").innerHTML = "";
    
        var xacnhanmatkhau = document.getElementById("xacnhanmatkhau").value;
        if( xacnhanmatkhau != matkhau || xacnhanmatkhau == ""){
            document.getElementById("error").innerHTML = "Xác nhận mật khẩu sai!";
            document.getElementById("xacnhanmatkhau").focus();
            return false;
        }
        document.getElementById("error").innerHTML = "";
        return true;
    }
    $("#buttondangki").click(function(){
        if(!check()){
            return false;
        }
        let dsTK = JSON.parse(localStorage.getItem("TaiKhoan"));
        let soDT = document.getElementById("sodienthoai").value
        let hoVaTen = document.getElementById("hovaten").value
        let mK = document.getElementById("matkhau").value
        let xnMatKhau = document.getElementById("matkhau").value

        let acc = dsTK.find(x => x.sdt == soDT)
        if(acc != null){
            alert("Số điện thoại đã tồn tại.");
            return false;
        }
        
        alert("Đăng kí thành công")

        let a = 

            {
                sdt: soDT,
                hoTen: hoVaTen,
                matKhau: mK,
                xacNhanMatKhau: xnMatKhau
            }
        dsTK.push(a)
        localStorage.setItem("TaiKhoan",JSON.stringify(dsTK))
        return true;
    })
});