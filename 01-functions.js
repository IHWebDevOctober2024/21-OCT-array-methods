console.clear();
// FUNCTION DECLARATION
myFunction();

function myFunction() {
  // this is the code of the function

  // we don't have parameters but we can access to the arguments

  console.log(arguments);
}

// FUNCTION INVOCATION
// if there are no arguments the console log is going to display an empty object
//  console.log(arguments);
myFunction();

// function EXPRESSION

// hello();
const hello = function () {
  console.log("This is a function inside a variable");
};

hello();

const bye = () => {
  console.log("this is an arrow function inside a variable");
};

bye();


