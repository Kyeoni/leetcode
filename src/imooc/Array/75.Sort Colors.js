/*
 * @Description: 75 Sort Colors
 * @Author: Kyeoni hujr
 * @Date: 2023-08-05 20:29:29
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2023-08-05 22:10:06
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//   // Input: nums = [2,0,2,1,1,0]
//   // Output: [0,0,1,1,2,2]

//   // Input: nums = [2,0,1]
//   // Output: [0,1,2]

//   const obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]] = obj[nums[i]]? ++obj[nums[i]] : 1
//   }
//   console.log(obj);
//   for (let i = 0; i < nums.length; i++) {
//     if(obj[0]){
//       nums[i] = 0
//       obj[0]--
//     } else if(obj[1]){
//       nums[i] = 1
//       obj[1]--
//     }else if(obj[2]){
//       nums[i] = 2
//       obj[2]--
//     }
//   }
//   console.log(nums);
// };


var sortColors = function(nums) {
  //               [1,2,0,1,1,2]
  // Input: nums = [2,0,2,1,1,1]
  // Input: nums = [1,0,2,1,1,2]
  //               [0,0,2,1,1,2]
  //               [0,0,1,1,2,2]
  // Output: [0,0,1,1,2,2]

  // Input: nums = [2,0,1]
  // Output: [0,1,2]

  let zero = -1, // zero是 [0,zero]是0
  two = nums.length // two是 [two, nums.length - 1]是2
  for(let i = 0; i < two;) {
    if(nums[i] === 0) {
      nums[i] = nums[zero + 1]
      nums[++zero] = 0
      i++
    } else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      nums[i] = nums[two-1]
      nums[--two] = 2
    }
  }
}

sortColors([2,0,2,1,1,0])