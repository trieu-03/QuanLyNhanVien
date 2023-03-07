function Validation() {
   
    this.checkEmpty = function (valueInput, tbID, message) {
        if (valueInput == "") {
            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }

        document.getElementById(tbID).style.display = "none";
        document.getElementById(tbID).innerHTML = "";
        return true;
    }

    this.checkID = function (valueInput, tbID, message, array ) {
        var isExist = false;
        isExist = array.some(function(nv) {
            return valueInput === nv.taiKhoanNV;
        }) 

        if(isExist) {
            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        } else {
            document.getElementById(tbID).style.display = "none";
            document.getElementById(tbID).innerHTML = "";
            return true;
        }
    }

    this.checkAccount = function (valueInput, tbID, message) {
        var pattern = /^[a-zA-Z0-9]{4,6}$/;

        if (valueInput.match(pattern)) {
            document.getElementById(tbID).style.display = "none";
            document.getElementById(tbID).innerHTML = "";
            return true;
        }
        document.getElementById(tbID).style.display = "block";
        document.getElementById(tbID).innerHTML = message;
        return false;

    }

    this.checkName = function (valueInput, tbID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if (valueInput.match(pattern)) {

            document.getElementById(tbID).style.display = "none";
            document.getElementById(tbID).innerHTML = "";
            return true;
        } else {

            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }

    }

    this.checkEmail = function (valueInput, tbID, message) {
        var patternString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valueInput.match(patternString)) {

            document.getElementById(tbID).style.display = "none";
            document.getElementById(tbID).innerHTML = "";
            return true;
        } else {

            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }

    }

    this.checkPass = function (valueInput, tbID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/

        if (valueInput.match(pattern)) {
          
            document.getElementById(tbID).style.display = "none";
            document.getElementById(tbID).innerHTML = "";
            return true;
        } else {
          
            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }
    }

    this.checkSalary = function (valueInput, tbID, message) {
        var pattern = /^[0-9]+$/

        if (valueInput.match(pattern) && valueInput >= 1e+6 && valueInput <= 20e+6 ) {
          
             document.getElementById(tbID).style.display = "none";
             document.getElementById(tbID).innerHTML = "";
             return true;
        }else{
        
            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }
    }

    this.checkSelect = function (valueInput,tbID,message) {
        var indexOption = document.getElementById(valueInput).selectedIndex;
        if (indexOption > 0) {
            document.getElementById(tbID).style.display = 'none';
            document.getElementById(tbID).innerHTML = '';
            return true    
        }
        document.getElementById(tbID).style.display = 'block';
        document.getElementById(tbID).innerHTML = message;
        return false
    }

    this.checkTimeWork = function (valueInput, tbID, message) {
        var pattern = /^[0-9]+$/

        if (valueInput.match(pattern) && valueInput >= 80 && valueInput <= 200 ) {
          
             document.getElementById(tbID).style.display = "none";
             document.getElementById(tbID).innerHTML = "";
             return true;
        }else{
        
            document.getElementById(tbID).style.display = "block";
            document.getElementById(tbID).innerHTML = message;
            return false;
        }
    }



}