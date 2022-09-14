/**
 * 215. 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  k = nums.length - k
  console.log('k:',k)
  let dest = nums[0]
  let left = -1, right = nums.length
  let lastLeft = left, lastRight = right
  while (1) {
    console.log('left:',left)
    console.log('right:',right)
    for (let i = left + 1; i < right;) {
      if (nums[i] > dest) {
        let temp = nums[i]
        nums[i] = nums[--right]
        nums[right] = temp
      } else if (nums[i] < dest) {
        let temp = nums[i]
        nums[i++] = nums[++left]
        nums[left] = temp
      } else {
        i++
      }
    }
    let now = left + 1
    console.log('now:',now)
    if (now === k) {
      return dest
    } else if (now > k) {
      lastRight = right
      let temp = left
      left = lastLeft
      console.log('lastLeft:',lastLeft)
      right = now
      lastLeft = temp
    } else {
      lastLeft = left

      let temp = right
      left = now
      right = lastRight
      console.log('lastRight:',lastRight)

      lastRight = temp
    }
    dest = nums[left + 1]
    console.log(nums)
  }
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))