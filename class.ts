// class
// constructor:-  it is responsible for creating an instance of this class.
// typescript have either parameterized or  default constructor
import { Login, User } from "./interface";
interface Address {
  street: string;
  city: string;
  pin: number;
}

class Employee implements Login {
  id: number;
  protected name: string;
  #age: number;
  address: Address;
  static getEmpcount(): number {
    return 10;
  }
  // getter
  get empAge(): number {
    return this.#age;
  }
  // setter
  set empAge(age: number) {
    this.#age = age;
  }
  // constructor
  constructor(id: number, name: string, age: number, address: Address) {
    this.id = id;
    this.name = name;
    this.#age = age;
    this.address = address;
  }
  login(): User {
    return {
      name: "shubham",
      age: 22,
      id: 1,
    };
  }
  // methods
  getNameWithAddress(): string {
    return `${this.name}  stay a Arekere ${this.address} `;
  }
}

let newEmp = new Employee(1, "shubham kumar", 22, {
  street: "JP Nagar",
  city: "Bangalore",
  pin: 45678,
});

console.log(newEmp.getNameWithAddress());
console.log(Employee.getEmpcount());

class Manager extends Employee {
  constructor(id: number, name: string, age: number, address: Address) {
    super(id, name, age, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address} `;
  }
}

const newMang = new Manager(2, "theshubamy", 20, {
  street: "JayNagar Nagar",
  city: "Bangalore",
  pin: 45678,
});
console.log(newMang.getNameWithAddress());
