/**
 * In linear search, you start searching from the index 0 and visit each element index 1 through end
 * 
 * @param {*} arr 
 * @param {*} searchValue 
 * return true if value is found, and false if not found
 * return index where value is found
 */

const linearSearch = (arr, searchValue) => {  // O(n)
    for(let element of arr){
        if(element === searchValue){
            return true;
        }
    }
    return false;
}

console.log(linearSearch([1, 3, 5, 7], 5));  // true
console.log(linearSearch([2, 4, 5, 9], 6));     // false
console.log(linearSearch(['a', 'b', 'c'], 'd'))     // false










/*
NOTE:
If it is a sorted array, then acess time might improve significantly but the complexity is the same.
in the best case you do not have to 

O(n): O(n)
*/