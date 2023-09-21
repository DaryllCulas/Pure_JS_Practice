// Task 1 - if(a string with zero)

if ("0") {
  console.log( 'Hello' );
}

// Answer: Yes


// Task 2 - The name of javascript 
/*
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

*/

const NameOfJavascript = (n) => {
    return (n == 'ECMAScript') ? "Right!" : "You don't know ECMAScript!";
}

console.log(NameOfJavascript('ECMAScript'));

// Task 3 - Show the sign

/*
Using if..else, write the code which gets a number via prompt and then shows in alert:

* 1, if the value is greater than zero,
* -1, if less than zero,
* 0, if equals zero.

In this task we assume that the input is always a number.


*/
const ShowTheSign = () => {
  n = prompt("Enter a number");

return (n > 0) ? alert("Greater than zero"):
  (n < 0) ? alert("Less than zero"):
  alert("Equals zero");
}

ShowTheSign();


// Task 4 - Rewrite this if using the conditional operator '?':

// Answer only:

const conditionalBranching = () => {
  const a = 4, b = 3;
  let result;
  return ( a + b < 4 ) ? result = 'Below' : result = 'Over';
}

conditionalBranching();


// Task 5: Rewrite 'if..else' into '?'

const rewritingIntoTernaryOperator = () => {
  let login = prompt("Enter role here");
  let message;
  return (login == 'Employee') ? message = 'Hello':
      (login == 'Director') ? message = 'Greetings':
      (login == '') ? message = 'No login':
      message = '';
}

rewritingIntoTernaryOperator();