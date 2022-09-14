/**
 * 统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：

0 <= 数组长度 <= 50000

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 普通方法
var search = function(nums, target) {
  return nums.filter(v => v === target).length
};

console.log(search([5,7,7,8,8,10],6))