/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
 
Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let firstElem = strs.shift()  // removes from the beginning
    let prefix = ''; 

    let i = 0;
    while(i < firstElem.length){
        let booleanValue = false;
        for(let elem of strs){
            if(elem[i] !== firstElem[i]){
                booleanValue = false;
                break;
            }
            booleanValue = true;
        }
        if(booleanValue === true){
            prefix += firstElem[i];
        }
        i++;
    }
    
    return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["flower","flo", 'floer']));