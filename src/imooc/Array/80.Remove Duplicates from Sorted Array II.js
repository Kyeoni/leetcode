/*
 * @Description: 80 Remove Duplicates from Sorted Array II
 * @Author: Kyeoni hujr
 * @Date: 2023-08-04 16:51:31
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2023-08-04 21:27:45
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  // Input: nums = [1,1,1,2,2,3]
  //               [1,1,2,2,2,3]
  // Output: 5, nums = [1,1,2,2,3,_]

  // Input: nums = [0,0,1,1,1,1,2,3,3]
  //               [0,0,1,1,2,1,2,3,3]
  // Output: 7, nums = [0,0,1,1,2,3,3,_,_]

  if (nums.length <=2) {
    return nums.length
  }
  let slow = 2
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow++] = nums[fast]
    }
  }
  return slow
};

// console.log(removeDuplicates([1]));
// console.log(removeDuplicates([1,1]));
// console.log(removeDuplicates([1,1,1]));
// console.log(removeDuplicates([1,1,1,2,3]));
console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));