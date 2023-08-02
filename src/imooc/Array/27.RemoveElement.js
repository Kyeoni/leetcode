/*
 * @Description: 27 Remove Element
 * @Author: Kyeoni hujr
 * @Date: 2023-08-02 21:23:20
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2023-08-02 22:26:23
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // Input: nums = [0,1,2,2,3,0,4,2], val = 2
  //               [0,1,4,2,3,0,2,2]
  //               [0,1,4,0,3,2,2,2]
  // Output: 5, nums = [0,1,4,0,3,_,_,_]
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val && nums[j] !== val) {
      j++
    } else if (nums[i] !== val && nums[j] === val) {
      let t = nums[j]
      nums[j] = nums[i]
      nums[i] = t
      j++
    }
  }
  return j
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([1],1));
console.log(removeElement([2], 3));
console.log(removeElement([3,3], 3));
console.log(removeElement([3,3], 5));