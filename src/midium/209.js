/**
 * 209. 长度最小的子数组
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

进阶：

如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法 时间复杂度O(n^2) 空间复杂度O(1)
// var minSubArrayLen = function(s, nums) {
//   let count = Number.MAX_SAFE_INTEGER
//   for (let i = 0; i < nums.length; i++) {
//     let plus = nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//       plus += nums[j]
//       if (plus >= s) {
//         count = Math.min(count, j - i + 1)
//         break
//       }
//     }
//   }
//   return count
// };

// 滑动窗口 双指针/双索引 时间复杂度O(n) 空间复杂度O(1)
// var minSubArrayLen = function(s, nums) {
//   let left = 0, right = -1
//   let count = nums.length + 1
//   let plus = 0
//   while (!((right === nums.length - 1) && plus < s)) {
//     if (plus >= s) {
//       count = Math.min(count, right - left + 1)
//       plus -= nums[left++]
//     } else {
//       plus += nums[++right]
//     }
//   }
//   if (count === nums.length + 1) {
//     return 0
//   }
//   return count
// }


var minSubArrayLen = function(s, nums) {
  let left = 0, right = -1
  let sum = 0
  let count = nums.length + 1
  while (left < nums.length) {
    if (sum < s) {
      sum += nums[++right]
    } else {
      sum -= nums[left++]
    }
    if (sum >= s) {
      count = Math.min(count, right - left + 1)
    }
  }

  return count === nums.length + 1 ? 0 : count
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))