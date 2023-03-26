"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_age;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getEmpcount() {
        return 10;
    }
    // getter
    get empAge() {
        return __classPrivateFieldGet(this, _Employee_age, "f");
    }
    // setter
    set empAge(age) {
        __classPrivateFieldSet(this, _Employee_age, age, "f");
    }
    // constructor
    constructor(id, name, age, address) {
        _Employee_age.set(this, void 0);
        this.id = id;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_age, age, "f");
        this.address = address;
    }
    login() {
        return {
            name: "shubham",
            age: 22,
            id: 1,
        };
    }
    // methods
    getNameWithAddress() {
        return `${this.name}  stay a Arekere ${this.address} `;
    }
}
_Employee_age = new WeakMap();
let newEmp = new Employee(1, "shubham kumar", 22, {
    street: "JP Nagar",
    city: "Bangalore",
    pin: 45678,
});
console.log(newEmp.getNameWithAddress());
console.log(Employee.getEmpcount());
class Manager extends Employee {
    constructor(id, name, age, address) {
        super(id, name, age, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address} `;
    }
}
const newMang = new Manager(2, "theshubamy", 20, {
    street: "JayNagar Nagar",
    city: "Bangalore",
    pin: 45678,
});
console.log(newMang.getNameWithAddress());
