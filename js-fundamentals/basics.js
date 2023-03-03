// Basic data types
/*
var = can reassign values, can redeclare, scope is function
let = can reassign value, cannot redclare, scope = block
const = cannot reassign value, cannot redeclare, scope = block

Logical operators
    And = &&,   OR = ||,  NOT = !

Primitive data types(5 types)
    Number, Undefined, Null, Boolean, String
        NUmber methods
            Math.round(2.67);
            Math.floor(3.41);
            Math.ceil(5.8);
        
        String Methods
            includes, indexOf, slice, splice

        Boolean 2 ways to convert to falsy and truthy values
            Boolean(7) -> true
            double negation
            !!(7) -> true

*/


// for ... of vs for ... in loops 

/*
// in Array
let arr = ['a', 'b', 'c', 'd', 'e'];
// for .... of
for(let char of arr){  // returns values
    console.log(char);      // returns a, b, c, d, e in vertical order
}

// for ..... in 
for(let char in arr){  // returns indices(keys)
    console.log(char);  // returns 0, 1, 2, 3, 4
}
*/

// in Object
/*
let obj1 = {
    'name': 'Nabin',
    'job': 'Software Engineer'
}
// for ... of
// for(let datum of obj1){  // returns error, object is not iterable
//     console.log(datum);
// }

// for ... in
for(let datum in obj1){    // returns keys
    console.log(datum);   // returns name job
}
for(let datum in obj1){    // returns keys
    console.log(obj1[datum]);   // returns values
}
*/

// dot and bracket notation

/*
let arg = 'language';
let obj2 = {};
let obj3 = {};

// dot notation
obj2.arg = 'JavaScript';  // arg itself becomes key, not its value
console.log(obj2);        // returns { arg: 'JavaScript' }

// bracket notation
obj3[arg] = 'js';      // value of arg becomes obj3's key
console.log(obj3);
*/

//Truthy or Falsy values in JS
/*
// Boolean values
console.log(Boolean(0))     // false
console.log(Boolean(6));    // true
// Double negation method
console.log(!!(7));         // true
console.log(!!(-4))         // true, it is not about converting negative to positvie, rather checks if a number
                            // is truthy or falsy
*/

/**
 *                      Error handling in JS, use try catch
 *          catch block only executes if there is an error in try block
 * 
 * You can customize errors in js with 'throw' key word: throw 'Coding is hard'
 * 
 * catch(err){ console.log('This is error', err); }
 * 
 * You can also use 'new' keyword to create your own error, new Error("Happy coding");
 * 
 * catch(err){
 *              err.name,
 *              err.message,
 *              err.stack
 *           }
 * 
 * 
 * 
 */

/**
 *              Finally keyword
 * try catch comes with another functionality with finally key word:
 *          try{
 *          }catch{
 *          }finally{
 *          }
 * 
 *  'finally block' runs no matter what. It executes regardless of error
 * 
 */

/**
 *      Debugging in JS
 *  1. Use chrome debugger(View -> Developer -> Developer Tools -> Sources Tab)
 *  2. Breakpoint, click on a line to add break point in your source code file
 *  3. Use "debugger" key word in your code
 */