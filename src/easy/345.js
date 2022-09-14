/**
 * 345. 反转字符串中的元音字母
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1：

输入："hello"
输出："holle"
示例 2：

输入："leetcode"
输出："leotcede"
 

提示：

元音字母不包含字母 "y" 。

 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('')
  for (let i = 0, j = s.length - 1; i < j; ) {
    if (!isYuan(s[i])) {
      i++
    } else if (!isYuan(s[j])) {
      j--
    } else {
      if (s[i] !== s[j]) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
      }
      i++
      j--
    }
  }
  return s.join('')
};

const isYuan = a => {
  return ['a','A','e','E','i', 'I', 'o', 'O', 'u', 'U'].includes(a)
}

console.log(reverseVowels('leetcode') === 'leotcede')
console.log(reverseVowels('hello') === 'holle')