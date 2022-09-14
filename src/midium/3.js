/*
 * @Description: 3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

 * @Author: Kyeoni hujr
 * @Date: 2020-12-15 17:00:06
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2020-12-15 17:59:56
 */
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口/双指针/双索引
var lengthOfLongestSubstring = function(s) {
  s = s.split('')
  console.log('s:',s)
  let count = 0, map = new Map()
  let left = 0, right = -1
  while (left < s.length) {
    if (right < s.length - 1 && !(new Set(map.values()).has(2))) {
      // 无重复，右边界移动
      right++
      map.set(s[right], (map.has(s[right]) ? map.get(s[right]) : 0) + 1)
    } else {
      // 有重复或其他，左边界移动
      map.set(s[left], map.get(s[left]) - 1)
      left++
    }
    console.log('new Set(map.values()).has(2):',!new Set(map.values()).has(2))
    if (!(new Set(map.values()).has(2))) {
      count = Math.max(count, right - left + 1)
    }
    console.log('map:',map)
    console.log('s[right]:',s[right])
  }
  return count
};

console.log(lengthOfLongestSubstring('pwwkew'))