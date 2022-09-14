/**
 * 1299. 将每个元素替换为右侧最大元素
 * 
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

完成所有替换操作后，请你返回这个数组。

示例：

输入：arr = [17,18,5,4,6,1]
输出：[18,6,6,6,1,-1]

提示：

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr.length) {
      result.push(-1)
      continue
    }
    let temp = arr.slice(i + 1)
    result.push(Math.max(...temp))
  }
  return result
};

console.log(replaceElements([17,18,5,4,6,1]))