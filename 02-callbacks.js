// A CALLBACK FUNCTION IS A FUNCTION THAT IS PASSED AS AN ARGUMENT TO ANOTHER FUNCTION

function sayHi(anotherFunction) {
  anotherFunction(); // this is a callback function, when we call the function we need to pass another function as an argument
}

function printSomething() {
  console.log("Hello world!!!");
}

sayHi(printSomething);

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kathy",
  "Liam",
  "Mona",
  "Nate",
  "Olivia",
  "Paul",
  "Quincy",
  "Rachel",
  "Sam",
  "Tina",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
];

function sayYourName(name) {
  console.log(`Your name is ${name}`);
}

names.forEach(sayYourName);

names.forEach((name) => {
  console.log(`Here we have the name: ${name}`);
});
