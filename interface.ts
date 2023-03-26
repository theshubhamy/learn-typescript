export interface User {
  name: string;
  age: number;
  id: number;
}

let user: User = {
  name: "shubham",
  age: 22,
  id: 1,
};

interface Employees extends User {
  salary: number;
}

let empp: Employees = { name: "shubham", age: 22, id: 1, salary: 9 };

export interface Login {
  login(): User;
}

// array distucturing

let [user1, user2, ...restUser]: User[] = [
  {
    name: "shubham",
    age: 22,
    id: 1,
  },
  {
    name: "shubhamk",
    age: 22,
    id: 2,
  },
  {
    name: "shubhamty",
    age: 22,
    id: 3,
  },
  {
    name: "shubhamt1",
    age: 22,
    id: 3,
  },
  {
    name: "shubhamt2",
    age: 22,
    id: 3,
  },
  {
    name: "shubhamt3",
    age: 22,
    id: 3,
  },
];

console.log(user1);
console.log(user2);
console.log(restUser);

// lets continue to timestamp: 2:08:30
