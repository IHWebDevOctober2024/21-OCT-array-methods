console.clear();
const presidentsOfSpain = [
  { name: "José Luis Rodríguez Zapatero", yearElected: 2004 },
  { name: "Leopoldo Calvo-Sotelo", yearElected: 1981 },
  { name: "José María Aznar", yearElected: 1996 },
  { name: "Pedro Sánchez", yearElected: 2018 },
  { name: "Mariano Rajoy", yearElected: 2011 },
  { name: "Felipe González", yearElected: 1982 },
  { name: "Adolfo Suárez", yearElected: 1976 },
];

// THE SORT METHOD MODIFIES THE ORIGINAL ARRAY ⚠️

presidentsOfSpain.sort((presidentA, presidentB) => {
  console.log("PRESIDENT A: ", presidentA);
  console.log("PRESIDENT B: ", presidentB);

  return presidentA.yearElected - presidentB.yearElected;
  /*
  // this is the same thing but with more lines of code. The sort just needs positive numbers, negative or 0 
  if (presidentA.yearElected > presidentB.yearElected) {
    return 10;
  } else {
    return -10;
  }
 */
});

console.log(presidentsOfSpain);

// I want to have another array where they are in order alphabetically
// I don't want to modify the previous one

const copyOfPresidents = presidentsOfSpain.map((president) => president);

copyOfPresidents.sort((presidentA, presidentB) => {
  return presidentA.name.localeCompare(presidentB.name);
});

console.log("THIS IS THE NEW COPY IN ALPHABETICAL ORDER: ", copyOfPresidents);

// reverse modifies the order of the original one ⚠️

copyOfPresidents.reverse();

console.log(copyOfPresidents);

const numbers = [10, 2, 1, 4, 5];

numbers.reverse(); // not in an specific order, just the opposite of the original

console.log(numbers);
