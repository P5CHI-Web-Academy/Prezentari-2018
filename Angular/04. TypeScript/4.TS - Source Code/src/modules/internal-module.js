"use strict";
exports.__esModule = true;
var InternalModule;
(function (InternalModule) {
    function substract() {
    }
    InternalModule.substract = substract;
    function add() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (acc, cur) { return acc + cur; }, 0);
    }
    InternalModule.add = add;
})(InternalModule || (InternalModule = {}));
console.log(InternalModule);
function add(firstNum, secondNum) {
    return InternalModule.add(firstNum, secondNum);
}
exports.add = add;
exports.test = 20;
