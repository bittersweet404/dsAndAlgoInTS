"use strict";
exports.__esModule = true;
var Set = (function () {
    function Set() {
        this.items = {};
        this.length = 0;
    }
    Set.prototype.has = function (data) {
        return this.items.hasOwnProperty(data);
    };
    Set.prototype.add = function (data) {
        if (!this.has(data)) {
            this.items[data.toString()] = data;
            this.length++;
            return true;
        }
        return false;
    };
    Set.prototype.remove = function (data) {
        if (this.has(data)) {
            delete this.items[data];
            this.length--;
            return true;
        }
        return false;
    };
    Set.prototype.values = function () {
        var keys = [];
        for (var key in this.items) {
            keys.push(key);
        }
        return keys;
    };
    Set.prototype.clear = function () {
        this.items = {};
    };
    Set.prototype.size = function () {
        return this.length;
    };
    Set.prototype.toString = function () {
        var output = '';
        for (var key in this.items) {
            output += this.items[key] + ", ";
        }
        output = output.substring(0, output.lastIndexOf(', '));
        return output;
    };
    Set.prototype.union = function (set2) {
        var tempSet = new Set();
        for (var i = 0; i < this.values().length; i++) {
            tempSet.add(this.values()[i]);
        }
        for (var i = 0; i < set2.values().length; i++) {
            tempSet.add(set2.values()[i]);
        }
        return tempSet;
    };
    Set.prototype.intersection = function (set2) {
        var tempSet = new Set();
        for (var i = 0; i < this.values().length; i++) {
            if (set2.has(this.values()[i])) {
                tempSet.add(this.values()[i]);
            }
        }
        return tempSet;
    };
    Set.prototype.difference = function (set2) {
        var tempSet = new Set();
        for (var i = 0; i < this.values().length; i++) {
            if (!set2.has(this.values()[i])) {
                tempSet.add(this.values()[i]);
            }
        }
        return tempSet;
    };
    Set.prototype.subset = function (set2) {
        if (this.size() > set2.size()) {
            return false;
        }
        for (var i = 0; i < this.values().length; i++) {
            if (!set2.has(this.values()[i])) {
                return false;
            }
        }
        return true;
    };
    return Set;
}());
exports["default"] = Set;
//# sourceMappingURL=sets.js.map