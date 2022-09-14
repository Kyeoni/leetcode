/**
 * 204. 计数质数
 * 
 * 统计所有小于非负整数 n 的质数的数量。

示例 1：

输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
示例 2：

输入：n = 0
输出：0
示例 3：

输入：n = 1
输出：0
 

提示：

0 <= n <= 5 * 106

 */
/**
 * @param {number} n
 * @return {number}
 */
// 基本算法 --start
// var countPrimes = function(n) {
//   if (n < 2) {
//     return 0
//   }

//   let count = 0
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       count ++
//     }
//   }
//   return count
// };

// const isPrime = num => {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       return false   
//     }
//   }
//   return true
// }
// 基本算法 --end

// 埃氏筛
const countPrimes = n => {
  // 假设均为质数
  let isPrime = Array(n).fill(1)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++
      for (let j = i * i; j < n; j = j + i) {
        isPrime[j] = 0
      }
    }
  }
  return count
}

console.log(countPrimes(10))
console.log(countPrimes(0))
console.log(countPrimes(1))