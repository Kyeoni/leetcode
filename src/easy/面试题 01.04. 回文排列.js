/**
 * 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

回文串不一定是字典当中的单词。

 

示例1：

输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）

 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let array = s.split('').sort()
  let obj = array.reduce((acc,cur) => {
    acc[cur] = !acc[cur] ? 1 : acc[cur] + 1
    return acc
  }, {})
  let single = 0
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] % 2 === 1) {
        single ++
      }
      if (single > 1) {
        return false
      }
    }
  }
  return true
};

console.log(canPermutePalindrome(""))
