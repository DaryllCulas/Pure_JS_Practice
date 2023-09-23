// Task 1 - last loop value

  let i = 3;

  while (i) {
    console.log(i--); // 3, 2, 1
}


// Task 2 - Which values does the while loop show?

// Prefix form
  let x = 0;
    while(++x > 5) { 
      console.log(x); // 1, 2, 3, 4
    }

// Postfix form 
  let z = 0;
    while(z++ > 5) {
      console.log(z) // 1, 2, ,3, 4, 5
    }


// Task 3 - Which values get shown by the "for" loop?

// Postfix form
for (let i = 0; i < 5; i++) console.log( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log( i ); // 0, 1, 2, 3, 4

// Task 4 - Output even numbers in the loop -> Use the for loop to output even numbers from 2 to 10.

for(let i = 2; i <= 10; i+=2) {
  console.log(i)
}

// Task 5 - Replace "for" with "while" -> Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

while (i < 3) {
  console.log(`number ${i}`);
  i++
}


// Task 6 - Repeat until the input is correct -> Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line. Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let attempts = true;


while(attempts != false) {
    let visitor = +prompt("Enter a number that greater than 100");
        if(visitor == false || visitor == null) {
            break;     
    }
      if(visitor > 100) {
          alert("Nice")
            attempts = false;
                break;
        } else {
              alert("Input again!");
        }

}

// Task 7 - Output prime numbers - An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself. In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n. For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4. Write the code which outputs prime numbers in the interval from 2 to n. For n = 10 the result will be 2,3,5,7. P.S. The code should work for any n, not be hard-tuned for any fixed value.

let attempt = false;
let bracket = [];

while(!!!attempt) {
   let input = +prompt("Enter a number if prime or not: ");

    if(input == null || input == false) {
      alert("Canceled")
        break;
    }

    if(input < 2) {
       alert(`${input} is not prime number. please try again`);
    }

   for(let i = 2; i <= input; i++) {
      if( input % i === 0) {
        alert(`${input} is not a prime number`);
         break;
      }
      if(input % i !== 0) {
         alert(`${input} is a prime number`);
         break;
      }
 
   }
      
    
}




