"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "shubham",
    age: 22,
    id: 1,
};
let empp = { name: "shubham", age: 22, id: 1, salary: 9 };
// array distucturing
let [user1, user2, ...restUser] = [
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
