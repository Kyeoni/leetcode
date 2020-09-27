/**
 * 1572. 矩阵对角线元素的和
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。

请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 */

 /**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let overLength = mat.length - 1
  let plus = 0
  for (let i = 0; i < mat.length; i++) {
    const inner = mat[i];
    for (let j = 0; j < inner.length; j++) {
      const element = inner[j];
      if (i === j || i + j === overLength) {
        plus += element
      }
    }
  }
  return plus
};

console.log(diagonalSum([[5]]))

// 思路：坐标