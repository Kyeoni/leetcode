/*
 * @Description: 215 Kth Largest Element in an Array
 * @Author: Kyeoni hujr
 * @Date: 2023-08-07 21:42:42
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2023-08-07 22:16:17
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const deal = (arr, kth) => {
      let dest = arr[0]
      let left = -1, right = arr.length
      for(let i = 0; i < right;){
          if (arr[i] < dest) {
              left++
              arr[left] = arr[i]
              arr[i] = dest
              i++
          } else if (arr[i] === dest) {
              i++
          } else {
              right--
              let t = arr[right]
              arr[right] = arr[i]
              arr[i] = t
          }
      }
      if ((arr.length - (right - 1)) > kth) {
          arr.splice(0,right)
          return deal(arr, kth)
      } else if ((arr.length - (left + 1)) < kth)  {
          let kdealed = kth-(arr.length - left-1)
          arr.length = left+1
          return deal(arr, kdealed)
      } else {
        return dest
      }
  }
  return deal(nums, k)
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));