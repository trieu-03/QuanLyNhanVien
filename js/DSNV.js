function DanhSachNhanVien() {
    this.mangNV = [];

    this.addNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.findIndexNV = function (id) {

        var indexFind = -1;

        indexFind = this.mangNV.findIndex(function (nv) {
            return nv.taiKhoanNV == id;

        })

        return indexFind;
    }

    this.deletNV = function (id) {
        var index = this.findIndexNV(id);
        if (index != -1) {
            this.mangNV.splice(index, 1);
        }

    }

    this.updateNV = function (nv) {
        var index = this.findIndexNV(nv.taiKhoanNV);
        if (index != -1) {
            this.mangNV[index] = nv;
        }
    }

}


DanhSachNhanVien.prototype.searchName = function (keyword) {

    var mangKQ = [];
var keywordLowerCase = keyword.toLowerCase();

keywordLowerCase = keywordLowerCase.replace(/\s/g, "")

this.mangNV.map(function (nv) {
 var nameLowerCase = nv.xepLoai.toLowerCase().replace(/\s/g, "");    

 if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
    
    mangKQ.push(nv);
 }

});
return mangKQ;

}