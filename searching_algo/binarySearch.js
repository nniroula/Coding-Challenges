/**
 * Binary search - you try to search for a value in a given colelction(eg, array). This means for a fucntion,
 * you need two parameters - collection and a value
 * 
 * Approach: it is a divide and conquer technique - you dive the array each time into half until you find the value or
 * decided that value does not exist in the array. So, O(logn) -> logn for dividing into half
 * 
 * Steps: sort the array. Find the middle value of the array and compare that value with your searh value. 
 *     - if it is same, your are done searching.
 *     - If middle value is less than the searh value, 
 *          ignore the first half of the array(slice it) and consider the upper half of the array.
 *          Then in the upper half, find the middle value and compare it to the search value. 
 *              - If it is same, you are done.
 *              - Else if the middle value is bigger than the search value, 
 *                      - take the lower half(first half) of the array and compare with each value to find if your
 *                          search value is in the array. 
 *              - If middle value is smaller than the search value 
 *                      - user the upper half of the array
 *      continue this process until you find or not find the searched value in the array. You have to find the
 *      middle value each time and compare it to the search value. This means recursion is involved here.
 * 
 */

const binarySearch = (arr, value) => {
  
    let lowerIndex = 0;
    let upperIndex = arr.length - 1;
    // find the middle index in the array
    let middleIndex = Math.floor((upperIndex + lowerIndex)/2);
    // console.log(middleIndex);
    while(lowerIndex <= upperIndex){
        middleIndex = Math.floor((upperIndex + lowerIndex)/2);
        if(arr[middleIndex] === value){
            return "Found";
        }else if(arr[middleIndex] > value){
            upperIndex = middleIndex - 1;
        }else if(arr[middleIndex] < value){
            lowerIndex = middleIndex + 1;
        }
    }
    return "Not found";
}

let arr1 = [1, 3, 7, 9, 11];
let alph = ['a', 'b', 'c', 'd'];

console.log(binarySearch(arr1, 7));  // Found
console.log(binarySearch(arr1, 10)); // Not Found
console.log(binarySearch(alph, 'a')); // Found
console.log(binarySearch(alph, 'A')); // Not Found