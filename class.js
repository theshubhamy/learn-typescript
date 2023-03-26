"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_age;
// class
// constructor:-  it is responsible for creating an instance of this class.
// typescript have either parameterized or  default constructor
class Employee {
    // constructor
    constructor(id, name, age, address) {
        _Employee_age.set(this, void 0);
        this.id = id;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_age, age, "f");
        this.address = address;
    }
    // methods
    getNameWithAddress() {
        return `${this.name}  stay a Arekere ${this.address} `;
    }
}
_Employee_age = new WeakMap();
let newEmp = new Employee(1, "shubham kumar", 22, "bangalore");
console.log(newEmp.getNameWithAddress());
console.log(newEmp);
class Manager extends Employee {
    constructor(id, name, age, address) {
        super(id, name, age, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address} `;
    }
}
const newMang = new Manager(2, "Kajal", 20, "bangalore");
console.log(newMang.getNameWithAddress());
