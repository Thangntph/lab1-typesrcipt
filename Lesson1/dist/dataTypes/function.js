// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. Function return
var num3;
// function divide(): number {
//     return;
// }
// const showName = function(): string {
//     return;
// }
var func4 = function () {
    console.log("4");
};
var showError = function () {
    var err = new Error("Something went wrong!");
    throw err;
};
// 3. Function parameter
function divide(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log(divide(10));
function showName(a, b) {
    console.log(a, b);
    return;
}
showName("Nguyễn Tiến", "Thắng");
// 4. Rest parameter
function printClass(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("Sinh viên " + name, "Học lớp " + classes);
    return "";
}
printClass("Hưng", "Typescript", "Nodejs", " Phap Luat");
//
function printClasss(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", "));
}
console.log(printClasss("Hưng", "Typescript", "Nodejs", "Phap Luat"));
// 5. Callback
var numArr = [1, 2, 3, 5, 8, 13]; // Fibonacci
// const result = numArr.map((item) => {
//     return item * item
// })
// console.log(result);
var we17307_map = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
};
var result = we17307_map(numArr, function (item) {
    return item * item;
});
console.log(result);
