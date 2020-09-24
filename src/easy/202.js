/*
 * @Description: 
 编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

 

示例：

输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 * @Author: Kyeoni hujr
 * @Date: 2020-05-25 20:19:25
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2020-05-25 20:31:18
 */ 

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num = String(n).split('')
  let result = num.reduce((acc,cur,id,arr) => {
    return +acc + Math.pow(+cur,2)
  },0)
  return result === 1 ? true : result === 4 ? false: isHappy(result)
};


console.log(isHappy(55))