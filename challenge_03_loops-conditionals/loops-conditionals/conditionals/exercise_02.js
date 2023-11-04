/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

const age = 20; //declare the variable 'age' whith the 20 valor.

if (age < 3) {
  console.log("You're just a baby!");
}
// if 'age' is less or equals on 3 his print the messege "You are in elementary school, kid.".
else if (age >= 3) {
  console.log("You are in elementary school, kid.");
}
//this 'else if' never be evalue, becouse the 'age' was alredy big or equal to 3 in the previus step.
else if (age >= 13) {
  console.log("Nice, you're a teenager!");
}
//this 'else if' have's the same problem "never be evalue" becouse the previous conditions he's copleted.
else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

/* 

corrected and commented code:

const age = 20;//declare the variable 'age' whith the 20 valor.

if (age < 3) {
  console.log("You're just a baby!");
} 
//I look if the 'age' is between 3 and 13 he print this message "You are in elementary school, kid." it is true.
else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} 
//I look if the 'age' is between 3 and 18 he print this message "Nice, you're a teenager!" it is true.
else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} 
//if 'age' is big or equal than 18, he's print this message "Most places consider you an adult.".
else if (age >= 18) {
  console.log("Most places consider you an adult.");
} 
//if none of the above is true, it will print this messege "What? How did this happen!?".
else {
  console.log("What? How did this happen!?");
}

*/
