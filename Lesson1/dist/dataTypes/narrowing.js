//Union type
//type of
function printInfo(info) {
    if (typeof info == "string") {
        return info.charAt(0).toLocaleUpperCase() + info.slice(1);
    }
    return info;
}
console.log(printInfo("thắng dz"));
// instance
var date = new Date();
function checkDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
}
//Optional
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
console.log(check());
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
