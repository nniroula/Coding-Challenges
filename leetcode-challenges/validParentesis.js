/**
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false
 

Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 */

    /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // You cannot remove char from string, so convert string to an array and then join them back later to 
    // revert to string
    let stringToArray = s.split('');
    let boolValue = false;

    let count = 0;
    while(count < stringToArray.length){
        let firstItem = stringToArray[0];
        // console.log(firstItem);
        let lastIndexOfFirstItem = stringToArray.lastIndexOf(firstItem); // this
        // console.log(`Last index is ${lastIndexOfFirstItem}`);
    
        let slicedArray = stringToArray.slice(lastIndexOfFirstItem + 1);
        // console.log(slicedArray);
        let firstIndexOfOppositeParen = 0;

        if(firstItem === '('){
            firstIndexOfOppositeParen = slicedArray.indexOf(')');  // this, indexof returns -1 if not found
            if(firstIndexOfOppositeParen === -1){
                boolValue = false;
                return boolValue;
            }
            let actualIndexInStringS = lastIndexOfFirstItem + firstIndexOfOppositeParen + 1; // this
            // stringToArray.pop(actualIndexInStringS);
            stringToArray.splice(actualIndexInStringS, 1);
            // stringToArray.pop(lastIndexOfFirstItem);
            // stringToArray.shift(lastIndexOfFirstItem);
            stringToArray.splice(lastIndexOfFirstItem, 1);
        } 
        else if(firstItem === '{'){
        // if(firstItem === '{'){
            console.log(slicedArray);
            firstIndexOfOppositeParen = slicedArray.indexOf('}');  // this
            if(firstIndexOfOppositeParen === -1){
                boolValue = false;
                return boolValue;
            }
            let actualIndexInStringS = lastIndexOfFirstItem + firstIndexOfOppositeParen + 1; // this
            // console.log(`Actual index is ${actualIndexInStringS}`);
            // console.log("line 70: ...");
            // console.log(stringToArray);
            // stringToArray.pop(actualIndexInStringS);
            stringToArray.splice(actualIndexInStringS, 1);
            // stringToArray.pop(lastIndexOfFirstItem);
            // stringToArray.shift(lastIndexOfFirstItem);
            stringToArray.splice(lastIndexOfFirstItem, 1);
        }
        else if(firstItem === '['){
        // if(firstItem === '['){
            firstIndexOfOppositeParen = slicedArray.indexOf(']');  // this
            if(firstIndexOfOppositeParen === -1){
                boolValue = false;
                return boolValue;
            }
            let actualIndexInStringS = lastIndexOfFirstItem + firstIndexOfOppositeParen + 1; // this
            // stringToArray.pop(actualIndexInStringS);
            stringToArray.splice(actualIndexInStringS, 1);
            // stringToArray.pop(lastIndexOfFirstItem);
            // stringToArray.shift(lastIndexOfFirstItem);
            stringToArray.splice(lastIndexOfFirstItem, 1);
        }else {
            boolValue = false;
            return boolValue;
        }
    }
    if(stringToArray.length === 0){
        boolValue = true;
    }

    return boolValue;
};

let s1 = "()";
let s2 = "()[]{}";
let s3 = ")("; 
let s4 = "(]";  // false
let s5 = "((({{[}}))"; // false
let s6 = "(]}{])";  // false
let s7 = "{[]}";

console.log("Results ..... ");
console.log(isValid(s1)); // true
console.log(isValid(s2));  // true
console.log(isValid(s3));  // false
console.log(isValid(s4));    // false
console.log(isValid(s5));
console.log(isValid(s6));
console.log(isValid(s7));