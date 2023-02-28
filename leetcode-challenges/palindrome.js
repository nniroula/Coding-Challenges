/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Constraints:
    -231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    // x is an integer, convert it to string
    let stringOfX = x.toString();

    let firstIndex = 0;
    let lastIndex = stringOfX.length - 1;
    while(firstIndex <= lastIndex){
        if(stringOfX[firstIndex] !== stringOfX[lastIndex]){
            return false;
        }
        firstIndex += 1;
        lastIndex -= 1;
    }
    return true;
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(1211)); // false
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));  //false

// pseudo code
/*
'babab' indices b = 0, a = 1, b = 2, a = 3, b = 4
    item at index 0 === index 4
        at index 0 + 1 === index 4 - 1
                0+1+1 === 4 - 1 - 1
    for (let i = 0; i< length; i++){
        if(string[i] === string[string.length - 1]){
            return true;
        }
        return false;
    }

    let firstIndex = 0;
    let lastIndex = string.length;
    while(firstIndex <= lastIndex){
        if(string[firstIndex] !== string[lastIndex]){
            return false;
        }
        firstIndex += 1;
        lastIndex -= 1;
    }
    return true;
*/