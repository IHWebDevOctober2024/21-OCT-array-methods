console.clear();

const australianCities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Hobart",
  "Darwin",
];

// MAP CREATES A NEW ARRAY BASED ON THE PREVIOUS ONE WITH WHATEVER WE RETURN
const arrayMap = australianCities.map((city) => {
  return city.toUpperCase();
});

const arrayForeach = australianCities.forEach((city, index) => {
  return city.toUpperCase();
});

console.log("THIS IS THE MAP: ", arrayMap);
// this doesn't modify the previous one
console.log("THIS IS THE ORIGINAL ARRAY: ", australianCities);

console.log("THIS IS THE FOREACH: ", arrayForeach);
// we can create a copy
const copy = australianCities.map((city) => city); // if we don't add the curly brackets we don't need the keyword return. It's implicit after the arrow
// we are not modifying the original one
copy.pop();
console.log(copy);
console.log("THIS IS THE ORIGINAL ARRAY: ", australianCities);
