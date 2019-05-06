"use strict";
exports.__esModule = true;
var Stack = (function () {
    function Stack() {
        this.dataBag = [];
    }
    Stack.prototype.push = function (value) {
        this.dataBag.push(value);
    };
    Stack.prototype.pop = function () {
        return this.dataBag.pop();
    };
    Stack.prototype.peek = function () {
        return this.dataBag[this.dataBag.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return (this.dataBag.length === 0);
    };
    Stack.prototype.size = function () {
        return this.dataBag.length;
    };
    Stack.prototype.clear = function () {
        this.dataBag = [];
    };
    Stack.prototype.toString = function () {
        return this.dataBag.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
//# sourceMappingURL=stack.js.map