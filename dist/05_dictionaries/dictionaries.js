"use strict";
exports.__esModule = true;
var Dictionary = (function () {
    function Dictionary() {
        this.items = {};
        this.length = 0;
    }
    Dictionary.prototype.has = function (key) {
        return (key in this.items);
    };
    Dictionary.prototype.set = function (key, data) {
        if (!this.has(key)) {
            this.items[key] = data;
            this.length++;
        }
    };
    Dictionary.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            this.length--;
            return true;
        }
        return false;
    };
    Dictionary.prototype.get = function (key) {
        return (this.has(key)) ? this.items[key] : undefined;
    };
    Dictionary.prototype.clear = function () {
        this.items = {};
    };
    Dictionary.prototype.size = function () {
        return this.length;
    };
    Dictionary.prototype.keys = function () {
        var output = [];
        for (var key in this.items) {
            output.push(key);
        }
        return output;
    };
    Dictionary.prototype.values = function () {
        var output = [];
        for (var key in this.items) {
            output.push(this.items[key]);
        }
        return output;
    };
    return Dictionary;
}());
exports["default"] = Dictionary;
//# sourceMappingURL=dictionaries.js.map