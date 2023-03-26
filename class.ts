// class
// constructor:-  it is responsible for creating an instance of this class.
// typescript have either parameterized or  default constructor
class Employee {
  id: number;
  name: string;
  #age: number;
  protected address: string;
  static getEmpcount(): number {
    return 10;
  }
  // constructor
  constructor(id: number, name: string, age: number, address: string) {
    this.id = id;
    this.name = name;
    this.#age = age;
    this.address = address;
  }
  // methods
  getNameWithAddress(): string {
    return `${this.name}  stay a Arekere ${this.address} `;
  }
}

let newEmp = new Employee(1, "shubham kumar", 22, "bangalore");

console.log(newEmp.getNameWithAddress());
console.log(Employee.getEmpcount());

class Manager extends Employee {
  constructor(id: number, name: string, age: number, address: string) {
    super(id, name, age, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address} `;
  }
}

const newMang = new Manager(2, "Kajal", 20, "bangalore");
console.log(newMang.getNameWithAddress());
