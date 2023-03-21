// array
var arr = ['ht', 22, 'kkkk ', 1, 2, 3];
var arr2 = [2, 1, 2, 3];
var arr4 = ['ht', 'kkkk '];
// Tupble
var tuple = ["Thang", "Xuan", 2003];
//Enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["ESER"] = 1] = "ESER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;
