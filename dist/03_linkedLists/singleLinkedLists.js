"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var SingleLinkedList = (function () {
    function SingleLinkedList() {
        this.head = null;
        this.length = 0;
    }
    SingleLinkedList.prototype.size = function () {
        return this.length;
    };
    SingleLinkedList.prototype.toString = function () {
        var output = '';
        var current = this.head;
        while (current) {
            output += current.data + ", ";
            current = current.next;
        }
        output = output.substring(0, output.lastIndexOf(','));
        return output;
    };
    SingleLinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    SingleLinkedList.prototype.getHead = function () {
        return this.head;
    };
    SingleLinkedList.prototype.append = function (data) {
        var newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };
    SingleLinkedList.prototype.insert = function (data, index) {
        if (index > -1 && index <= this.length) {
            var newNode = new Node(data);
            var current = this.head;
            var previous = void 0;
            var count = 0;
            if (index === 0) {
                newNode.next = current;
                this.head = newNode;
            }
            else {
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.length++;
            return true;
        }
        return false;
    };
    SingleLinkedList.prototype.indexOf = function (data) {
        var index = 0;
        var current = this.head;
        while (current) {
            if (current.data === data) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    SingleLinkedList.prototype.removeAt = function (index) {
        if (index > -1 && index < this.length) {
            var current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                var count = 0;
                var previous = void 0;
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.data;
        }
        return null;
    };
    SingleLinkedList.prototype.remove = function (data) {
        var index = this.indexOf(data);
        return this.removeAt(index);
    };
    SingleLinkedList.prototype.reverse = function () {
        var current = this.head;
        var previous = null;
        var next = null;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this.head;
    };
    return SingleLinkedList;
}());
exports.SingleLinkedList = SingleLinkedList;
//# sourceMappingURL=singleLinkedLists.js.map