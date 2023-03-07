
const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function hienThiTable(mang) {

    var content = "";
    mang.map(function (nv,index) {
        var trELE = `<tr>
            <td>${nv.taiKhoanNV}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button onclick="deletNhanVien('${nv.taiKhoanNV}')" class = "btn btn-danger">Xóa</button>
                <button onclick="xemChiTiet('${nv.taiKhoanNV}')" class = "btn btn-info">Xem</button>
            </td>
        </tr>`

        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}



function setLocalStorage(mang) {

    localStorage.setItem("DSNV", JSON.stringify(mang))
}

function getLocalStorage() {

    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}

getLocalStorage();


function getELE(id) {
    return document.getElementById(id)
}


getELE('btnThemNV').onclick = function () {
    var taiKhoanNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;


    //TODOO: Validation

    var isValid = true;

    //! taikhoanNV
    isValid &= validation.checkEmpty(taiKhoanNV,"tbTKNV", " Tài khoản nhân viên không được để trống!") 
    && validation.checkID(taiKhoanNV,"tbTKNV", " Tài khoản không được trùng", dsnv.mangNV)
    && validation.checkAccount(taiKhoanNV,"tbTKNV", " Tài khoản từ 4 - 6 ký số");


    //! tenNV 
    isValid &= validation.checkEmpty(tenNV,"tbTen", " Tên nhân viên không được để trống!") 
    && validation.checkName(tenNV,"tbTen", "Tên nhân viên chưa đúng định dạng");

    //! email 
    isValid &= validation.checkEmpty(email,"tbEmail", " email không được để trống!") 
    && validation.checkEmail(email,"tbEmail", "email chưa đúng định dạng");

     //! Matkhau 
     isValid &= validation.checkEmpty(pass,"tbMatKhau", " Mật khẩu không được để trống!") 
     && validation.checkPass(pass,"tbMatKhau", "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");
     
    //! Ngày làm
    isValid &= validation.checkEmpty(ngayLam,"tbNgay", " Ngày làm không được để trống!") 

    //! Lương
    isValid &= validation.checkEmpty(luongCB,"tbLuongCB", " Tiền lương không được để trống!") 
    && validation.checkSalary(luongCB,"tbLuongCB", "Lương cơ bản 1 000 000 - 20 000 000");

    //! Chức vụ
    isValid &= validation.checkSelect("chucvu","tbChucVu", " Chức vụ chưa hợp lê") ;
   
    //! Giờ làm
    isValid &= validation.checkEmpty(gioLam,"tbGiolam", " Giờ làm không được để trống!") 
    && validation.checkTimeWork(gioLam,"tbGiolam", "Số giờ làm từ 80 - 200 giờ");




    if (isValid) {

        var nv = new NhanVien (taiKhoanNV, tenNV, email, pass, ngayLam, Number(luongCB), chucVu, Number(gioLam));
        nv.tinhTongLuong();
        nv.loaiNhanVien();
    
    
        dsnv.addNV(nv);
        hienThiTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }

    
}



//! Xóa

function deletNhanVien(id) {

    dsnv.deletNV(id);
    setLocalStorage(dsnv.mangNV);
    getLocalStorage(dsnv.mangNV);
}


//! Hiển thị chi tiết

function xemChiTiet(id) {
  
    var index = dsnv.findIndexNV(id);
    if (index != -1) {
       
        getELE("tknv").value = dsnv.mangNV[index].taiKhoanNV;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[index].tenNV;
        getELE("email").value = dsnv.mangNV[index].email;
        getELE("password").value = dsnv.mangNV[index].pass;
        getELE("datepicker").value = dsnv.mangNV[index].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[index].luongCB;
        getELE("chucvu").value = dsnv.mangNV[index].chucVu;
        getELE("gioLam").value = dsnv.mangNV[index].gioLam;
      
    }
}

//! cập nhật


function updateNhanVien() {
    
    var taiKhoanNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var nv = new NhanVien(taiKhoanNV, tenNV, email, pass, ngayLam, Number(luongCB), chucVu, Number(gioLam));

    nv.tinhTongLuong();
    nv.loaiNhanVien();

    dsnv.updateNV(nv);

    setLocalStorage(dsnv.mangNV);
    getLocalStorage();
   
}

//! tìm kiếm


function search() {
    var keyword = getELE("searchName").value;
    var mangKQ = dsnv.searchName(keyword);

    hienThiTable(mangKQ);
}

getELE("btnTimNV").onclick = search;

// gõ text ỏ input và hiển thị liền kq
getELE("searchName").onkeyup = function () {
    var keyword = getELE("searchName").value;
    var mangKQ = dsnv.searchName(keyword);

    hienThiTable(mangKQ);
}






