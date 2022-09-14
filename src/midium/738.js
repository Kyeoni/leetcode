/**
 * 738. 单调递增的数字
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

（当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

示例 1:

输入: N = 10
输出: 9
示例 2:

输入: N = 1234
输出: 1234
示例 3:

输入: N = 332
输出: 299
说明: N 是在 [0, 10^9] 范围内的一个整数。

 */
/**
 * @param {number} N
 * @return {number}
 */
// 贪心算法 时间复杂度O(n) 空间复杂度 O(n)
var monotoneIncreasingDigits = function(N) {
  N = (N + '').split('')
  // [3 3 2]
  let i = N.length - 2
  // 把最后一个元素放进去
  let result = Array(N.length).fill(0) 
  result[N.length - 1] = N[N.length - 1]
  while (i >= 0) {
    // 如果第二个大于第一个，认为是递增
    if (N[i] <= result[i + 1]) {
      result[i] = N[i]
    } else {
      // 不是递增，高位减一，低位置9
      result[i] = N[i] - 1
      result.splice(i + 1, N.length - i, ...Array(N.length - i - 1).fill('9'))
    }
    i--
  }
  return + result.join('')
};

console.log(monotoneIncreasingDigits(1234))
console.log(monotoneIncreasingDigits(10))
console.log(monotoneIncreasingDigits(332))