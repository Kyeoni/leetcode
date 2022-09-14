/**
 * 164. 最大间距
 * 
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

示例 1:

输入: [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
示例 2:

输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
说明:

你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumGap = function(nums) {
//   if (nums.length < 2) {
//     return 0
//   }
//   nums.sort((a,b) => a - b)
//   let max = Number.MIN_SAFE_INTEGER
//   for (let i = 1; i < nums.length; i++) {
//     let abs = nums[i] - nums[i - 1]
//     if (abs > max) {
//       max = abs
//     }
//   }
//   return max
// };

var maximumGap = function(nums) {
  const n = nums.length;
  if (n < 2) {
      return 0;
  }
  let exp = 1;
  const buf = new Array(n).fill(0);
  const maxVal = Math.max(...nums);

  while (maxVal >= exp) {
      const cnt = new Array(10).fill(0);
      for (let i = 0; i < n; i++) {
          let digit = Math.floor(nums[i] / exp) % 10;
          cnt[digit]++;
      }
      console.log('cnt-before:',cnt)

      for (let i = 1; i < 10; i++) {
          cnt[i] += cnt[i - 1];
      }
      console.log('cnt-after-:',cnt)
      for (let i = n - 1; i >= 0; i--) {
          let digit = Math.floor(nums[i] / exp) % 10;
          buf[cnt[digit] - 1] = nums[i];
          cnt[digit]--;
      }
      console.log('buf:',buf)

      nums.splice(0, n, ...buf);
      exp *= 10;
  }
  
  let ret = 0;
  for (let i = 1; i < n; i++) {
      ret = Math.max(ret, nums[i] - nums[i - 1]);
  }
  return ret;
};


console.log(maximumGap([3,6,9,1]))