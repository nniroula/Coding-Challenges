/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, 
which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is 
not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making 
four. The same principle applies to the number nine, which is written as IX. There are six instances where 
subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.

Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
    
Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanValues = {
        'I': 1,     // consider the following fact
        'V': 5,    // IV
        'X': 10,    // IX
        'L': 50,    // XL
        'C': 100,   // XC
        'D': 500,   // CD
        'M': 1000   // CM
    }

    //  Input: s = "MCMXCIV"
    // Output: 1994

    let integerValueHolder = 0;

    for(let i = 0; i< s.length; i++){
        if(s[i] === 'I' && s[i + 1] === 'X'){  // consider case insensitvie right now
            integerValueHolder += 9;
            i++;
        }else if(s[i] === 'I' && s[i + 1] === 'V'){
            integerValueHolder += 4;
            i++;
        }else if(s[i] === 'X' && s[i +1] === 'L'){
            integerValueHolder += 40;
            i++;
        }else if(s[i] === 'X' && s[i+1] === 'C'){
            integerValueHolder += 90;
            i++;
        }else if(s[i] === 'C' && s[i + 1] === 'D'){
            integerValueHolder += 400;
            i++;
        }else if(s[i] === 'C' && s[i + 1] === 'M'){
            integerValueHolder += 900;
            i++;
        }else{
            integerValueHolder += romanValues[s[i]];
        } 
    }
    return integerValueHolder;
};
console.log(romanToInt("MCMXCIV"));


// Pseudo code
/*
create a placeholder variable and initialize it to 0
create an object for each unique roman keys - I, V, X, C, M, D with their integer values as values
in the for loop, if index 0 + index 1 values === IV for eg, then return placeholder variable += 4 & so on for
IX, XL, XC, CM, and CD.
Then increment i(i++) in the if block so when moved to the next block i is incremented.
else, return placeholder += romanValue[i]; -> i is from for loop

*/