function NhanVien(taiKhoanNV,tenNV,email,pass,ngayLam,luongCB,chucVu,gioLam,loaiNV) {
    this.taiKhoanNV = taiKhoanNV;
    this.tenNV = tenNV;
    this.email = email; 
    this.pass = pass;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu; 
    this.gioLam = gioLam;
    this.loaiNV = loaiNV;
    this.tongLuong = 0;
    this.xepLoai = '';

    this.tinhTongLuong = function () {
        if (this.chucVu == 'Sếp') {
            this.tongLuong = luongCB * 3;
        } else if (this.chucVu == 'Trưởng phòng') {
            this.tongLuong = luongCB * 2;
        } else if (this.chucVu == 'Nhân viên') {
            this.tongLuong = luongCB;
        }
    }
        
    this.loaiNhanVien = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = 'Xuất sắc'
        } else if (this.gioLam >= 176) {
            this.xepLoai = 'Giỏi'
        } else if (this.gioLam >= 160) {
            this.xepLoai = 'Khá'
        } else {
            this.xepLoai = 'Trung Bình'
        }
    }
    
}

