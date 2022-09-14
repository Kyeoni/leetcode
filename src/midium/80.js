/**
 * 80. 删除排序数组中的重复项 II
 * 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例 1：

输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 你不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 你不需要考虑数组中超出新长度后面的元素。
 
提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 按递增顺序排列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // [1,1,1,2,2,3]
  // [0,0,1,1,1,1,2,3,3]
  let temp = nums[0]
  let j = 1
  let times = 1
  for (let i = 1; i < nums.length; i++) {
    if (temp === nums[i]) {
      times++
    } else {
      nums[j] = temp = nums[i]
      times = 1
    }
    if (i !== j) {
      nums[j] = nums[i]
    }
    if (times <= 2) {
      j++
    }
  }
  return j
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,1,1,2,2,3]))
