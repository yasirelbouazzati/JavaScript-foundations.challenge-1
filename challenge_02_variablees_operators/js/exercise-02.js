/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.
*/

//FIX: I Try to execute this script using 'const' instead of 'let'. Show the output and explain the cause.

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
I executed this code whith 'const,' but it resulted in an error becouse i created an empty constant varibale 
and then attempted to assign a value to it. This is not allowed with 'const' and results in an error. While with 'let', it can be done.

Correct example with const:

const cow1 = "Moo!";
console.log(cow1);

result: Moo!



*/
