/*
 * @Description: 
 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21

 * @Author: Kyeoni hujr
 * @Date: 2020-05-25 18:43:49
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2020-05-25 18:49:47
 */ 
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  return x > 0 ? +(String(Math.abs(x)).split('').reverse().join('')) : -(String(Math.abs(x)).split('').reverse().join('')) 
};
console.log(reverse(123))
