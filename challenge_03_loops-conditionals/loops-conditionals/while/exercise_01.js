/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let even_number = 10;

while (even_number <= 40) {
  if (even_number % 2 == 0) {
    console.log(even_number);
  }
  even_number++;
}

let odd_number = 11;

while (odd_number <= 39) {
  if (odd_number % 2 !== 0) {
    console.log(odd_number);
  }
  odd_number++;
}
