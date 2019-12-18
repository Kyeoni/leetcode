/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 示例:

输入: 3
输出: [1,3,3,1]
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    for (let i = 0; i < rowIndex + 1; i++) {
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
    return result[rowIndex]  
};

console.log(getRow(10))