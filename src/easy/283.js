/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

 */ 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 常规算法
// var moveZeroes = function(nums) {
//   let tempArr = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       tempArr.push(nums[i])
//     }
//   }
//   for (let i = 0; i < tempArr.length; i++) {
//     nums[i] = tempArr[i]
//   }
//   for (let i = tempArr.length; i < nums.length; i++) {
//     nums[i] = 0
//   }
//   console.log(nums)
// }

var moveZeroes = function(nums) {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (i!==j) {
        let temp = nums[i]
        nums[i] =  nums[j]
        nums[j++] = temp
      } else {
        j++
      }
    }
  }
}

// 双指针
// var moveZeroes = function(nums) {
//   let i = 0, j = 0
//   while (j < nums.length) {
//     if (i < nums.length) {
//       if (nums[i] !== 0) {
//         nums[j] = nums[i]
//         j++
//       }
//       i++
//     } else {
//       nums[j] = 0
//       j++
//     }
//   }
//   console.log(nums)
// };

moveZeroes([0,1,0,0,0,0,3,12])


// var moveZeroes = function(nums) {
//   let i = nums.length - 1
//   while (i >= 0) {
//     if (nums[i] === 0) {
//       nums.splice(i,1)
//       nums.push(0)
//     }
//     i--
//   }
//   console.log(nums)
// };
// moveZeroes([])


