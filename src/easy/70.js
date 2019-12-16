/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

 */

 /**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     function methodC(up,down) {
//         let result = 1
//         let upTemp = up
//         for (let i = 1; i <= upTemp; i++, up--, down--) {
//             result *=  down / up
//         }
//         return result
//     }
//     let result = 1
//     for (let i = 1; i <= Math.floor(n/2); i++) {
//         result += methodC(i,n-i)
//     }
//     return result
// };


/**
 * 不难发现，这个问题可以被分解为一些包含最优子结构的子问题，即它的最优解可以从其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题。

第 i 阶可以由以下两种方法得到：

在第 (i − 1)阶后向上爬一阶。

在第(i−2) 阶后向上爬 2 阶。

所以到达第 i 阶的方法总数就是到第 (i−1) 阶和第 (i−2) 阶的方法数之和。

令 dp[i] 表示能到达第 i 阶的方法总数：

dp[i]=dp[i−1]+dp[i−2]

 */
var climbStairs = function (n) {
    let dp = []
    dp.push(1)
    dp.push(1)

    for (let i = 2; i <= n; i++) {
        dp.push(dp[i-1] + dp[i-2])
    }

    return dp[n]
}

console.log(climbStairs(6))