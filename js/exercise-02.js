/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.
*/

//declare the let variable
let cow;
//initialize the variable
cow = "Moo!";
//print the messege
console.log(cow);

//result: Moo!


/*




//Exemple of const error:

The bad code:

const cow1; --> declare the let variable
cow1"Moo!"; --> initialize the variable
console.log(cow1); --> print the variable value

result:
VM24:1 Uncaught SyntaxError: Missing initializer in const declaration

Explicaction:
II ejecute this code in const  but have's a error, because i created the empty constant variable and below I put the value of the string variable, 
something that cannot be done in const since it would cause an error in the change in let, yes it can.


Correct example of const:

const cow1 = "Moo!";
console.log(cow1);

result:
Moo!



*/
