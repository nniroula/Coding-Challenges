/**
 * Array properties in js
 * a. array.length;
 * 
 * 
 * Array Methods in js are:
 *  1.  array.push(value)
 *  2. array.shift(value);  -> removes from the index 0
 *  3. array.unshift(value); -> inserts element at the beginner(index 0) of the array
 *  4. array.pop(); -> removes the last element
 *  5. array.slice(startIndex, endIndex) -> endIndex not included, use to copy portion of array
 *  6. array.splice(startIndex, how many to delete, newvalue1, newvalue2, newvalue3, ...), use to modify array
 *  7.  array[i] -> i = index of an element
 *  8.  for ... of returns values, for(let element of arr){console.log(element)} -> returns keys(values)
 *  9.  for ... in -> returns indices
 *  10. 
 *  11.
 *  12.
 */

const jsArray = () => {
    let arr1 = [1, 2, 3, 4];
    console.log(arr1);
    console.log("After slicing .... ");
    let slicedArray = arr1.slice(1, 2); // returns new array
    console.log(slicedArray);

    console.log("After applying spice method ....");
    // let splicedArray = arr1.splice(2, 2); // start at index 2, and delete 2 elements
    let splicedArray = arr1.splice(2); // start at index 2, and delete all elements after
    console.log(splicedArray); 

    console.log("push method ...");
    arr1.push(34);
    console.log(arr1);

    console.log("pop method ...");
    arr1.pop(34);
    console.log(arr1);

    console.log("unshift method ...");
    arr1.unshift(100);  // adds at the beginning
    console.log(arr1);

    console.log("shift method ...");
    arr1.shift(100);  // removes from the index 0
    console.log(arr1);

    console.log("for ... of loop .... returns values ");
    for(let elem of arr1){
        console.log(elem);
    }

    console.log("for ... in loop ..... returns indices");
    for(let elem in arr1){
        console.log(elem);
    }
}
console.log(jsArray()); // this invoke returns undefined because function has no return statement
