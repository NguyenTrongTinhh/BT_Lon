var dssp = JSON.parse(localStorage.getItem("dssp"));
var dsGioHang = JSON.parse(localStorage.getItem("dsmasp"));


function napGioHang() {

    dsGioHang.forEach(spGioHang => {
        dssp.forEach(sp => {
            if (spGioHang.masp == sp.masp) {
                let thanhTien = Number(sp.dongia) * Number(spGioHang.soLuong);;
                let row = "<tr class='bang' >"
                    + "<td>"
                    + " <input type='checkbox' class='chonSP' name='chonSP' value='" + spGioHang.masp + "'>"
                    + " </td>"
                    + "        <td>"
                    + "   <div class='image'><a href='../CH_ChiTiet/ch_ChiTiet.html' onclick='setMaSP(" + spGioHang.masp + ")'> <img alt='img'"
                    + "    src='" + sp.hinhanh + "'></a></div>"
                    + "    </td>"
                    + "    <td>"
                    + "      <div class='tenSP'>"
                    + "       <h4><a href='../CH_ChiTiet/ch_ChiTiet.html' onclick='setMaSP(" + spGioHang.masp + ")'>" + sp.tensp + "</a></h4>"
                    + "    </div>"
                    + "       <div class='price'><span>" + dinhDangTienVN(sp.dongia) + " VNĐ" + "</span></div>"
                    + "       </td>"
                    + "   <td class='product-quantity'>"
                    + "        <div class='form-group-soLuong'>"
                    + "        <input class='form-control' type='number' "
                    + "          min='0' max ='" + sp.soluong + "'value='" + spGioHang.soLuong + "' name='soLuongSP' >"
                    + "      </div>"
                    + "          </td>"
                    + "           <td class='price'  name='giaSP'>" + dinhDangTienVN(sp.dongia) + "</td>"
                    + "            <td class='delete' onclick='xoaSP(" + spGioHang.masp + ")'><a title='Delete' >"
                    + "                    <a href='#' class='btn btn-info '>"
                    + "                       <i class='fa-solid fa-trash-can'></i></span> Xóa"
                    + "                  </a>"
                    + "                </a>"
                    + "             </td>"
                    + "  <td id='thanhTienSP' name='thanhTienSP'>" + dinhDangTienVN(thanhTien) + "</td>"
                    + " </tr > "
                $("#tblGioHang").append(row);
            }
        })
    });
}
function setMaSP(maSP) {
    localStorage.setItem("masp", maSP);
}

