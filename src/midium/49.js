/**
 * 49. 字母异位词分组
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 时间复杂度 O(nklogk) 空间复杂度 O(1)
var groupAnagrams = function(strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i].split('').sort().join('');
    map.set(element, [...(map.get(element) || []), strs[i]])
  }
  // console.log(map.values())
  // return [...map].map(([name, value]) => value)
  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))