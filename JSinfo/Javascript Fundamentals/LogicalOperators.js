// Task 1 - What's the result of OR?

console.log( null || 2 || undefined ); // 2

// Task 2 - What's the result of OR'ed alerts?

console.log( console.log(1) || 2 || console.log(3)); // 2

// Task 3 - What is the result of AND?

console.log(1 && null && 2); // null

// Task 4 - What is the result of AND'ed alerts?

console.log(console.log(1) && console.log(2)); // 1 undefined

// Task 5 - The result of OR AND OR 

console.log( null || 2 && 3 || 4 ); // 3

// Task 6 - Check the range between

const ageRange = (age) => {
  return (age >= 14 && age <= 90) ? "Inclusively" : "Exclusively";
}

console.log(ageRange(90)); // Inclusively
console.log(ageRange(15)); // Inclusively
console.log(ageRange(9)); // Exclusive
console.log(ageRange(91)); // Exclusively

// Task 7 - Check the range outside

const usingNotAgeRange = (age) => {

  if (!(age >= 14 && age <= 90)) {
      if (age < 14 || age > 90) {
          return 'Exclusively';
      }
  }
  return 'Inclusively';
     
}
console.log(usingNotAgeRange(14));


// Task 8 - A question about "if". Which of these alerts/consoles are going to execute? What will the results of the expressions be inside if(...)?

if (-1 || 0) console.log( 'first' ); // first
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' ); // third


// Task 9 - CheckLogin

const checkTheLogin= () => {
  let attempt = true;
  while(attempt) {
 let visitor = prompt("Who's there?");
      
  if(visitor == null || visitor == false) {     
    alert("Canceled");
  }
  else if(visitor == 'Admin') {
    
    let password = prompt("Password?");
    let masterPassword = 'TheMaster';
      if(password == masterPassword) {
          alert("Welcome!!");
            break;
      } else if(password == null || password == false) {
          alert("Canceled");
      } else {
          alert("Wrong Password!");
      }
      
  } else {
    alert("I don't know you!");
  }   

}
}
  
checkTheLogin();