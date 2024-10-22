console.clear();
const users = [
  { username: "john_doe", role: "developer", isAdmin: false },
  { username: "jane_smith", role: "designer", isAdmin: false },
  { username: "boss", role: "administrator", isAdmin: true },
  { username: "alice_jones", role: "manager", isAdmin: false },
  { username: "bob_brown", role: "developer", isAdmin: false },
  { username: "bob_burkins", role: "CEO", isAdmin: true },
];

// FILTER CREATES A NEW ARRAY (like map)
const onlyAdmin = users.filter((user) => {
  return user.isAdmin; // this has to be always a boolean
});

console.log(onlyAdmin);

const people = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 22 },
  { name: "Mickey", age: 17 },
  { name: "Donald", age: 25 },
  { name: "Goofy", age: 15 },
  { name: "Minnie", age: 19 },
];

const overEighteen = people.filter((person) => {
  return person.age > 18;
});

const kids = people.filter((person) => {
  return person.age < 18;
});

console.log(overEighteen);
console.log("KIDS: ", kids);
