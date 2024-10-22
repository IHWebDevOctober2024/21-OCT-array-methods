console.clear();

const programmingLanguages = [
  { name: "JavaScript", year: 1995 },
  { name: "Python", year: 1991 },
  { name: "Java", year: 1995 },
  { name: "C++", year: 1985 },
  { name: "Ruby", year: 1995 },
  { name: "PHP", year: 1995 },
  { name: "C#", year: 2000 },
  { name: "Go", year: 2009 },
  { name: "Swift", year: 2014 },
  { name: "Kotlin", year: 2011 },
];

const copyOfProgrammingLanguages = programmingLanguages.map(
  (language) => language // I'm creating a new array with THE SAME REFERENCES
);

copyOfProgrammingLanguages[0].year = 2026;
copyOfProgrammingLanguages.reverse();

console.log("COPY: ", copyOfProgrammingLanguages);
console.log("ORIGINAL: ", programmingLanguages);

// I WANT TO CREATE A NEW ARRAY WITH EXTRA PROPERTIES

const newArray = programmingLanguages.map((language) => {
  return { name: language.name, year: language.year, creator: "Polly" };
});

console.log(newArray);
console.log(programmingLanguages);

// HOW TO CREATE REAL COPIES (SHALLOW COPY)
// we convert it into a string and then parse it back
const shallowCopy = JSON.parse(JSON.stringify(programmingLanguages));

// ANOTHER METHOD:
const cloneOfLanguages = structuredClone(programmingLanguages);
cloneOfLanguages[0].year = 2050;

console.log("STRUCTURED CLONE: ", cloneOfLanguages);
console.log("ORIGINAL: ", programmingLanguages);
