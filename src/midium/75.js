/**
 * 75. 颜色分类
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

进阶：

你可以不使用代码库中的排序函数来解决这道题吗？
你能想出一个仅使用常数空间的一趟扫描算法吗？
 

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
示例 3：

输入：nums = [0]
输出：[0]
示例 4：

输入：nums = [1]
输出：[1]
 

提示：

n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 计数排序
// var sortColors = function(nums) {
//   let obj = { 1: 0, 0: 0, 2: 0}
//   for (let i = 0; i < nums.length; i++) {
//     obj[nums[i]]++
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (obj[j] > 0) {
//         nums[i] = j
//         obj[j]--
//         break
//       }
//     }
//     // if (obj['0'] > 0) {
//     //   nums[i] = 0
//     //   obj['0']--
//     // } else if (obj['1'] > 0) {
//     //   nums[i] = 1
//     //   obj['1']--
//     // } else {
//     //   nums[i] = 2
//     // }
//   }
//   console.log(nums)
// };

// 三路快排
// var sortColors = function(nums) {
//   let zero = -1 // [0, zero] 存放0
//   let two = nums.length // [two, n-1] 存放2
//   for (let i = 0; i < two; ) {
//     if (nums[i] === 0) {
//       let temp = nums[i]
//       nums[i] = nums[++zero]
//       nums[zero] = temp
//       i++
//     }else if (nums[i] === 2) {
//       let temp = nums[i]
//       nums[i] = nums[--two]
//       nums[two] = temp
//     } else {
//       i++
//     }
//   }
// };


var sortColors = function(nums) {
  let zero = -1
  let two = nums.length
  for (let i = 0; i < two;) {
    if (nums[i] === 0) {
      let temp = nums[i]
      nums[i++] = nums[++zero]
      nums[zero] = temp
    } else if (nums[i] === 2) {
      let temp = nums[i]
      nums[i] = nums[--two]
      nums[two] = temp
    } else {
      i++
    }
  }
  console.log(nums)
}









sortColors([2,0,2,1,1,0])