/*
 290. 单词规律
 
 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 */ 
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  pattern = pattern.split('')
  str = str.split(' ')
  if (pattern.length !== str.length) {
    return false
  }

  let patternMap = new Map()
  let strMap = new Map()
  for (let i = 0; i < str.length; i++) {
    if (strMap.has(str[i])) {
      if (strMap.get(str[i]) !== pattern[i] || patternMap.get(pattern[i]) !== str[i]) {
        return false
      }
    } else {
      if (patternMap.has(pattern[i])) {
        if (patternMap.get(pattern[i]) !== str[i]) {
          return false
        }
      }
      strMap.set(str[i], pattern[i])
      patternMap.set(pattern[i], str[i])
    }
  }
  return true
};

console.log(wordPattern('abba',"dog dog dog dog") === false)
console.log(wordPattern('abba',"dog cat cat dog") === true)
console.log(wordPattern('aaaa',"dog cat cat dog") === false)
console.log(wordPattern('abba',"dog cat cat fish") === false)
