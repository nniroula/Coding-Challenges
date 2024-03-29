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

/*
var isValid = function(s) {
    // You cannot remove char from string, so convert string to an array and then join them back later to 
    // revert to string
    let stringToArray = s.split('');
    let boolValue = false;

    let count = 0;
    while(count < stringToArray.length){
        let firstItem = stringToArray[0];
        let lastIndexOfFirstItem = stringToArray.lastIndexOf(firstItem); // this
        let slicedArray = stringToArray.slice(lastIndexOfFirstItem + 1);
        let firstIndexOfOppositeParen = 0;

        if(firstItem === '('){  // "([)]"
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
            console.log(slicedArray);
            firstIndexOfOppositeParen = slicedArray.indexOf('}');  // this
            if(firstIndexOfOppositeParen === -1){
                boolValue = false;
                return boolValue;
            }
            let actualIndexInStringS = lastIndexOfFirstItem + firstIndexOfOppositeParen + 1; // this
            stringToArray.splice(actualIndexInStringS, 1);
            stringToArray.splice(lastIndexOfFirstItem, 1);
        }
        else if(firstItem === '['){
            firstIndexOfOppositeParen = slicedArray.indexOf(']');  // this
            if(firstIndexOfOppositeParen === -1){
                boolValue = false;
                return boolValue;
            }
            let actualIndexInStringS = lastIndexOfFirstItem + firstIndexOfOppositeParen + 1; // this
            stringToArray.splice(actualIndexInStringS, 1);
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
let s8 = "([)]";   // false per leetcode, per me its true

// console.log("Results ..... ");
// console.log(isValid(s1)); // true
// console.log(isValid(s2));  // true
// console.log(isValid(s3));  // false
// console.log(isValid(s4));    // false
// console.log(isValid(s5));
// console.log(isValid(s6));
// console.log(isValid(s7));
console.log(isValid(s8));

*/



// for leetcode purpose


/**
 * @param {string} s
 * @return {boolean}
 */

/*
var isValid = function(s) {
    // You cannot remove char from string, so convert string to an array and then join them back later to 
    // revert to string

    // for leetcode let s8 = "([)]";   is false, s7 = "{[]}" is true

    /*
    let trueOrFalse = false;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" && s[i+1] === ")"){
            i++;
            trueOrFalse = true;
        }else if(s[i] === "{" && s[i+1] === "}"){
            i++;
            trueOrFalse = true;
        }else if(s[i] === "[" && s[i+1] === "]"){
            i++;
            trueOrFalse = true;
        }else{
            trueOrFalse = false;
        }
    }
    return trueOrFalse;
    */
    
    /*
    // convert to an array
    let stringToArray = s.split('');
    console.log(stringToArray);

    let isValidParenthesis = false;
    let firstElem = s[0];
    let lastIndexOfOppositeParen = stringToArray.length - 1;
    let calculatedLastIndexOfOppParen = 0;
    if(firstElem === '('){
        lastIndexOfOppositeParen = stringToArray.lastIndexOf(')');
        calculatedLastIndexOfOppParen = stringToArray.length - 1;
        if(lastIndexOfOppositeParen !== calculatedLastIndexOfOppParen){
            isValidParenthesis = false;
            return isValidParenthesis;
        }else{
            stringToArray.shift();
            stringToArray.pop();
            isValidParenthesis = true;
        }
    }else if(firstElem === '{'){
        lastIndexOfOppositeParen = stringToArray.lastIndexOf('}');
        calculatedLastIndexOfOppParen = stringToArray.length - 1;
        if(lastIndexOfOppositeParen !== calculatedLastIndexOfOppParen){
            isValidParenthesis = false;
            return isValidParenthesis;
        }else{
            stringToArray.shift();
            stringToArray.pop();
            isValidParenthesis = true;
        }
    }else if(firstElem === '['){
        lastIndexOfOppositeParen = stringToArray.lastIndexOf(']');
        calculatedLastIndexOfOppParen = stringToArray.length - 1;
        if(lastIndexOfOppositeParen !== calculatedLastIndexOfOppParen){
            isValidParenthesis = false;
            return isValidParenthesis;
        }else{
            stringToArray.shift();
            stringToArray.pop();
            isValidParenthesis = true;
        }
    }else{
        isValidParenthesis = false;
        return isValidParenthesis;
    }
    return isValidParenthesis;
};

let s1 = "()";
let s2 = "()[]{}";
let s3 = ")(";  // false
let s4 = "(]";  // false
let s5 = "((({{[}}))"; // false
let s6 = "(]}{])";  // false
let s7 = "{[]}";    // true
let s8 = "([)]";   // false per leetcode, per me its true

// console.log("Results ..... ");
// console.log(isValid(s1)); // true
// console.log(isValid(s2));  // true
// console.log(isValid(s3));  // false
// console.log(isValid(s4));    // false
// console.log(isValid(s5));
// console.log(isValid(s6));
// console.log(isValid(s7));
// console.log(isValid(s8));
*/



// for leetcode purpose

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    // You cannot remove char from string, so convert string to an array and then join them back later to 
    // revert to string

    // for leetcode let s8 = "([)]";   is false, s7 = "{[]}" is true
  
    let stack = []; // stack = FILO(First In Last Out)
    // convert string to an array
    let strToArray = s.split('');
    // console.log(strToArray);
 
    // if it is opening parenthesis, push it to stack
    // if it is a closing parenthesis, compare if the last element is corresponding opposite opening parenthesis,
    //      if it is, pop the opening parenthesis from stack
    //      if it is NOT, return false (parentheses are not correctly opened and closed)

    for(let paren of strToArray){
        if(paren === '(' || paren === '{' || paren === '['){
            stack.push(paren);
        }
        // else if paren === ) and last item in stack === (, pop out (, else return false(order does not match)
        else if(paren === ')' && stack[stack.length - 1] === '('){
            stack.pop();
        }
        // else if paren === } and last item in stack === {, pop out {, else return false(order does not match)
        else if(paren === '}' && stack[stack.length - 1] === '{'){
            stack.pop();
        }
        // else if paren === ] and last item in stack === [, pop out [, else return false(order does not match)
        else if(paren === ']' && stack[stack.length - 1] === '['){
            stack.pop();
        }else{
            return false;
        }
    }
    if(stack.length === 0){
        return true;
    }else{
        return false;
    }
};

let s1 = "()";
let s2 = "()[]{}";
let s3 = ")(";  // false
let s4 = "(]";  // false
let s5 = "((({{[}}))"; // false
let s6 = "(]}{])";  // false
let s7 = "{[]}";    // true
let s8 = "([)]";   // false per leetcode, per me its true

console.log(isValid(s1)); // true
console.log(isValid(s2));  // true
console.log(isValid(s3));  // false
console.log(isValid(s4));    // false
console.log(isValid(s5));
console.log(isValid(s6));
console.log(isValid(s7));
console.log(isValid(s8));
