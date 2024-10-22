console.clear();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

console.log(result);

// REDUCE METHOD is RETURNING ONLY ONE VALUE

const resultReduce = numbers.reduce((accumulator, currentValue) => {
  console.log("ACCUMULATOR: ", accumulator);
  console.log("CURRENT VALUE: ", currentValue);
  return accumulator + currentValue;
}, 10000); // 10000 is now the initial accumulator

console.log("RESULT REDUCE:", resultReduce);

const users = [
  { firstname: "John", age: 25, email: "john@example.com" },
  { firstname: "Jane", age: 30, email: "jane@example.com" },
  { firstname: "Alice", age: 28, email: "alice@example.com" },
  { firstname: "Bob", age: 22, email: "bob@example.com" },
  { firstname: "Charlie", age: 35, email: "charlie@example.com" },
  { firstname: "David", age: 27, email: "david@example.com" },
  { firstname: "Eve", age: 24, email: "eve@example.com" },
  { firstname: "Frank", age: 29, email: "frank@example.com" },
  { firstname: "Grace", age: 31, email: "grace@example.com" },
  { firstname: "Hannah", age: 26, email: "hannah@example.com" },
];

const sumAges = users.reduce((acc, cur) => {
  console.log("ACCUMULATOR: ", acc);
  console.log("CURRENT VALUE: ", cur);
  return acc + cur.age;
}, 0);

console.log("THIS IS THE SUM OF ALL THE AGES: ", sumAges);
console.log("THIS IS THE AVG OF ALL THE AGES: ", sumAges / users.length);
