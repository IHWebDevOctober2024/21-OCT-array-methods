console.clear();
const citiesInArgentina = [
  "Buenos Aires",
  "Córdoba",
  "Rosario",
  "Mendoza",
  "La Plata",
  "San Miguel de Tucumán",
  "Mar del Plata",
  "Salta",
  "Santa Fe",
  "San Juan",
];

const city = "Barcelona"; // this is the global scope, everything has access to city unless we shadow it

citiesInArgentina.forEach((city) => {
  const dummy = 10;
  // THIS IS CALLED SHADOWING, because the value of city is not Barcelona here
  // what we have between the curly brackets is the SCOPE of the function
  console.log(city);
});

// console.log(dummy); // this is not possible because dummy is declare in another scope

