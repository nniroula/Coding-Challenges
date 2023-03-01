/**
 * 1. Place function in an object and execute it(call in the codebase)
 * 2. define an object
 * 3. methods in object
 * 
 * 
 */

// 1. create an Object
let student = {};

// 2. initialize object
let studentObject = {"name": 'John',  // this is not used any where, just to show initialization
                "lastName": 'Doe', 
                "function": "your function here"
            }

// 3. add an item to this object
student.name = "nabin";

// print out the object
console.log(student);   // -> returns { name: 'nabin' }

// 4. create a function and add it to the object
const write = () => {
    return "designs, creates, and writes software";
}
// add this function to the object
student.job = write;      // no function invocation (), just the name
// console.log(student);  // returns { name: 'nabin', job: [Function: write] }

// 5. call write function that is inside the object
const funcResult = student.job();   // you do not call write(), student.job() calls write()
// console.log(funcResult);

// 6. create another object and add it to the student object, call function inside the new object
const cuStudent = {
    "name": "Prinsu",
    "school": "CU Denver",
    "func1": () => { 
                        return "Read, write, and do homework at CU Denver!!!" 
                    }
};
// add this object to student object
student.cuStd = cuStudent;
// console.log(student);

// call the function inside new object
const result = student.cuStd.func1();
// console.log(result);



