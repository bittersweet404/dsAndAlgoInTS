"use strict";
exports.__esModule = true;
var HashTable = (function () {
    function HashTable() {
        this.table = [];
    }
    HashTable.djb2HashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };
    HashTable.prototype.toString = function () {
        var output = '';
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined && this.table[i] !== null) {
                output += i + " - " + this.table[i] + ", ";
            }
        }
        output = output.substring(0, output.lastIndexOf(','));
        return output;
    };
    HashTable.prototype.insert = function (key, value) {
        var position = HashTable.djb2HashCode(key);
        this.table[position] = value;
    };
    HashTable.prototype.remove = function (key) {
        var position = HashTable.djb2HashCode(key);
        this.table[position] = undefined;
    };
    HashTable.prototype.get = function (key) {
        var position = HashTable.djb2HashCode(key);
        return this.table[position];
    };
    return HashTable;
}());
exports["default"] = HashTable;
//# sourceMappingURL=hashTable.js.map