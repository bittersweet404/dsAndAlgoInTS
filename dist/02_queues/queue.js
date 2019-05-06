"use strict";
exports.__esModule = true;
var Queue = (function () {
    function Queue() {
        this.dataBag = [];
    }
    Queue.prototype.enqueue = function (value) {
        this.dataBag.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.dataBag.shift();
    };
    Queue.prototype.rear = function () {
        return this.dataBag[this.dataBag.length - 1];
    };
    Queue.prototype.front = function () {
        return this.dataBag[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.dataBag.length === 0;
    };
    Queue.prototype.clear = function () {
        this.dataBag = [];
    };
    Queue.prototype.toString = function () {
        return this.dataBag.toString();
    };
    return Queue;
}());
exports["default"] = Queue;
//# sourceMappingURL=queue.js.map