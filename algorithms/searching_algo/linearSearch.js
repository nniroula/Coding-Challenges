/**
 * In linear search, you start searching from the index 0 and visit each element index 1 through end
 * 
 * @param {*} arr 
 * @param {*} searchValue 
 * return true if value is found, and false if not found
 * return index where value is found
 */

const linearSearch = (arr, searchValue) => {
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

O(n): O(n^2)
*/