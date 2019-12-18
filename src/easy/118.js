/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

 /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        let arr = []
        if (i === 0) {
            result.push([1])
            continue
        }
        for (let j = 0; j < i + 1; j++) {
            let a = result[i-1][j-1] || 0
            let b = result[i-1][j] || 0
            arr[j] = a + b
        }
        result.push(arr)
    }
    return result    
};

console.log(generate(10))