/**
 * 387. 字符串中的第一个唯一字符
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 

提示：你可以假定该字符串只包含小写字母。

 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let result = s.split('').reduce((acc, cur, id) => {
    if (acc[cur]) {
      acc[cur].count ++ 
    } else {
      acc[cur] = {
        index: id,
        count: 1
      }
    }
    return acc
  }, {})
  result = Object.entries(result).filter(([,{ count }]) => count === 1).sort((a, b) => a[1].index - b[1].index)
  return result.length ? result[0][1].index : -1
};

console.log(firstUniqChar(''))