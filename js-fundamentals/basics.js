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