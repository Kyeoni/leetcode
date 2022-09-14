/**
 * 349. 两个数组的交集
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   let result = []
//   nums1 = new Set(nums1)
//   nums2 = new Set(nums2)
//   let set1 = nums1, set2 = nums2
//   if (nums1.size > nums2.size) {
//     set1 = nums1
//     set2 = [...nums2]
//   } else {
//     set2 = [...nums1]
//     set1 = nums2
//   }
//   for (let i = 0; i < set2.length; i++) {
//     if (set1.has(set2[i])) {
//       result.push(set2[i])
//     }
//   }
//   return result
// };

var intersection = function(nums1, nums2) {
  nums1 = [...new Set(nums1)].sort((a,b) => a - b)
  nums2 = [...new Set(nums2)].sort((a,b) => a - b)
  let result = []
  let i = 0, j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      j++
      i++
    } else {
      nums1[i] > nums2[j] ? j++ : i++
    }
  }
  return result
}

console.log(intersection([4,9,5],[9,4,9,8,4]))