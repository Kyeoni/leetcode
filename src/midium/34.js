/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找 时间复杂度O(logn)
const binarySearch = (nums, target, flag) => {
  let left = 0, right = nums.length - 1
  let ret = nums.length
  while (left <= right) {
    mid = left + ((right - left) >> 1)
      console.log('mid:',mid)

    if (nums[mid] > target || (flag && nums[mid] >= target)) {
      right = mid - 1
      ret = mid
    } else {
      left = mid + 1
    }
  }
  return ret
}
// const binarySearch = (nums, target, lower) => {
//   let left = 0, right = nums.length - 1, ans = nums.length;
//   while (left <= right) {
//       const mid = left + ((right - left) >> 1)
//       // const mid = Math.floor((left + right) / 2);
//       console.log('mid:',mid)
//       if (nums[mid] > target || (lower && nums[mid] >= target)) {
//           right = mid - 1;
//           ans = mid;
//       } else {
//           left = mid + 1;
//       }
//   }
//   return ans;
// }

var searchRange = function(nums, target) {
  let ret = [-1, -1]
  let left = binarySearch(nums, target, true)
  console.log('left:',left)
  let right = binarySearch(nums, target, false) - 1
  console.log('right:',right)

  if (left <= right && right < nums.length && nums[left] === target && nums[right] === target) {
    ret = [left, right]
  }
  return ret
};

console.log(searchRange([1], 1))
// console.log(searchRange([5,7,7,8,8,10], 6))