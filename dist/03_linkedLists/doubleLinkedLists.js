"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this.head = null;
        this.length = 0;
    }
    DoubleLinkedList.prototype.size = function () {
        return this.length;
    };
    DoubleLinkedList.prototype.toString = function () {
        var output = '';
        var current = this.head;
        while (current) {
            output += current.data + ", ";
            current = current.next;
        }
        output = output.substring(0, output.lastIndexOf(','));
        return output;
    };
    DoubleLinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    DoubleLinkedList.prototype.getHead = function () {
        return this.head;
    };
    DoubleLinkedList.prototype.insert = function (data, index) {
        if (index > -1 && index <= this.length) {
            var newNode = new Node(data);
            var current = this.head;
            var previous = void 0;
            var count = 0;
            if (index === 0) {
                if (!this.head) {
                    this.head = newNode;
                    this.tail = newNode;
                }
                else {
                    newNode.next = current;
                    current.prev = newNode;
                    this.head = newNode;
                }
            }
            else if (index === this.length) {
                current = this.tail;
                current.next = newNode;
                newNode.prev = current;
                this.tail = newNode;
            }
            else {
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                newNode.next = current;
                previous.next = newNode;
                current.prev = newNode;
                newNode.prev = previous;
            }
            this.length++;
            return true;
        }
        return false;
    };
    DoubleLinkedList.prototype.indexOf = function (data) {
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
    DoubleLinkedList.prototype.removeAt = function (index) {
        if (index > -1 && index < this.length) {
            var current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.length === 1) {
                    this.tail = null;
                }
                else {
                    this.head.prev = null;
                }
            }
            else if (index === (this.length - 1)) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
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
                current.next.prev = previous;
            }
            this.length--;
            return current.data;
        }
        return null;
    };
    DoubleLinkedList.prototype.remove = function (data) {
        var index = this.indexOf(data);
        return this.removeAt(index);
    };
    DoubleLinkedList.prototype.reverse = function () {
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
    return DoubleLinkedList;
}());
exports.DoubleLinkedList = DoubleLinkedList;
//# sourceMappingURL=doubleLinkedLists.js.map