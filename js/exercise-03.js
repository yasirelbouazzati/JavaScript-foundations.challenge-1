/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/



function getTypeOf(value) {
    return typeof value;
}


console.log(getTypeOf("suuu!")); // string
console.log(getTypeOf(28));//when i ejecute this code un consolé his printe number
//summary: the answear is number becouse the getTypeOf he show and verify in consolé that the value 28 is the type of "number"(String) in JavaScript

console.log(getTypeOf(true));
console.log(getTypeOf(null));
console.log(getTypeOf(undefined));


