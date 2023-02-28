/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up 
to target.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
Only one valid answer exists.
*/

// Accepted answer

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // what do you return if sum is not equal to target, return 'pair does not exist'
    let indexArray = [];
    for(let i = 0; i< nums.length; i++){
        for(let j = i + 1; j< nums.length; j++){  // j = i + 1;
            if(nums[i] + nums[j] === target){
                //return [i, j];
                indexArray.push(i);
                indexArray.push(j);
                return indexArray;
            }
        }
    }
    if (indexArray.length > 0){
        return indexArray
    }
    return "Pair does not exist";
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,7,11,15], 35));
console.log(twoSum([2, 5, 5, 11], 10));

// Discussion space and time complexity -> O(n^2) 2 for loops
// Can you do it in O(n)